const DATA_SOURCE_URL = 'http://ws.audioscrobbler.com/2.0/';

export async function getArtistData(artists: LastFMData[]) {
    const apiKey = process.env.LASTFM_API_KEY;
    const method = 'album.getInfo';

    const fetchPromises = artists.map(({ id, artist, album }) => {
        const url = `${DATA_SOURCE_URL}?method=${method}&artist=${artist}&album=${album}&api_key=${apiKey}&format=json`;
        return fetch(url)
            .then(response => response.json())
            .then(result => ({ ...result, id })); // Append the id to the result
    });

    const results = await Promise.all(fetchPromises);

    return results.map(item => ({
        id: item.id, // Use the id from the original artists array
        albumName: item.album.name,
        artist: item.album.artist,
        imageUrl: item.album.image.find((img: { size: string; }) => img.size === 'large')?.['#text'] || '',
    }));
}