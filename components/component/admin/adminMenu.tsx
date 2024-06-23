import Link from "next/link";
import {LayersIcon, Package2Icon, PackageIcon, PlusIcon} from "@/components/component/admin/icons";

export default function AdminMenu(){
    return (
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
                        href="/admin"
                    >
                        <PackageIcon className="h-4 w-4"/>
                        Products
                    </Link>
                    <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="/admin/add"
                    >
                        <PlusIcon className="h-4 w-4"/>
                        Add products
                    </Link>
                    <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="/admin/last"
                    >
                        <LayersIcon className="h-4 w-4"/>
                        Last orders
                    </Link>
                </nav>
            </div>
        </div>
    );
}