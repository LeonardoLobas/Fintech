import { useData } from "../context/Hooks/useData.hook";

export default function Resumo() {
    const { data } = useData();
    console.log(data);
    return <div>Resumo</div>;
}
