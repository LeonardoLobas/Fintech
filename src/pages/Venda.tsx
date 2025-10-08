import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch.hook";
import type { IVendas } from "../context/Interfaces/Vendas";
import Loading from "../components/Loading";

type VendaSemData = Omit<IVendas, "data">;

export default function Venda() {
    const { id } = useParams();
    const { data, loading } = useFetch<VendaSemData>(`https://data.origamid.dev/vendas/${id}`);

    if (loading === true) return <Loading />;
    if (data === null) return null;

    return (
        <div>
            <div className="box mb">ID: {data.id}</div>
            <div className="box mb">Nome: {data.nome}</div>
            <div className="box mb">
                Preço: {""} {data.preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
            </div>
            <div className="box mb">Status: {data.status}</div>
            <div className="box mb">Pagameto: {data.pagamento}</div>
        </div>
    );
}
