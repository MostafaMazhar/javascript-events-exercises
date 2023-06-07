// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here

	    // Convert the input values to numbers
	  let numA = parseInt(stringA);
		let numB = parseInt(stringB);
   
	    // Check if both inputs are valid numbers
	 if(!isNaN(numA) && !isNaN(numB)){
      let sum = numA + numB;
	   // Set the sum as the value of the #resultNumber input
		 document.getElementById("resultNumber").value = sum;

	  } else {
			// Clear the #resultNumber input if the inputs are invalid
			document.getElementById("resultNumber").value = "";
		}
};
