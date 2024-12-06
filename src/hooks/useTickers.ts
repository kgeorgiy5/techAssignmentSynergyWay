import useFetchCompanies from "./useFetchCompanies.ts";
import {useMemo} from "react";
import {ICompany} from "../types.ts";

const useTickers = () => {
    const {data:companies} = useFetchCompanies();

    return useMemo(() => {
        if(!companies || companies.length === 0){
            return [];
        }
        return companies.map((company:ICompany) => company.ticker);
    }, [companies])
}

export default useTickers;

