//Click Off specific ToDos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete todo

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove(500);
    });
    event.stopPropagation();
});


$("input[type = 'text']").on("keypress", function(event){
    if(event.which === 13){
        //grabbing a new todo
        var todoText = $(this).val();
        $(this).val("");    //setter
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'> </i></span>" + todoText +"</li>");
    }
});

$(".fa-plus").on("click", function() {
    $("input[type = text]").fadeToggle();
});