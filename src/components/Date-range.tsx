import { useState } from "react";
import DateInput from "./Date-input";

export default function DateRange() {
    const [inicio, setInicio] = useState("");
    const [final, setFinal] = useState("");

    return (
        <div>
            <DateInput label="inicio" value={inicio} onChange={({ target }) => setInicio(target.value)} />
            <DateInput label="final" value={final} onChange={({ target }) => setFinal(target.value)} />
        </div>
    );
}
