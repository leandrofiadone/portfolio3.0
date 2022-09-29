export default {
	name: "projectsExperience",
	title: "ProjectsExperience",
	type: "document",
	fields: [
		{ name: "projectTitle", title: "ProjectTitle", type: "string" },
		{ name: "role", title: "Role", type: "string" },
		{
			name: "projectImage",
			title: "Project Image",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "nameLink",
			title: "Name Link",
			type: "url",
		},

		{
			name: "dateTime",
			title: "Date Time",
			type: "string",
		},

		{
			name: "techUsed",
			title: "Tech Used",
			type: "array",
			of: [{ type: "reference", to: { type: "skills" } }],
		},

		{
			name: "summary",
			title: "Summary",
			type: "text",
		},

		{
			name: "gitHubUrl",
			title: "GitHub Url",
			type: "url",
		},
	],
};
