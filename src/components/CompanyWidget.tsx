import {
    MosaicBranch,
    MosaicWindow,
} from "react-mosaic-component";
import {ICompany} from "../types.ts";
import {FC, ReactNode, useEffect, useState} from "react";
import useGetCompany from "../hooks/useGetCompany.ts";
import InfoField from "./InfoField.tsx";
import Empty from "./Empty.tsx";
import WidgetControls from "./WidgetControls.tsx";

interface CompanyWidgetProps{
    path:MosaicBranch[];
    id:number
}

const CompanyWidget:FC<CompanyWidgetProps> = ({path , id}) => {
    const [currentTicker, setCurrentTicker] = useState<string|null>(null);
    const company = useGetCompany(currentTicker);
    const [companyInfo, setCompanyInfo] = useState<ReactNode[]>([]);

    useEffect(() => {
        if(!company){
            return;
        }

        for(const prop in company){
            if(prop === "id"){
                continue;
            }
            const key = prop as keyof ICompany;
            if(company[key]){
                setCompanyInfo(state => [...state, <InfoField label={key} value={company[key]}/>]);
            }
        }

    }, [company]);

    const handleCompanyChange = (ticker:string) => {
        setCurrentTicker(ticker);
        setCompanyInfo([]);
    }

return(
    <MosaicWindow<number>
        title="Company info"
        path={path}
        additionalControlButtonText={"select company"}
        toolbarControls={[
            <WidgetControls onTickerChange={(e) => handleCompanyChange(e)} currentTicker={currentTicker} path={path} id={id}/>
        ]}
    >
        <section className=" relative flex flex-col overflow-y-auto h-full gap-2">
            {company ? (
                <>
                    {companyInfo}
                </>
            ) : (
                <Empty text="Please select company" />
            )}
        </section>
    </MosaicWindow>
)
};

export default CompanyWidget;