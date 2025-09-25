import React from "react";
import useFetch from "../Hooks/useFetch.hook";
import type { IVendas } from "./Interfaces/Vendas";
import { DataContext } from "./Hooks/useData.hook";

export function DataContextProvider({ children }: React.PropsWithChildren) {
    const { data, loading, error } = useFetch<IVendas[]>("https://data.origamid.dev/vendas/");

    return <DataContext.Provider value={{ data, loading, error }}>{children}</DataContext.Provider>;
}
