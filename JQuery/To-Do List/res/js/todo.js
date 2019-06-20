$('ul').on("click","li",function(){
    $(this).toggleClass("done");
})

// removing the list
$('ul').on("click","span",function(event){
    // $(this).parent().fadeOut().remove();
    var slow=300;
    $(this).parent().fadeOut(500,function(){
    $(this).remove();
    });
    event.stopPropagation();
})

// adding new element to the list

$('input').keypress(function(event){
    var item="";
    if(event.which===13){
        item=$(this).val();
        
        $("ul").append("<li> <span> <i class='fa fa-trash'/> </span> " +item+"</li>");
        $(this).val("");
    }
    
})