if (typeof browser === "undefined") {
    var browser = chrome;
}

browser.contextMenus.create({
    id: "extract-macros",
    title: "Copy macros to clipboard",
    contexts: ["all"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "extract-macros":
            browser.tabs.executeScript({
                file: "extract.js",
            });
    }
});
