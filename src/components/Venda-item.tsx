import { NavLink } from "react-router-dom";
import type { IVendas } from "../context/Interfaces/Vendas";

export default function VendaItem({ venda }: { venda: IVendas }) {
    return (
        <div className="venda box">
            <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
                {venda.id}
            </NavLink>
            <div>{venda.nome}</div>
            <div>{venda.preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</div>
        </div>
    );
}
