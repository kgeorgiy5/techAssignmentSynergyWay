import {FC} from "react";
import parseCompanyInfo from "../utils/parseCompanyInfo.ts";
import {Text} from "@blueprintjs/core";

interface InfoFieldProps{
    label:string;
    value:string|number|null|boolean;
}

const InfoField:FC<InfoFieldProps> = ({label, value}) => {
    return <Text><strong>{parseCompanyInfo(label)}:</strong> {value}</Text>
}

export default InfoField;