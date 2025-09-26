import Header from "./components/Header";
import SideNav from "./components/Side-nav";
import Resumo from "./pages/Resumo";
import "./index.css";
import { DataContextProvider } from "./context/Data-context";
import Vendas from "./pages/Vendas";

function App() {
    return (
        <DataContextProvider>
            <div className="container">
                <SideNav />
                <main>
                    <Header />
                    <Resumo />
                    <Vendas />
                </main>
            </div>
        </DataContextProvider>
    );
}

export default App;
