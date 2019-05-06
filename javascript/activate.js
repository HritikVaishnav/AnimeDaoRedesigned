chrome.storage.local.get(['setting','theme'],function (result) {
    if(result.setting === "enabled")
    {
        if(window.location.hostname.split('.')[1] === "stream")
        {
            let link = document.createElement('link');
            if(result.theme === "lite")
                link.href = chrome.runtime.getURL('Lite/streamPage.css');
            else
                link.href = chrome.runtime.getURL('Dark/streamPage.css');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            document.documentElement.insertBefore(link,null);
        }

        let link = document.createElement('link');
        if(result.theme === "lite")
            link.href = chrome.runtime.getURL('Lite/AnimeDaoLite.css');
        else
            link.href = chrome.runtime.getURL('Dark/AnimeDaoDark.css');
        link.id = 'AnimeDaoDarkLink1';
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.documentElement.insertBefore(link,null);
    }
});