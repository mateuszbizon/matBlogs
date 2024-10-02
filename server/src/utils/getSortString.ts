import { TSort } from "../types"

export function getSortString(sort: string): TSort {
    const sortDefault = "desc"
    
    if (sort === "asc" || sort === "desc") {
        return sort
    }

    return sortDefault
}