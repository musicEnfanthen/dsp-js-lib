import { JsonObject, JsonProperty } from "json2typescript";
import { Constants } from "../Constants";
import { DateConverter } from "../custom-converters/date-converter";
import { DistributionConverter } from "../custom-converters/distribution-converter";
import { UrlToUrlObjectConverter } from "../custom-converters/url-to-url-object-converter";
import { Attribution } from "./attribution-definition";
import { ProjectClass } from "./project-definition";

@JsonObject("Dataset")
export class Dataset {

    @JsonProperty(Constants.dspRepoBase + "hasAbstract", String) // URL | String
    abstract: string = "";

    @JsonProperty(Constants.dspRepoBase + "hasAlternativeTitle", String, true)
    alternativeTitle?: string = undefined;

    @JsonProperty(Constants.dspRepoBase + "hasConditionsOfAccess", String)
    conditionsOfAccess: string = "";

    @JsonProperty(Constants.dspRepoBase + "hasDateCreated", DateConverter, true)
    dateCreated?: string = undefined;

    @JsonProperty(Constants.dspRepoBase + "hasDateModified", DateConverter, true)
    dateModified?: string = undefined;

    @JsonProperty(Constants.dspRepoBase + "hasDatePublished", DateConverter, true)
    datePublished?: string = undefined;

    @JsonProperty(Constants.dspRepoBase + "hasDistribution", DistributionConverter, true)
    distribution?: string = undefined;

    @JsonProperty(Constants.dspRepoBase + "hasDocumentation", String, true) // URL | String
    documentation?: string = undefined;

    @JsonProperty(Constants.dspRepoBase + "hasHowToCite", String)
    howToCite: string = "";

    @JsonProperty(Constants.dspRepoBase + "hasLanguage", [String])
    language: string[] = [];

    @JsonProperty(Constants.dspRepoBase + "hasLicense", UrlToUrlObjectConverter)
    license: string = "";

    @JsonProperty(Constants.dspRepoBase + "hasQualifiedAttribution", [Attribution])
    qualifiedAttribution: Attribution[] = [];

    @JsonProperty(Constants.dspRepoBase + "hasStatus", String)
    status: string = "";

    @JsonProperty(Constants.dspRepoBase + "hasTitle", String)
    title: string = "";

    @JsonProperty(Constants.dspRepoBase + "hasTypeOfData", [String])
    typeOfData: string[] = [];

    @JsonProperty(Constants.dspRepoBase + "isPartOf", ProjectClass)
    project: ProjectClass = new ProjectClass();

    @JsonProperty(Constants.dspRepoBase + "sameAs", UrlToUrlObjectConverter, true)
    sameAs?: string = undefined;
}
