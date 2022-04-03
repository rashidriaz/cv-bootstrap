
$(function(){
    $("#year").append((new Date().getFullYear()).toString());

    //load all service cards
    $.getJSON("resources/data/services.json", function (data) {
        $.each(data, (_, value) => {
            $("#services .service-cards").append(
                '<div class="col-lg-4 service-card col-md-6 text-center align-middle">\n' +
                '           <div class="card container">\n' +
                '               <div class="icon text-center">\n' +
                '                   <i class="' + value.icon +' h1"></i>\n' +
                '               </div>\n' +
                '               <h3 class="h4">' + value.title +'</h3>\n' +
                '               <p>'+ value.description+'</p>\n' +
                '           </div>\n' +
                '        </div>');
        })
    });

    //load testimonials
    $.getJSON("resources/data/testimonial.json", function (data) {
        let count = 0;
        $.each(data, (_, value) => {

            const active = count++ === 0? "active": "";
            $("#testimonial .carousel-inner").append(
                '<div class="carousel-item ' + active +'">\n' +
                '                <div class="testimonial text-center">\n' +
                '                    <div class="image">\n' +
                '                        <img src="' + value.image+'" class="client-img">\n' +
                '                    </div>\n' +
                '                    <h2 class="h5">'+ value.name +'</h2>\n' +
                '                    <p class="designation">'+ value.designation +'</p>\n' +
                '                    <p class="caption">\n' +
                '                        <i class="fa-solid fa-quote-left quote"></i>\n' +
                                                 value.comment +
                '                        <i class="fa-solid fa-quote-right quote"></i>\n' +
                '                    </p>\n' +
                '                </div>\n' +
                '            </div>'
            );
        })
    });

})