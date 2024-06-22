import Link from "next/link"
import {Button} from "@/components/ui/button"
import {DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu} from "@/components/ui/dropdown-menu"
import {TableHead, TableRow, TableHeader, TableBody, Table} from "@/components/ui/table"
import {signOut} from '@/auth';
import Image from 'next/image';
import PaginationControls from "@/components/component/PaginationControls";
import {AlbumWithFormats} from "@/app/data/data";
import createTableCell from "@/components/component/admin/createTableCell";
import AdminMenu from "@/components/component/admin/adminMenu";

import {Package2Icon} from '@/components/component/admin/icons';

type PrincipalProps = {
    data: AlbumWithFormats[];
    count: number;
};

export default async function AdminPage({ data, count }: PrincipalProps) {

    return (
        <div className="flex flex-col justify-center">
            <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                    <AdminMenu/>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <header
                        className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                        <Link className="lg:hidden" href="#">
                            <Package2Icon className="h-6 w-6"/>
                            <span className="sr-only">Home</span>
                        </Link>
                        <div className="w-full flex-1">
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <Image
                                        alt="Avatar"
                                        className="rounded-full"
                                        height="32"
                                        src="/cat.png"
                                        style={{
                                            aspectRatio: "32/32",
                                            objectFit: "cover",
                                        }}
                                        width="32"
                                    ></Image>
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <form
                                        action={async () => {
                                            'use server';
                                            await signOut()
                                        }}
                                    >
                                        <button type="submit">Logout</button>
                                    </form>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </header>
                    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                        <div className="flex items-center">
                            <h1 className="font-semibold text-lg md:text-2xl">Productos</h1>
                            <Link className="p-5" href="/admin/add">
                                <Button className="ml-auto" size="sm">
                                    Agregar producto
                                </Button>
                            </Link>
                            <Link className="p-5" href="/admin/last">
                                <Button className="ml-auto" size="sm">
                                    Ordenes
                                </Button>
                            </Link>

                        </div>
                        <div className="border shadow-sm rounded-lg">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Titulo album</TableHead>
                                        <TableHead>Artista</TableHead>
                                        <TableHead>Precio</TableHead>
                                        <TableHead>Formatos</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map(
                                        (product) => createTableCell(product))
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </main>
                </div>
            </div>
            <PaginationControls cantPages={count}/>
        </div>
    )
}











