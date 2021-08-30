chrome.contextMenus.create({
    id: "some-command",
    title: "Acessar perfil de: %s",
    contexts: ["selection"],
});

function openInstagram(instagram){
    chrome.tabs.create({
        url: "http://www.instagram.com/" + instagram,
    })
}

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "some-command") {

        let insta = info.selectionText;

        openInstagram(insta);

    }
});