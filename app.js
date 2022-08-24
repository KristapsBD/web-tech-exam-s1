/* Function to validate FIRST NAME form field on submit */

function validateName(){
    var letters = /^[a-zA-Z]*$/;
    const nameField = document.forms["myForm"]["name"].value;
    const label = document.getElementById("name-error-manual");
    if(nameField.match(letters)){
        label.style.display="none";
        return true;
    } else {
        alert("Please enter a valid name! (Only first name required)");
        label.style.display="inline";
        return false;
    }
}

window.addEventListener('DOMContentLoaded', () => { // execute the code when the initial HTML document has been completely loaded, we need the form to be loaded 

    /* Helper code to hide static label so double error messages don't display on FIRST NAME form field */

    const nameInput = document.forms["myForm"]["name"];
    const label = document.getElementById("name-error-manual");

    nameInput.addEventListener("change", updateLabel);

    function updateLabel(e){
        if(e.target.value.length < 3 || e.target.value.length > 30){
            label.style.display="none";
        }
    }

    /* Standart DOM manipulation to switch h1 text in HERO section */

    const heading = document.querySelector("#heading");

    heading.onclick = function(){
        if(heading.classList.contains("toggle")){
            heading.innerHTML="Hello, my name is <span>Kristaps<span>";
            heading.classList.toggle("toggle");
        } else {
            heading.innerHTML="Sveiki, mani sauc <span>Kristaps<span>";
            heading.classList.toggle("toggle");
        }
    }

    /* Standart DOM manipulation to create ordered list in MY SKILLS section */

    const orderedList = document.getElementById("ordered-list");
    const prioritiesArray = ["Quality", "Productivity", "Motivation", "Health", "Family", "Future", "Wealth", "Improvement", "Happiness", "Education", "Work", "Travel"];
    const revealer = document.getElementById("click");

    revealer.onclick = function(){
        revealer.innerHTML="Here are my top priorities: ";
        orderedList.innerHTML=""; // clear previous results
        var shuffled = prioritiesArray.sort(function(a, b){return .5 - Math.random()}); // sort array in random order
        var selected=shuffled.slice(0,3); // select first 3 elements of randomly sorted array
        
        for(let priority of selected){ // add each element to document using DOM manipulation
            let newListItem = document.createElement('li');
            newListItem.textContent = priority;
            orderedList.appendChild(newListItem);
        }
    }

    /* jQuery DOM manipulation to change image in ABOUT ME section */

    $("#image").click(function(){
        if ($("#image").attr("src") == "./img/portrait1.jpg"){
            $("#image").attr("src", "./img/portrait2.jpg");
        } else {
            $("#image").attr("src", "./img/portrait1.jpg");
        }
    })
})