import {Mosaic, MosaicNode} from "react-mosaic-component";
import CompanyWidget from "./CompanyWidget.tsx";
import {useDispatch} from "react-redux";
import {setNode} from "../reducers/nodeReducer.ts";

const CompanyWidgets = () => {
    const dispatch = useDispatch();
    const initialValue:MosaicNode<number> = {
        direction: "row",
        first:{
            first:0,
            direction:"column",
            second:2
        },
        second:1,
    }
    dispatch(setNode({currentNode:2}));

    return (
        <main className={" w-full h-full"}>
            <Mosaic<number>
                mosaicId="widgets"
                renderTile={(id, path) => (
                    <CompanyWidget key={id} path={path} id={id} />
                )}
                initialValue={initialValue}
            />
        </main>
    )
}

export default CompanyWidgets;