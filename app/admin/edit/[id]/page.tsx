import { EditProduct } from "@/components/component/admin/edit-product";
import {fetchProductsFilteredForId} from "@/components/component/admin/fetchFilterId";
import NotFoundPage from "@/app/not-found";


export default async function Page({params: {id}}: { params: { id: string } }) {

    const [data] = await Promise.all([
        fetchProductsFilteredForId(Number(id))
    ]);

    if (!data) {
        NotFoundPage();
    }
    return (
        <>
            <EditProduct data={data[0]}/>
        </>
    )
}