let people = [];
//Buttons
let submit = document.querySelector('#submit');
let display = document.querySelector('#display');

//Add event listener
submit.addEventListener('click', (e)=>{
e.preventDefault();
let firstName = document.querySelector('#firstName').value;
let surname = document.querySelector('#surname').value;
let emailAddress = document.querySelector('#emailAddress').value;
//Push an object into an array
people.push(
    {
        firstName,
        surname,
        emailAddress
    })
    console.log(people);

    //Local Storage
    localStorage.setItem('data', JSON.stringify(people));
})

// Display
display.addEventListener('click' ,(e)=>{
    e.preventDefault();
    console.log(
        JSON.parse (localStorage.getItem('data'))
    )
});