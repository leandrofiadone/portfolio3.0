// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import pageInfo from "./pageInfo";
import projectsExperience from "./projectsExperience";
import skills from "./skills";
import social from "./social";

export default createSchema({
	// We name our schema
	name: "default",

	types: schemaTypes.concat([social, pageInfo, projectsExperience, skills]),
});
