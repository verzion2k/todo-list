// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() // When an li got clicked inside of the ul this code will run
{
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){ // parent() is deleting the parent element
		$(this).remove();
	});
	event.stopPropagation(); // stopPropagation() Stops the bubbling of an event to parent elements
});

// If you type something to the text input it will add it to the li's and remove it from the input
$("input[type='text']").keypress("click", function(event){
	if(event.which === 13){
		//grabing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

// Fade in and out the input
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
		$("ul").append("<li><span>X</span> " + todoText + "</li>")
	}
});