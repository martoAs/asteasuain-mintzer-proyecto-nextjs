import {Order} from "@/app/data/data";
import {Table, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {TableBody} from "@/components/ui/table";
import AdminMenu from "@/components/component/admin/adminMenu";
import PaginationControls from "@/components/component/PaginationControls";
import {createOrderCell} from "@/components/component/admin/createOrderCell";


type PrincipalProps = {
    data: Order[];
    count: number;
};

export default function LastOrderComponent({data, count}: PrincipalProps) {
    return (
        <div className="flex flex-col justify-center">
            <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                    <AdminMenu/>
                </div>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex items-center">
                    <h1 className="font-semibold text-lg md:text-2xl">Last orders</h1>
                        <Link className="p-5" href="/admin">
                            <Button className="ml-auto" size="sm">
                                Return to products
                            </Button>
                        </Link>

                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order ID</TableHead>
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
            <PaginationControls cantPages={count}/>
        </div>


    );
}

