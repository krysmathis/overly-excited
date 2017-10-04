// Create an array that contains the words in the sentence
var walrus = "The thunder danced through the trees in the light of the moon";
var sentence = walrus.split(" ");

var fox = "The quick brown fox jumps over the lazy dog";
var nextSentence = fox.split(" ");
/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
const addExcitement = function (theWordArray, displayChar) {
    
    var words = "";
    var c = 1;

    //  When we reach the third iteration add the display char
    //  Repeat the display char based on how many times you can divide it by 3
    for ( var i = 0; i < theWordArray.length; i += 1 ) {
        if (c % 3 === 0) {
            words += theWordArray[i] + displayChar.repeat(c/3) + " ";
        } else {
            words += theWordArray[i] + " ";
        }
        console.log(words.trim())
        c += 1;
    }
}

// Invoke the function and pass in the array
addExcitement(nextSentence, "?");