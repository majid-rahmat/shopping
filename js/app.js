$("button").click(function(e){
    e.preventDefault();
    console.log("hello");//ajax code here
    var name = $(".forms").val();
    console.log(name);
    var toAdd = $('.forms').val();
    $(".added-items").append('<div class="item-group">' + '<input class="abs" type="checkbox">' + '<p class="inb">'+toAdd+ '</p>'+ '<i class="fa fa-trash-o fa-2x" aria-hidden="true">' +'</i>'+'</div>');
});


