import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { IVendas } from "../context/Interfaces/Vendas";
import { transformData } from "../functions/Transformar-formData";

export default function GraficoVendas({ data }: { data: IVendas[] }) {
    const transformedData = transformData(data);
    return (
        <ResponsiveContainer width="99%" height={400}>
            <LineChart
                width={500}
                height={300}
                data={transformedData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pago" stroke="#8884d8" strokeWidth={3} />
                <Line type="monotone" dataKey="processando" stroke="#76b4ccff" strokeWidth={3} />
                <Line type="monotone" dataKey="falha" stroke="#82ca9d" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    );
}
