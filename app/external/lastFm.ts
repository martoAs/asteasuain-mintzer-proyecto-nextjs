import {AlbumWithFormats} from "@/app/data/data";

const DATA_SOURCE_URL = 'http://ws.audioscrobbler.com/2.0/';

export async function getArtistData(artists: AlbumWithFormats[]) {
    const apiKey = process.env.LASTFM_API_KEY;
    const method = 'album.getInfo';

    const fetchPromises = artists.map(({ id, artist, title, new : isNew, price, formats }) => {
        const url = `${DATA_SOURCE_URL}?method=${method}&artist=${artist}&album=${title}&api_key=${apiKey}&format=json`;
        return fetch(url)
            .then(response => response.json())
            .then(result => ({ ...result, id, price, formats, isNew})); // Append the id to the result
    });

    const results = await Promise.all(fetchPromises);

   

    return results.map(item => {
        const album = item.album || {}; // Default to an empty object if album is not defined
        const wiki = album.wiki || {}; // Default to an empty object if wiki is not defined
        const tags = album.tags || { tag: [] }; // Default to an empty object with an empty tag array if tags is not defined

        return {
            id: item.id, // Use the id from the original artists array
            title: album.name || '',
            price : item.price,
            new : item.isNew,
            artist: album.artist || '',
            formats: item.formats,
            summary: wiki.summary || 'No summary available', // Provide a default value if summary is not available
            imageUrl: album.image ? album.image.find((img: { size: string; }) => img.size === 'mega')?.['#text'] || '' : '',
            tags: tags.tag.map((tag: { name: string; }) => tag.name),
        };
    });
}