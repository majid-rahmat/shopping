$(document).ready(function(){
$("button").click(function(e){
    e.preventDefault();
    var todo = $(".forms").val();
    $(".added-items").append('<div class="item-group">' + '<input class="abs" type="checkbox">' + '&nbsp;' + '&nbsp;' + '<p class="inb">' + todo + '</p>' + '&nbsp;' + '&nbsp;' + '<i class="fa fa-trash-o fa-2x" aria-hidden="true">' +'</i>'+'</div>');
	});
	$(document).on("click", "input[type='checkbox']", function() {
	$(this).next().toggleClass("line-through");
	});
	$(document).on("click", ".fa-trash-o", function() {
	$(this).parent().remove();
	});
});

