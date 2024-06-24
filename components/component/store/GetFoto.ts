import {AlbumComplete} from "@/app/data/data";

export function getFoto(item: AlbumComplete){
    if(item.imageUrl == '') {
        return "/notFound.jpg"
    }
    else
        return item.imageUrl
}