interface ProductAPI {
    id: number;
    title: string;
    price: number;
    new: string | null;
    artist: string;
    formats: Format[];
    summary: string;
    imageUrl: string;
    tags: string[];
}

interface Format {
    key: number;
    albumId: number;
    format: string;
}

interface Product {
    id: number;
    title: string;
    price: number;
    new: string | null;
    artist: string;
    formats: Format[];
}
