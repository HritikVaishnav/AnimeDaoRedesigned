chrome.storage.local.get(['setting','theme'],function (result){
    if(result.setting === "enabled"){
        if(window.location.hostname === "disqus.com")
        {
            let link = document.createElement('link');
            if(result.theme === "lite")
                link.href = chrome.runtime.getURL('Lite/DisqusEmbed.css');
            else
                link.href = chrome.runtime.getURL('Dark/DisqusEmbed.css');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            document.documentElement.insertBefore(link,null);
        }
        if(window.location.hostname === "www.rapidvideo.com")
        {
            let link = document.createElement('link');
            if(result.theme === "lite")
                link.href = chrome.runtime.getURL('Lite/rapidplayer.css');
            else
                link.href = chrome.runtime.getURL('Dark/rapidplayer.css');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.id = 'new';
            document.documentElement.insertBefore(link,null);
        }
    }
});