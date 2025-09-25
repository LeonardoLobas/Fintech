import type { IVendas } from "./Vendas";

export interface IDataContext {
    data: IVendas[] | null;
    loading: boolean;
    error: string | null;
    inicio: string;
    final: string;
    setInicio: React.Dispatch<React.SetStateAction<string>>;
    setFinal: React.Dispatch<React.SetStateAction<string>>;
}
