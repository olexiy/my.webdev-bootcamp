// Check of Specific To-Do by click
$("ul").on("click","li", function(){
    $(this).toggleClass("checked-out");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
       const todoText =  $(this).val();
       $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+todoText+"</li>");
       $(this).val("");

    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});