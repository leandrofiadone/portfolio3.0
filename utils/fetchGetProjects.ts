import { Project } from "../typings";

export const fetchGetProjects = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjectsXp`
	);

	const data = await res.json();
	const projects: Project[] = data.projects;

	console.log("fetching", projects);

	return projects;
};
