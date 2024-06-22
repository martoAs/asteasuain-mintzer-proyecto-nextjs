import OrderPage from "@/components/component/admin/orderPage";
import {fetchProductsFilteredForId} from "@/components/component/admin/fetchFilterId";

export default async function Page({params: {id}}: { params: { id: string } }) {
    const albumsFromOrder = await fetchProductsFilteredForId(Number(id))


    return(
        <OrderPage data={albumsFromOrder}/>
    );
}