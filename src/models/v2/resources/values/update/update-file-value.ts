import { JsonObject, JsonProperty } from "json2typescript";
import { Constants } from "../../../Constants";
import { IBaseFileValue } from "../type-specific-interfaces/base-file-value";
import { UpdateValue } from "./update-value";

/**
 * @category Model V2
 */
@JsonObject("UpdateFileValue")
export abstract class UpdateFileValue extends UpdateValue implements IBaseFileValue {

    @JsonProperty(Constants.FileValueHasFilename, String)
    filename: string = "";

}

/**
 * @category Model V2
 */
@JsonObject("UpdateStillImageFileValue")
export class UpdateStillImageFileValue extends UpdateFileValue {

    constructor() {
        super(Constants.StillImageFileValue);
    }

}
