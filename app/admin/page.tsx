import  AdminPage  from "../../components/component/admin/admin-page"

export default function Page({
                                 searchParams,
                             }: {
    searchParams: { [key: string]: string | undefined }
}) {
    const page = Number(searchParams?.page) || 1;
    return (
        <>
            <AdminPage page={page}/>
        </>
    )
}