import {FC} from "react";
import {Text} from "@blueprintjs/core";

interface EmptyProps{
    text:string;
}

const Empty:FC<EmptyProps> = ({text}) => {
    return(
        <div className="w-full h-full flex flex-row justify-center items-center">
            <Text>{text}</Text>
        </div>
    )
}

export default Empty;