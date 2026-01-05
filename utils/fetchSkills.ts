import { Skill } from "../typings";
import { fetcher } from "./fetcher";

export const fetchSkills = async (): Promise<Skill[]> => {
	return fetcher<Skill[]>('/api/getSkills', 'skills');
};
