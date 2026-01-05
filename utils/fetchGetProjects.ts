import { Project } from "../typings";
import { fetcher } from "./fetcher";

export const fetchGetProjects = async (): Promise<Project[]> => {
	return fetcher<Project[]>('/api/getProjectsXp', 'projects');
};
