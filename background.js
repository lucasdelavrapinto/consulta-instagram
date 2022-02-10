chrome.contextMenus.create(
    {
        id: "some-command",
        title: "Acessar perfil de: %s",
        contexts: ["selection"],
    },
);
// chrome.contextMenus.create(
//     {
//         id: "paste-command",
//         title: "Agradecer essa pessoa!",
//         contexts: ["page"],
//     }
// );

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
    // if (info.menuItemId == "paste-command") {

    //     navigator.clipboard.writeText("paste-command");
    //     console.log('paste-command');

    // }
});