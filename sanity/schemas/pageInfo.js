export default {
	name: "pageInfo",
	title: "pageInfo",
	type: "document",
	fields: [
		{ name: "name", title: "Name", type: "string" },
		{ name: "role", title: "Role", type: "string" },
		{
			name: "heroImage",
			title: "Image",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "typewriterTexts",
			title: "Typewriter Texts",
			type: "array",
			of: [{ type: "string" }],
			description: "Texts that will rotate in the hero typewriter effect",
		},
		{
			name: "backgroundInformation",
			title: "BackgroundInformation",
			type: "text",
		},
		{
			name: "aboutText",
			title: "About Me Text",
			type: "text",
			description: "The full text for the About Me section",
		},
		{ name: "aboutMePic", title: "aboutMePic", type: "image" },
		{ name: "phoneNumber", title: "PhoneNumber", type: "string" },
		{ name: "email", title: "Email", type: "string" },
		{ name: "adress", title: "Adress", type: "string" },
		{
			name: "contactTitle",
			title: "Contact Title",
			type: "string",
			description: "The call-to-action title in the contact section",
		},
		{
			name: "socials",
			title: "Socials",
			type: "array",
			of: [{ type: "reference", to: { type: "social" } }],
		},
	],
};
