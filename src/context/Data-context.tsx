import React, { useState } from "react";
import useFetch from "../Hooks/useFetch.hook";
import type { IVendas } from "./Interfaces/Vendas";
import { DataContext } from "./Hooks/useData.hook";

function getDate(n: number) {
    const date = new Date();
    date.setDate(date.getDate() - n);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
}

export function DataContextProvider({ children }: React.PropsWithChildren) {
    const [inicio, setInicio] = useState(getDate(30));
    const [final, setFinal] = useState(getDate(0));

    const { data, loading, error } = useFetch<IVendas[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`);

    return <DataContext.Provider value={{ data, loading, error, inicio, setInicio, final, setFinal }}>{children}</DataContext.Provider>;
}
