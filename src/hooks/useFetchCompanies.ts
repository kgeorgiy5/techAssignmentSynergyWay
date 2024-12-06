import {useQuery} from "@tanstack/react-query";
import {ICompany} from "../types.ts";

const useFetchCompanies = () => {
    return useQuery({
        queryKey:["companies"],
        queryFn:async () => {
            const data = await import("../data/companies-lookup.json");
            const companies:ICompany[] = data.default || [];
            return companies;
        }
    })
}

export default useFetchCompanies;