chrome.storage.local.get(['setting'],function (result){
    if(result.setting === "enabled"){

        //the stream page segments
        let video_frame = document.getElementById("videocontent");
        let parent_of_video = video_frame.parentElement;
        let reference = parent_of_video.nextElementSibling;
        let navBar = document.getElementsByTagName('nav')[0];
        let content = document.getElementsByClassName('content');
        let navBarOptions = document.getElementsByClassName('navbar-nav')[0];
        let ads = document.getElementsByClassName('adsbygoogle');

        //creating 1st row
        let video_chat = document.createElement('div');
        video_chat.className = 'row video_stream';
        video_frame.classList.add('col-md-6','episode');
        video_frame.classList.add('AE');
        video_frame.setAttribute('data-AE', 'detach');
        video_chat.append(video_frame);

        let options = "<div class=\"detach_to_bottom_options\">\n" +
            "             <span onclick=\"detachOption(this)\" class=\"option\">▼</span>\n" +
            "             <span onclick=\"detachOption(this)\" class=\"option\">X</span>\n" +
            "             <div class=\"option list\" name=\"size\">\n" +
            "                 <div class=\"option_selected\">size</div><br>\n" +
            "                 <div onclick=\"detachOption(this)\" class=\"default\">default</div><br>\n" +
            "                 <div onclick=\"detachOption(this)\" class=\"large\">large</div><br>\n" +
            "                 <div onclick=\"detachOption(this)\" class=\"small\">small</div><br>\n" +
            "             </div>\n" +
            "         </div>";
        options.toString();

        //inline html and css
        content[0].id = 'streamContent';
        navBarOptions.classList.add('detached_nav');
        reference.classList.add('discRowBefore');
        reference.nextElementSibling.classList.add('discRow');

        //removing and adding
        navBar.remove();
        parent_of_video.remove();
        document.body.appendChild(navBarOptions);

        //appending new rows
        document.getElementsByClassName('content')[0].insertBefore(video_chat,reference);
        let scroll = document.getElementById('videocontent').offsetTop;
        document.getElementsByClassName('tab-content')[0].insertAdjacentHTML('beforeend',options);
        window.scrollTo({ top: scroll, behavior: 'smooth' });

        //appending-javascript
        var script = document.createElement("script");
        script.src = chrome.runtime.getURL("javascript/videoPlayer_detach.js");
        script.id = "ElementInView";
        document.body.appendChild(script);
    }
});