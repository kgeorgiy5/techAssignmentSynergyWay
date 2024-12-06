import {Button} from "@blueprintjs/core";
import {increaseNode} from "../reducers/nodeReducer.ts";
import {FC, useContext} from "react";
import {MosaicContext, MosaicPath} from "react-mosaic-component";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store.ts";
import TickerDropdown from "./TickerDropdown.tsx";

interface WidgetControlsProps{
    path:MosaicPath,
    id:number,
    currentTicker:string|null,
    onTickerChange:(e:string) => void,
}

const WidgetControls:FC<WidgetControlsProps> = ({path, id, currentTicker, onTickerChange}) => {
    const dispatch = useDispatch();
    const mosaicContext = useContext(MosaicContext);

    const currentNode = useSelector((state:RootState) => state.node.currentNode);

    const handleSplit = () => {
        const newNode = currentNode + 1;
        mosaicContext.mosaicActions.replaceWith(path, {direction:"row", first:id, second:newNode});
        dispatch(increaseNode());
    }

    const handleRemoval = () => {
        mosaicContext.mosaicActions.remove(path);
    }

    const handleExpansion = () => {
        mosaicContext.mosaicActions.expand(path, 70);
    }
   return(
       <div className="flex flex-wrap w-full">
           <TickerDropdown currentTicker={currentTicker} onChange={(e) => onTickerChange(e)}/>
           <Button onClick={handleSplit} icon="split-columns"/>
           <Button onClick={handleExpansion} icon="maximize"/>
           <Button onClick={handleRemoval} icon="delete"/>
       </div>
   )
}

export default WidgetControls;