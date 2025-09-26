import Header from "./components/Header";
import SideNav from "./components/Side-nav";
import Resumo from "./pages/Resumo";
import "./index.css";
import { DataContextProvider } from "./context/Data-context";
import Vendas from "./pages/Vendas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Venda from "./pages/Venda";

function App() {
    return (
        <BrowserRouter>
            <DataContextProvider>
                <div className="container">
                    <SideNav />
                    <main>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Resumo />} />
                            <Route path="/vendas" element={<Vendas />} />
                            <Route path="/vendas/:id" element={<Venda />} />
                        </Routes>
                    </main>
                </div>
            </DataContextProvider>
        </BrowserRouter>
    );
}

export default App;
