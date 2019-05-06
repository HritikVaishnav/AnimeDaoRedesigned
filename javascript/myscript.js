// ==UserScript==
// @name     AnimeDao
// @author	 Hritik Vaishnav
// @version  1
// @grant    none
// ==/UserScript==

chrome.storage.local.get(['setting','theme'],function (result) {
    if(result.setting === "enabled")
    {
        var alertObj = document.getElementsByClassName("alert");
        var i =0;
        var link = document.createElement("link");
        if(result.theme === "lite")
        {
            link.href = chrome.runtime.getURL('Lite/AnimeDaoLite.css');
            if ( alertObj != null )
            {
                for ( i=0; i < alertObj.length; i++ )
                {
                    alertObj[i].style.background="transparent";
                    alertObj[i].style.borderColor="#101010";
                    alertObj[i].style.color="#222";
                }
            }
        }
        else
        {
            link.href = chrome.runtime.getURL('Dark/AnimeDaoDark.css');
            if ( alertObj != null )
            {
                for ( i=0; i < alertObj.length; i++ )
                {
                    alertObj[i].style.background="transparent";
                    alertObj[i].style.borderColor="#101010";
                    alertObj[i].style.color="rgb(221, 187, 26)";
                }
            }
        }

        link.type = "text/css";
        link.id = "AnimeDaoDarkLink2";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);

        var themeSwitch = document.createElement('span');
        themeSwitch.className = 'themeSwitch';
        themeSwitch.innerText = result.theme;
        document.body.appendChild(themeSwitch);

        var script = document.createElement("script");
        script.src = chrome.runtime.getURL("javascript/NewFunctions.js");
        script.id = "NewFunctions";
        document.body.appendChild(script);

        window.addEventListener('click', function (event) {
            if(event.target.className === 'themeSwitch'){
                chrome.storage.local.get(['theme'],function (result){
                    if(result.theme === 'dark'){
                        chrome.storage.local.set({theme: "lite"});
                        window.location.reload();
                    }
                    else {
                        chrome.storage.local.set({theme: "dark"});
                        window.location.reload();
                    }
                });
            }
        });
    }
});
