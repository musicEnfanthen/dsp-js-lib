import { JsonObject, JsonProperty } from "json2typescript";
import { Dataset } from "./dataset-definition";
import { Person } from "./person-definition";

@JsonObject("ProjectsMetadata")
export class ProjectsMetadata {

    @JsonProperty("@graph", [Dataset, Person])
    projectsMetadata: Array<Dataset | Person> = [];
}
