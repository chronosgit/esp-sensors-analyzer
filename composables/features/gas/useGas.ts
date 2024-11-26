import { useCurSessionStore } from '~/store/useCurSessionStore';
import { useGasStore } from '~/store/useGasStore';
import GasService from '~/services/GasService';
import type IGas from '~/interfaces/features/gas/IGas';

export default function () {
	const curSessionStore = useCurSessionStore();
	const gasStore = useGasStore();

	const offset = ref(0);
	const limit = ref(50);

	const timer = ref<ReturnType<typeof setInterval> | null>(null);

	const {
		data: lastGas,
		status,
		execute,
	} = useLazyAsyncData<IGas[] | null>(
		'features.gas.useGas',
		async () => {
			try {
				const res = await GasService.getGasRecordsFromDb(
					offset.value,
					limit.value,
				);

				if (res == null) return null;

				const { data: gasRecords } = res;

				gasStore.completelyReAddGas(gasRecords);

				return gasRecords;
			} catch (err) {
				console.error(err);

				return null;
			}
		},
		{ immediate: false },
	);

	const isLoading = computed(() => status.value === 'pending');

	onMounted(() => {
		timer.value = setInterval(() => {
			if (!curSessionStore.isSessionRdy) return;

			execute();
		}, 3000);
	});

	onUnmounted(() => {
		if (timer.value) {
			clearInterval(timer.value);
		}
	});

	return { lastGas, isLoading };
}
