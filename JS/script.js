jQuery(function($) {
    var $navbar = $('.heading');
    $(window).scroll(function(event){
        var $current = $(this).scrollTop();
        if($current > 0) {
            $navbar.addClass('navbar-color');

        } else {
            $navbar.removeClass('navbar-color');
        }
    });
});

const barIcon = document.querySelector("#bar-icon");
const crossIcon = document.querySelector("#cross-icon");
const lists = document.querySelector(".lists");
const headingContainer = document.querySelector(".heading-container")
const bigContainer = document.querySelector(".big-container")

barIcon.addEventListener('click', ()=> {
    if(lists.style.display != "none") {
        lists.style.display = "grid";
        headingContainer.style.display = "none"
        bigContainer.style.display = "none";
    }
    
});

