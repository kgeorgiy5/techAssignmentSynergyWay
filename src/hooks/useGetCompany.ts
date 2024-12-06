import {useEffect, useState} from "react";
import {ICompany} from "../types.ts";
import useFetchCompanies from "./useFetchCompanies.ts";

const useGetCompany = (ticker:string|null) => {
    const [company, setCompany] = useState<ICompany>();
    const {data:companies} = useFetchCompanies();

    useEffect(() => {
        if(!ticker){
            return;
        }

        if(!companies || companies.length < 1){
            return;
        }

            const selectedCompany = companies.find(value => value.ticker === ticker);
            setCompany(selectedCompany);
    }, [ticker, companies]);

    return company;
};

export default useGetCompany;