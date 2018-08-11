$(function(){
    var owl = $(".owl").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
    });
    
    
    var carousel = $(".carousel").owlCarousel({
        items: 5,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
    });
    $(".owl-item.active img").eq(3).css({
            opacity: '1',
            border: 'solid 6px #77bc25',
        });
    carousel.on('change.owl.carousel', function(event){
        $(".carousel .owl-item img").css({
            opacity: '0.3',
            border: 'none',
        });  
        alert(event.relatedTarget['_drag']['direction']);
        if (event.relatedTarget.state.direction === "left") {
            $(".owl-item.active img").eq(4).css({
                opacity: '1',
                border: 'solid 8px #77bc25',
            });
        }else{
            $(".owl-item.active img").eq(2).css({
                opacity: '1',
                border: 'solid 8px #77bc25',
            });
        }
    });
    
});