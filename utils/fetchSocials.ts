import { Social } from "../typings";
import { fetcher } from "./fetcher";

export const fetchSocials = async (): Promise<Social[]> => {
	return fetcher<Social[]>('/api/getSocial', 'socials');
};
