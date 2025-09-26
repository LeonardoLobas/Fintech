import { useEffect, useState } from "react";
import DateRange from "./Date-range";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";

export default function Header() {
    const [title, setTitle] = useState("Resumo");

    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            setTitle("resumo");
            document.title = "Fintech | Resumo";
        } else if (location.pathname === "/vendas") {
            setTitle("Vendas");
            document.title = "Fintech | Vendas";
        }
    }, [location]);

    return (
        <header className="mb">
            <div className="mb daterange">
                <DateRange />
                <h1 className="box bg-3">{title}</h1>
            </div>
            <Meses />
        </header>
    );
}
