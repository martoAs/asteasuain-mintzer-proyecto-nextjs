import {Album, Format} from "@prisma/client"

export interface AlbumComplete extends AlbumWithFormats {
    summary: string;
    imageUrl: string;
    tags: string[];
}


export interface AlbumWithFormats extends Album{
    formats: Format[]
}

export interface Item{
    id: number;
    name: string;
    price: number;
    quantity: number;
    format: string;
}