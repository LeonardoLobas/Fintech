import { useData } from "../context/Hooks/useData.hook";

export default function Header() {
    const { data } = useData();

    console.log(data);

    return <div>Header</div>;
}
