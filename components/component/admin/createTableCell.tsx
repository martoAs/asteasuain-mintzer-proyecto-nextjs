import {AlbumWithFormats} from "@/app/data/data";
import {TableCell, TableRow} from "@/components/ui/table";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {deleteAlbum} from "@/components/component/admin/deleteProduct";
import {PencilIcon} from "@/components/component/admin/icons";
import {Trash2Icon} from "@/components/component/admin/icons";

export default function createTableCell(data: AlbumWithFormats) {
    const formattedFormats = data.formats.map((format: { format: any; }) => format.format).join(', ');

    return (
        <TableRow key={data.id}>
            <TableCell className="font-medium">{data.title}</TableCell>
            <TableCell>{data.artist}</TableCell>
            <TableCell>${data.price.toFixed(2)}</TableCell>
            <TableCell>{formattedFormats}</TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Link href={`admin/edit/${data.id}`}>
                        <Button size="icon" variant="outline">
                            <span className="sr-only">Edit</span>
                            <PencilIcon className="h-4 w-4" />
                        </Button>
                    </Link>
                    <form>
                        <Button type="submit" size="icon" variant="outline"
                                formAction={deleteAlbum.bind(null, data.id)}>
                            <Trash2Icon className="h-4 w-4"/>
                            <span className="sr-only">Delete</span>
                        </Button>
                    </form>
                </div>
            </TableCell>
        </TableRow>
    );

}


