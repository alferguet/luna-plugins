import { LunaUnload } from "@luna/core";
import { MediaItem } from "@luna/lib";
import { getGenres } from "./music-brainz";
import { setGenres } from "./set-genres";
import { cleanup } from "./utils";

export const unloads = new Set<LunaUnload>();

unloads.add(cleanup)

MediaItem.onMediaTransition(unloads, async (mediaItem) => {
    const brainzItem = await mediaItem.brainzItem()
    const genres = await getGenres(brainzItem.recording.id)
    cleanup()
    setGenres(genres)
});
