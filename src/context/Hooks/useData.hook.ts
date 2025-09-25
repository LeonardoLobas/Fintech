import React from "react";
import type { IDataContext } from "../Interfaces/Context-vendas";

export const DataContext = React.createContext<IDataContext | null>(null);

export function useData() {
    const context = React.useContext(DataContext);
    if (!context) throw new Error("useData sem contexto");
    return context;
}
