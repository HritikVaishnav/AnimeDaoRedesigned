var $animation_elements = $('.AE');
var $window = $(window);
var toggle = true;
var a = document.getElementsByClassName('tab-content')[0];

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        $animation_elements = $('.AE');
        var $element = $(this);
        var element_height = $element.outerHeight(true);
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        let data = $element[0].getAttribute('data-AE');
        //check to see if this current container is within viewport
        if ((element_bottom_position-120 >= window_top_position) &&
            (element_top_position <= window_bottom_position))
        {
            if(toggle === false)
            {
                a.classList.remove('detach_to_bottom');
                $element.css("height", "auto");
                toggle = true;
            }
        }
        else
        {
            if(toggle)
            {
                a.classList.add('detach_to_bottom');
                $element.css("height", element_height+"px");
                toggle = false;
            }
        }
    });
}

function detachOption(e) {
    let value = e.innerText;
    switch(value) {
        case 'default':
            a.className="tab-content detach_to_bottom";
            break;
        case 'large':
            a.classList.remove('Rmedium','Rsmall');
            a.classList.add('Rlarge');
            break;
        case 'small':
            a.classList.remove('Rmedium','Rlarge');
            a.classList.add('Rsmall');
            break;
        case '▼':
            a.classList.add('minimize');
            e.innerText = '▲';
            break;
        case '▲':
            a.classList.remove('minimize');
            e.innerText = '▼';
            break;
        default:
            a.className="tab-content";
    }
}