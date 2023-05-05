function reverseString() {
    let input="shubham";
    console.log("String:", input);

    let splitString = input.split("");

    let reverseArray = splitString.reverse();
  
    let joinArray = reverseArray.join("");
 
    console.log("Reversed String:", joinArray);
}
setTimeout(reverseString, 2000);