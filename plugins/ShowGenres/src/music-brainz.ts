export async function getGenres(recordingId: string) {

    const url = `https://musicbrainz.org/ws/2/recording/${recordingId}?inc=genres&fmt=json`;

    const response = await fetch(url, {
        headers: {
            "User-Agent": "TidalGenres/0.1 (alferguet@gmail.com)",
        },
    });

    if (!response.ok) {
        throw new Error(`MusicBrainz request failed: ${response.status}`);
    }

    const data = await response.json();

    return data.genres?.map((genre: { name: string; }) => genre.name) ?? [];
}