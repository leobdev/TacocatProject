//get value
function getValue(){
    //get user string from the page
    let userString = document.getElementById("userString").value;

    //check for a palindrome
     let returnObj = checkForPalindrome(userString);

    //display out message on the screen
    displayMessage(returnObj);

}

//checks if string is a palindrome
function checkForPalindrome(userString){

    userString = userString.toLowerCase();

    let regex = /[^a-zA-Z]/gi;
    userString = userString.replace(regex, ""); 

    let revString = [];
    let returnObj = {};
    
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i]
    }

        if(revString == userString){
            returnObj.msg = "Well done! You entered a Palindrome";
            returnObj.bsClass = "alert-success"
        }
        else{
            returnObj.msg = "Sorry! You did not enter a Palindrome";
            returnObj.bsClass = "alert-danger"
        }

        returnObj.reversed = revString;  

    return returnObj; 
}   


// display a message to the string
function displayMessage(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed} `;

    document.getElementById("alert").classList.add(`${returnObj.bsClass}`);
    document.getElementById("alert").classList.remove("invisible");
}