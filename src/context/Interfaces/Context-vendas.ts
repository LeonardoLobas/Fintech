import type { IVendas } from "./Vendas";

export interface IDataContext {
    data: IVendas[] | null;
    loading: boolean;
    error: string | null;
}
