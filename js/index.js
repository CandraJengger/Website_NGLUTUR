let show = document.getElementById("nav-links");
    function ShowMenu() {
        show.style.right = "0";
    }
    function CloseMenu() {
        show.style.right = "-300px";
    }

    function OnSearch() {
        $('span div').addClass('search')
        $('#search').css('display','flex')
        $('.cari1').css('color','transparent')
    }

    
    function OnReset() {
        show.style.right = "-300px";

        let hWindow = $(window).width();
        if(hWindow < 835) { 
            $('#search').css('display','flex')
            $('#search .fas').css('color','#333')
        } else {
            $('#search').css('display','none')
            $('#icon').css('color','#fff')
        }
    }
    
    $(window).on('scroll', function(){
        if($(window).scrollTop()) {
            $('.navbar').addClass('black')
        } else {
            $('.navbar').removeClass('black')
        }
    })