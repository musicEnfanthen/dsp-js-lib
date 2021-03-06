import { JsonConverter, JsonCustomConvert } from "json2typescript";
import { Constants } from "../Constants";
import { IUrl } from "./url-to-url-object-converter";

type IDistribution = IUrl;

@JsonConverter
export class DistributionConverter implements JsonCustomConvert<IDistribution> {

    serialize(val: IDistribution): object {
        const obj = {} as { [index: string]: string };
        obj["@type"] = val.type;
        obj[Constants.urlValue] = val.value;

        return obj;
    }

    deserialize(val: any): IDistribution {
        if (val.hasOwnProperty("@type") && val["@type"] === Constants.dataDownload) {
            const obj = {} as IDistribution;
            obj.type = val["@type"];
            obj.value = val[Constants.urlValue];
            return obj;
        } else {
            throw new Error(`Expected object of ${Constants.dataDownload} type`);
        }
    }
}
