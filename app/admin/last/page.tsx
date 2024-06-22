import LastOrderComponent from "@/components/component/admin/lastOrderComponent";
import {fetchOrders} from "@/components/component/admin/fetchOrders";

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: { [key: string]: string | undefined }
}) {
    const page = Number(searchParams?.page) || 1;
    const orders = await fetchOrders(page)
    return (
        <LastOrderComponent data={orders}/>
    );
}