import {Order} from "@/app/data/data";
import {Table, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {TableBody} from "@/components/ui/table";
import AdminMenu from "@/components/component/admin/adminMenu";

export default function LastOrderComponent({data}: { data: Order[] }) {
    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <AdminMenu/>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <div className="flex items-center">
                    <h1 className="font-semibold text-lg md:text-2xl">Ultimas Ordenes</h1>
                    <Link className="p-5" href="/admin">
                        <Button className="ml-auto" size="sm">
                            Volver a productos
                        </Button>
                    </Link>

                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID de orden</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map(
                            (order) => createOrderCell(order))
                        }
                    </TableBody>
                </Table>
            </main>

        </div>


    );
}

function createOrderCell(data: Order) {

    return (
        <TableRow key={data.id}>
            <TableCell className="font-medium">{Number(data.id)}</TableCell>
            <TableCell>${data.amount.toFixed(2)}</TableCell>
            <TableCell>{data.message}</TableCell>
        </TableRow>
    );

}