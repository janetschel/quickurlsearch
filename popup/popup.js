const mainWrapper = document.getElementById("wrapper");

document.getElementById("help").addEventListener("click",
    () => window.open("https://github.com/janetschel/quickurlsearch/blob/master/README.md"));

const knownShortcutsForDisplay = [
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

knownShortcutsForDisplay.forEach((currentShortcut) => {
    const shortcut = currentShortcut.shortcut;
    const name = currentShortcut.name;

    const shortcutTag = document.createElement("span");
    const nameTag = document.createElement("span");
    const filler = document.createElement("span");

    shortcutTag.appendChild(document.createTextNode(`!${shortcut}`));
    nameTag.appendChild(document.createTextNode(name));
    filler.appendChild((document.createTextNode("")));

    mainWrapper.appendChild(shortcutTag);
    mainWrapper.appendChild(nameTag);
    mainWrapper.appendChild(filler);
})