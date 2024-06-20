import {AlbumComplete} from "@/app/data/data";

export function getFoto(item: AlbumComplete){
    console.log(item.imageUrl)
    if(item.imageUrl == '') {
        return "/notFound.jpg"
    }
    else
        return item.imageUrl
}