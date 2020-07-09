const knownShortcuts = [
    {
        "shortcut": "mdn",
        "name": "Mozilla Developer Network",
        "full": "https://developer.mozilla.org/de/search?q="
    },
    {
        "shortcut": "s",
        "name": "Stack Overflow",
        "full": "https://stackoverflow.com/search?q="
    }
]
const url = window.location.href;

// if google search occurs on the google homepage the url is nested differently, thus the ternary condition inside the first split
const query = escape(url.split(/\?q=/.test(url) ? "/search?q=" : "&q=")[1].split("&")[0]);

knownShortcuts.forEach((currentShortcut) => {
    const shortcut = currentShortcut.shortcut;
    const fullSearchTerm = currentShortcut.full;

    if (query.startsWith(`%21${shortcut}`)) {
        const search = query.split(`%21${shortcut}+`)[1];
        window.open(`${fullSearchTerm}${search}`, "_self");
    }
})

