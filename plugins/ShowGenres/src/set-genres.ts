
export const setGenres = (genres: string[]) => {
    const trackTitle = document.querySelector<HTMLElement>(`[data-test="footer-track-title"]`)
    if (trackTitle === null) return;

    const tagElement = document.createElement("span");
    tagElement.className = "genre-tag";
    tagElement.style.fontSize = 'xx-small'
    tagElement.style.marginLeft = 'var(--wave-spacing--small)'
    tagElement.textContent = genres.join(', ');

    trackTitle.parentElement?.children.item(1)?.firstChild?.appendChild(tagElement);
};