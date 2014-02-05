(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };

}(this, this.document));


$(document).ready(function() {

    $('.toggle-footer-btn').click(function() {
        $(this).html($(this).html() == '+' ? '-' : '+');
        $('#footer').slideToggle(400);
		$("html, body").animate({
            'scrollTop': $(this).offset().top
        }, 500)
        return false;
    });
});	

$('#overlay').width($(window).width()).height($(window).height());



