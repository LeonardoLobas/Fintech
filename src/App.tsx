import Header from "./components/Header";
import SideNav from "./components/Side-nav";
import Resumo from "./pages/Resumo";
import "./index.css";
import { DataContextProvider } from "./context/Data-context";

import DateRange from "./components/Date-range";

function App() {
    return (
        <DataContextProvider>
            <div>
                <SideNav />
                <main>
                    <Header />
                    <DateRange />
                    <Resumo />
                </main>
            </div>
        </DataContextProvider>
    );
}

export default App;
