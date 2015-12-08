$( document ).ready(function() {
    $.getJSON( "info.json", function( data ) {
        $('#parcels-count').append(data.parcels.length);
        //alert(JSON.stringify(data.parcels[0]['image']));
        //alert(JSON.stringify(data.parcels.length));
        
        for (var i=0;i<data.parcels.length;i++){
            
        var name = data.parcels[i]["name"];
        var price = data.parcels[i]["price"];
        
         $('.result-content').append('<p id="name'+i+'" name="'+i+'"><i class="glyphicon glyphicon-fire"></i>'+name+'<span class="pull-right"> Rs. '+price+'<i class="glyphicon glyphicon-circle-arrow-down"></i></span></p>');
             var nameid = "#name"+i+"";
        //alert(data.parcels[i]["image"]);
        $(nameid).click(function(){
            
            var j = ($(this).attr('name'));
            var img = data.parcels[j]["image"];
            var date =data.parcels[j]["date"];
            var name_details =data.parcels[j]["name"];
            var type =data.parcels[j]["type"];
            var weight =data.parcels[j]["weight"];
            var phone =data.parcels[j]["phone"];
            var price =data.parcels[j]["price"];
            var quantity =data.parcels[j]["quantity"];
            var color =data.parcels[j]["color"];
            var lat =data.parcels[j]['live_location']['latitude'];
            var lon =data.parcels[j]['live_location']["longitude"];
            
            $(".img-content img, .img-content p, .product-head b, .product-content-left p, .product-content-right p, .product-content-right span, .product-content-right div, .map iframe").remove();
            $(".img-content").append('<img src="'+img+'" alt="Image">');
            $(".img-content").append('<p>'+date+'<i class="glyphicon glyphicon-calendar pull-right"></i></p>');
            $(".product-head").append('<b>'+name_details+'</b>');
             $(".product-content-left").append('<p class="type"><i class="glyphicon glyphicon-shopping-cart"></i>'+type+'</p><p class="weight"><i class="glyphicon glyphicon-oil"></i>'+weight+'</p><p class="phone"><i class="glyphicon glyphicon-earphone"></i>'+phone+'</p>');
            $(".product-content-right").append('<p class="price"><i class="glyphicon glyphicon-usd"></i>'+price+'</p><p class="quantity"><i class="glyphicon glyphicon-th"></i>'+quantity+'</p><div class="color" style="background:'+color+'"></div><span>color</span>');
            $(".map").append('<iframe src = "https://maps.google.com/maps?q='+lat+','+lon+'&hl=es;z=14&amp;output=embed" width="100%" frameborder="0"></iframe>');
           $(".current-loc").click(function(){
                $(".map iframe").remove();
        $(".map").append('<iframe src = "https://maps.google.com/maps?q='+lat+','+lon+'&hl=es;z=14&amp;output=embed" width="100%" frameborder="0"></iframe>');
               
        });
    });
            
            
         }
       
        
    });
    
    
});