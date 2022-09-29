interface SanityBody {
	_createdAt: string;
	_id: string;
	_rev: string;
	_updatedAt: string;
}

export interface Image {
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	};
}

export interface PageInfo extends SanityBody {
	_type: "pageInfo";
	adress: string;
	backgroundInformation: string;
	email: string;
	role: string;
	heroImage: Image;
	name: string;
	phoneNumber: string;
	aboutMePic: Image;
}

export interface Technology extends SanityBody {
	_type: "skill";
	image: Image;
	progress: number;
	title: string;
}

export interface Skill extends SanityBody {
	_type: "skill";
	image: Image;
	progress: number;
	title: string;
}

export interface Project extends SanityBody {
	_type: "projectsExperience";
	projectImage: Image;
	projectTitle: string;
	dateTime: string;
	summary: string;
	title: string;
	techUsed: Technology[];
	gitHubUrl: string;
}

export interface Social extends SanityBody {
	_type: "social";
	title: string;
	url: string;
}
