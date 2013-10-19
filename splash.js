/**
 * @author Zachary Plata
 */

<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/0.2.0/annyang.min.js"></script>
<script>
if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'show tps report': function() {
      $('#tpsreport').animate({bottom: '-100px'});
    }
  };

  // Initialize annyang with our commands
  annyang.init(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
</script>

<script type = "text/javascript">
	//Var for a subject to learn
	var subject = prompt("Choose a subject");
	var deck = [];
	
	// Explains card and puts in front and back side data
	var card = [];
	var implementCard = function(){
		var frontData = prompt("What goes on this side?");
		var backData = prompt("What goes on this side?");
		card = [frontData, backData];
		return card;	
	};
	
	/**var commands = {
		'*category': openCategory,
	};
	
	var openCategory = function(category) {
		
	};
	*/
	
	//Add cards to said deck
	var keepGoing = prompt("Want to add cards to deck? Y or N?");
	while(keepGoing === "Y"){
		deck.push(implementCard());
		keepGoing = prompt("Keep going? Y or N?");
	}
	
	//Var for what side of card user sees
	var chooseSideToLookAt = prompt("Choose a side: 'front','back', or 'random'");
	
	//For front side cards
	if(chooseSide === "front"){
		for(var i = 0; i < deck.length; i++){
			var temp = deck[i];
			
		}
	}
	
</script>
