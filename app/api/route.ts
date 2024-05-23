import {NextResponse} from 'next/server'


const DATA_SOURCE_URL = 'http://ws.audioscrobbler.com/2.0/';
const artists = [
    { artist: 'The+Beatles', album: 'Abbey+Road' },
    { artist: 'Bob+Dylan', album: 'Blonde+On+Blonde' },
    { artist: 'Jimi+Hendrix', album: 'Are+You+Experienced' },
    { artist: 'Pink+Floyd', album: 'The+Dark+Side+of+the+Moon' },
    { artist: 'Led+Zeppelin', album: 'Led+Zeppelin+IV' },
    { artist: 'The+Beatles', album: 'Revolver' },
    { artist: 'The+Rolling+Stones', album: 'Sticky+Fingers' },
    { artist: 'The+Who', album: 'Who%27s+Next' },
    { artist: 'The+Doors', album: 'The+Doors' },
    { artist: 'Oasis', album: '(What%27s+the+Story)+Morning+Glory%3F' },
    { artist: 'The+Velvet+Underground', album: 'The+Velvet+Underground+%26+Nico' },
    { artist: 'David+Bowie', album: 'The+Rise+and+Fall+of+Ziggy+Stardust+and+the+Spiders+from+Mars' },
    { artist: 'The+Ramones', album: 'Ramones' },
    { artist: 'The+Police', album: 'Synchronicity' },
    { artist: 'The+Smiths', album: 'The+Queen+Is+Dead' },
    { artist: 'The+Cure', album: 'Disintegration' },
    { artist: 'Joy+Division', album: 'Unknown+Pleasures' },
    { artist: 'The+Clash', album: 'London+Calling' },
];

export async function GET() {
    const apiKey = process.env.LASTFM_API_KEY;
    const method = 'album.getInfo';
    const fetchPromises = artists.map(({ artist, album }) => {
        const url = `${DATA_SOURCE_URL}?method=${method}&artist=${artist}&album=${album}&api_key=${apiKey}&format=json`;
        return fetch(url).then(response => response.json());
    });

    const results = await Promise.all(fetchPromises);


    const transformedData = results.map(item => ({
        albumName: item.album.name,
        artist: item.album.artist,
        imageUrl: item.album.image.find((img: { size: string; }) => img.size === 'large')?.['#text'] || '',
    }));


    return NextResponse.json(transformedData);
}