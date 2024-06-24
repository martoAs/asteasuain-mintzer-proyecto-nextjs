import {AlbumWithFormats} from "@/app/data/data";
import createTableCell from "@/components/component/admin/createTableCell";

export default function OrderPage({data}: { data: AlbumWithFormats[] }) {
    return (
        <>
            {
                data.map((album: AlbumWithFormats) => {
                    createTableCell(album);
                })
            }
        </>
    );
}