import Link from "next/link"
import {Button} from "@/components/ui/button"
import {DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu} from "@/components/ui/dropdown-menu"
import {TableHead, TableRow, TableHeader, TableCell, TableBody, Table} from "@/components/ui/table"
import {JSX, SVGProps} from "react"
import {signOut} from '@/auth';
import Image from 'next/image';
import {fetchProducts} from './fetch';
import {deleteAlbum} from './deleteProduct';

export default async function AdminPage() {


    const products = fetchProducts();
    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        <Link className="flex items-center gap-2 font-semibold" href="#">
                            <Package2Icon className="h-6 w-6"/>
                            <span className="">Wall Of Sound Store</span>
                        </Link>
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <nav className="grid items-start px-4 text-sm font-medium">
                            <Link
                                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                                href="#"
                            >
                                <PackageIcon className="h-4 w-4"/>
                                Productos
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <DeleteIcon className="h-4 w-4"/>
                                Editar productos
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="/admin/add"
                            >
                                <PlusIcon className="h-4 w-4"/>
                                Agregar productos
                            </Link>
                        </nav>
                    </div>
                </div>
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
                                    src="/placeholder.svg"
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
                                    action={async (e) => {
                                        'use server';
                                        await signOut(); // Call the signOut function
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
                                {(await products).map((product) => createTableCell(product))}
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>
        </div>
    )
}


function createTableCell(product: {
    id: number;
    title: any;
    price: any;
    new?: string | null;
    artist: any;
    formats?: any;
}) {
    const {title, artist, price, formats} = product;
    const formattedFormats = formats.map((format: { format: any; }) => format.format).join(', ');

    return (
        <TableRow key={product.id}>
            <TableCell className="font-medium">{title}</TableCell>
            <TableCell>{artist}</TableCell>
            <TableCell>${price.toFixed(2)}</TableCell>
            <TableCell>{formattedFormats}</TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Button size="icon" variant="outline">
                        <DeleteIcon className="h-4 w-4"/>
                        <span className="sr-only">Edit</span>
                    </Button>
                    <form>
                        <Button type="submit" size="icon" variant="outline"
                                formAction={deleteAlbum.bind(null, product.id)}>
                            <Trash2Icon className="h-4 w-4"/>
                            <span className="sr-only">Delete</span>
                        </Button>
                    </form>
                </div>
            </TableCell>
        </TableRow>
    );

}


function Package2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>
            <path d="M12 3v6"/>
        </svg>
    )
}


function PackageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7.5 4.27 9 5.15"/>
            <path
                d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
            <path d="m3.3 7 8.7 5 8.7-5"/>
            <path d="M12 22V12"/>
        </svg>
    )
}


function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14"/>
            <path d="M12 5v14"/>
        </svg>
    )
}

function DeleteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/>
            <line x1="18" x2="12" y1="9" y2="15"/>
            <line x1="12" x2="18" y1="9" y2="15"/>
        </svg>
    )
}

function Trash2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18"/>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            <line x1="10" x2="10" y1="11" y2="17"/>
            <line x1="14" x2="14" y1="11" y2="17"/>
        </svg>
    )
}


