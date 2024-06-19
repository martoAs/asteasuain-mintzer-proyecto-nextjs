import { EditProduct } from "@/components/component/admin/edit-product";
import {fetchProductsFilteredForId} from "@/components/component/admin/fetchFilterId";


export default async function Page({params: {id}}: { params: { id: string } }) {
    const data = await fetchProductsFilteredForId(Number(id));
    return (
        <>
            <EditProduct data={data[0]}/>
        </>
    )
}