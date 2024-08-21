
var card = $(".card");
var front = true;

card.click(() => {
    if(front) {
        front = false;
        card.addClass("image-rotate");
        card.removeClass("image-rotate1");
        
    } else {
        front = true;
        card.removeClass("image-rotate");
        card.addClass("image-rotate1");
        
    }
});