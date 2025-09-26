import VendaItem from "../components/Venda-item";
import { useData } from "../context/Hooks/useData.hook";

export default function Vendas() {
    const { data } = useData();

    if (data === null) return null;

    return (
        <ul>
            {data.map((venda) => (
                <li key={venda.id}>
                    <VendaItem venda={venda} />
                </li>
            ))}
        </ul>
    );
}
