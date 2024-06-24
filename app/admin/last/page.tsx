import LastOrderComponent from "@/components/component/admin/lastOrderComponent";
import {fetchOrders} from "@/components/component/admin/fetchOrders";
import {countOrders} from "@/components/component/admin/fetch";

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: { [key: string]: string | undefined }
}) {
    const page = Number(searchParams?.page) || 1;
    const orders = await fetchOrders(page)
    const CANT_ORDERS = 12;

    let count = await countOrders()

    const cantPages = Math.ceil(count / CANT_ORDERS);
    return (
        <LastOrderComponent data={orders} count={cantPages}/>
    );
}