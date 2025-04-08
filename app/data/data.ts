import {Album, Format, FinalizedOrder} from "@prisma/client"

export interface AlbumComplete extends AlbumWithFormats {
    summary: string;
    imageUrl: string;
    tags: string[];
}

export interface Order extends FinalizedOrder{

}


export interface AlbumWithFormats extends Album{
    formats: Format[]
}


export interface Item{
    id: number;
    quantity: number;
    format: string;
}

export interface ItemBD extends Item{
    price: number;
    name: string;
}

export interface MyFormData {
    title: string;
    price: number;
    new: string;
    artist: string;
    formats: string[];
}

export interface MyFormDataEdit extends MyFormData {
    id: number;
}