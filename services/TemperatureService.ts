import type ITemperature from '~/interfaces/features/temperature/ITemperature';
import type IServerApiResponse from '~/interfaces/IServerApiResponse';

// eslint-disable-next-line
class TemperatureService {
	static async getTemperatureRecordsFromDb(offset?: number, limit?: number) {
		return $fetch<IServerApiResponse<ITemperature[]>>('/api/temperature', {
			params: { offset, limit },
		});
	}

	static async postEspTemperatureRecordToDb() {
		return $fetch<IServerApiResponse<ITemperature>>('/api/esp/temperature', {
			method: 'POST',
		});
	}
}

export default TemperatureService;
