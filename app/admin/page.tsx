import  AdminPage  from "../../components/component/admin/admin-page"
import {countProducts, fetchProducts} from "@/components/component/admin/fetch";

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: { [key: string]: string | undefined }
}) {
    const page = Number(searchParams?.page) || 1;
    const products = await fetchProducts(page);

    let count = await countProducts()
    const CANT_PAGINAS = 12;

    const cantPages = Math.ceil(count / CANT_PAGINAS);
    return (
        <>
            <AdminPage data={products} count={cantPages}/>
        </>
    )
}