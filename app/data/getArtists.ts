export function getArtists(query?: string){
    const artists  = [
        { id: 1,  artist: 'The+Beatles', album: 'Abbey+Road' },
        { id: 2, artist: 'Bob+Dylan', album: 'Blonde+On+Blonde' },
        { id: 3, artist: 'Jimi+Hendrix', album: 'Are+You+Experienced' },
        { id: 4, artist: 'Pink+Floyd', album: 'The+Dark+Side+of+the+Moon' },
        { id: 5, artist: 'Led+Zeppelin', album: 'Led+Zeppelin+IV' },
        { id: 6, artist: 'The+Beatles', album: 'Revolver' },
        { id: 7, artist: 'The+Rolling+Stones', album: 'Sticky+Fingers' },
        { id: 8, artist: 'The+Who', album: 'Who%27s+Next' },
        { id: 9, artist: 'The+Doors', album: 'The+Doors' },
        { id: 10, artist: 'Oasis', album: '(What%27s+the+Story)+Morning+Glory%3F' },
        { id: 11, artist: 'The+Velvet+Underground', album: 'The+Velvet+Underground+%26+Nico' },
        { id: 12, artist: 'David+Bowie', album: 'The+Rise+and+Fall+of+Ziggy+Stardust+and+the+Spiders+from+Mars' },
        { id: 13, artist: 'The+Ramones', album: 'Ramones' },
        { id: 14, artist: 'The+Police', album: 'Synchronicity' },
        { id: 15, artist: 'The+Smiths', album: 'The+Queen+Is+Dead' },
        { id: 16, artist: 'The+Cure', album: 'Disintegration' },
        { id: 17, artist: 'Joy+Division', album: 'Unknown+Pleasures' },
        { id: 18, artist: 'The+Clash', album: 'London+Calling' },
    ];

    // If query is provided, filter the array based on the query
    if (query && query.length > 0) {
        return artists.filter(item => {
            // Convert both artist and [album] to lowercase for case-insensitive comparison
            const artistMatches = item.artist.toLowerCase().includes(query.toLowerCase());
            const idMatches = item.id.toString().includes(query);
            const albumMatches = item.album.toLowerCase().includes(query.toLowerCase());
            return artistMatches || albumMatches || idMatches;
        });
    }
    return artists;
}