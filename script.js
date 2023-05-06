$(document).ready(onReady);

function onReady() {
    console.log('We have jQuery! 💲💲💲');

    // target element with id submitButton and on click, run function handleSubmit
    $('#submitButton').on( 'click', handleSubmit);

    // target element with id table-body, when the child element .delete-btn within it is clicked
    // run the function removeHuman
    $('#table-body').on( 'click', '.delete-btn', removeHuman);

}

// function that runs on event (click of submit button)
function handleSubmit(event) {
    
    // creating variables to set as the values of the form inputs
    let inputFname = $('#input-f-name').val();
    let inputLname = $('#input-l-name').val();
    let inputIdNum = $('#input-id-Num').val();
    let inputJobTitle = $('#input-job-Title').val();
    let inputAnnualSalary = $('#input-annSalary').val();
    
    // creating variable to store monthly salary value
    let monthlySalary = inputAnnualSalary / 12;

    // prevents default unwanted behavior to run upon function being called
    event.preventDefault();

    // when the function runs, targeting the element with id table-body, and append it to include
    // the following table row and table data cells, with data received from HTML form inputs
    // also creates a delete button at the end of the row
    $('#table-body').append(`
        <tr>
            <td>
                ${inputFname}
            </td>
            <td>
                ${inputLname}
            </td>
            <td>
                ${inputIdNum}
            </td>
            <td>
                ${inputJobTitle}
            </td>
            <td>
                ${inputAnnualSalary}
            </td>
            <td>
                <button class="delete-btn">delete</button>
            </td>
        </tr>
    `)

    // each time the submit button is clicked, empties out the element with the ID
    // monthly-salary-span
    $('#monthly-salary-span').empty();

    // incrementing test to ensure element and variable are connected
    // monthlySalaryContainer++

    // each time the submit button is clicked, adds the value of the monthlySalary variable to it
    // and appends the global variable to the new value
    monthlySalaryContainer += monthlySalary

    // targets element with id monthly-salary-span and appends it to the value of the
    // monthlySalaryContainer variable
    $('#monthly-salary-span').append(monthlySalaryContainer)
    
    // when submit button is clicked, empties out the form inputs on the html
    $('#input-f-name').val('');
    $('#input-l-name').val('');
    $('#input-id-Num').val('');
    $('#input-job-Title').val('');
    $('#input-annSalary').val('');

    // if statement that executes if the monthlySalaryContainer value exceeds 20,000
    if (monthlySalaryContainer > 20000){
        // targets element with ID red-wedding and gives it the class super-secret
        $('#red-wedding').addClass('super-secret')
    }

    Math.round(monthlySalaryContainer);
}

// function to remove 
function removeHuman() {
    // removes the "grandparent" of the element clicked
    $(this).parent().parent().remove();
}

// creating variable with value set to zero - connected to #monthly-salary-span element in HTML
// connected in 
let monthlySalaryContainer = 0;