import type { IVendas } from "../context/Interfaces/Vendas";
import type { VendaDia } from "../types/Vendas-dia";

export function transformData(data: IVendas[]): VendaDia[] {
    const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
        const dia = item.data.split(" ")[0];
        if (!acc[dia]) {
            acc[dia] = {
                data: dia,
                pago: 0,
                falha: 0,
                processando: 0,
            };
        }
        acc[dia][item.status] += item.preco;
        return acc;
    }, {});

    return Object.values(dias).map((dia) => ({
        ...dia,
        data: dia.data.substring(5),
    }));
}
