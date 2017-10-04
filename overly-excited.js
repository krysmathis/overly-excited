// Create an array that contains the words in the sentence
var walrus = "The thunder danced through the trees in the light of the moon";
var sentence = walrus.split(" ");

/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {
    var words = "";

    for ( var i = 0; i < theWordArray.length; i += 1 ) {
        words += theWordArray[i] + " ";
        console.log(words.trim());
        
    }
}

// Invoke the function and pass in the array
addExcitement(sentence);