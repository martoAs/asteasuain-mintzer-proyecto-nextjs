export function getArtists(query?: string){
    const artists  = [
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

    // If query is provided, filter the array based on the query
    if (query && query.length > 0) {
        return artists.filter(item => {
            // Convert both artist and album to lowercase for case-insensitive comparison
            const artistMatches = item.artist.toLowerCase().includes(query.toLowerCase());
            const albumMatches = item.album.toLowerCase().includes(query.toLowerCase());
            return artistMatches || albumMatches;
        });
    }
    return artists;
}