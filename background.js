var link = document.createElement ('a');
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({setting: "enabled"});
    chrome.storage.local.set({theme: "dark"});
});

chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
	if(response === "RemoveCss"){
		Disable();
	}
    else if(response === "AddCss"){
		Enable();
    }
});


//Function to disable extension
function Disable() {
    chrome.storage.local.get(['setting'],function (result) {
        if(result.setting === "enabled")
        {
            chrome.storage.local.set({setting: "disabled"});
            reloadAll();
        }
    });
    chrome.browserAction.setIcon({
        path : {
            "128": "images/icon_disable.png"
        }
    });
}

//Function to enable extension
function Enable() {
    chrome.storage.local.get(['setting'],function (result) {
        if(result.setting === "disabled")
        {
            chrome.storage.local.set({setting: "enabled"});
            reloadAll();
        }
    });
    chrome.browserAction.setIcon({
        path : {
            "128": "images/icon_128.png"
        }
    });
}

//Function to reload all animeDAO tabs
function reloadAll() {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        tabs.forEach(function (a) {
            link.href = a.url;
            if((link.hostname).search('animedao') >=0)
            {
                chrome.tabs.reload(a.id)
            }
        })
    });
}