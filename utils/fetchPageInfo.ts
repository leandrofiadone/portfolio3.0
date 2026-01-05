import { PageInfo } from "../typings";
import { fetcher } from "./fetcher";

export const fetchPageInfo = async (): Promise<PageInfo> => {
	return fetcher<PageInfo>('/api/getPageInfo', 'pageInfo');
};
