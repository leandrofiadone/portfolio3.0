import { logger } from "./logger";

export async function fetcher<T>(
	endpoint: string,
	dataKey: string
): Promise<T> {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`);

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		const data = await res.json();
		logger.log(`fetching ${dataKey}`, data[dataKey]);

		return data[dataKey];
	} catch (error) {
		logger.error(`Error fetching ${endpoint}:`, error);
		throw error;
	}
}
