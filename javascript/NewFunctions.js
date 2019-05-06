var lastScrollTop = 0;
var i = 0;
var on = 0;
var navbar = document.getElementsByClassName('navbar')[0];

if(navbar)
{
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        i = i + (st - lastScrollTop);
        if (st > lastScrollTop){
            if(i > 10)
            {
                navbar.style.transform="translateY(-110%)";
                i = 0; on = 1;
            }
        }
        else {
            if(on === 1)
            {
                navbar.style.transform="translateY(-0%)";
                on = 0;
            }
            i = 0;
        }
        lastScrollTop = st;
    });
}