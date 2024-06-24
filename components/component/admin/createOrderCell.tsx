import {Order} from "@/app/data/data";
import {TableCell, TableRow} from "@/components/ui/table";

export function createOrderCell(data: Order) {

    return (
        <TableRow key={data.id}>
            <TableCell className="font-medium">{Number(data.id)}</TableCell>
            <TableCell>${data.amount.toFixed(2)}</TableCell>
            <TableCell>{data.message}</TableCell>
        </TableRow>
    );

}