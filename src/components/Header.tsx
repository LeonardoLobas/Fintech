import DateRange from "./Date-range";
import Meses from "./Meses";

export default function Header() {
    return (
        <header className="mb">
            <div className="mb">
                <DateRange />
            </div>
            <Meses />
        </header>
    );
}
