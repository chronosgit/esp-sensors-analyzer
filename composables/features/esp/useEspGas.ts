import { useCurSessionStore } from '~/store/useCurSessionStore';
import GasService from '~/services/GasService';

export default function () {
	const curSessionStore = useCurSessionStore();

	const timer = ref<ReturnType<typeof setInterval> | null>(null);

	const {
		data: postedGasFromEsp,
		status,
		execute,
	} = useLazyAsyncData(
		'features.esp.useGas',
		async () => {
			try {
				if (!curSessionStore.espIpAddress) return null;

				const res = await GasService.postEspGasRecordToDb();

				if (res == null) return null;

				const { data: gasRecord } = res;

				return gasRecord;
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

	return { postedGasFromEsp, isLoading, postGasFromEsp: execute };
}
