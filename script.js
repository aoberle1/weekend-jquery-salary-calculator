$(document).ready(onReady);

function onReady() {
    console.log('We have jQuery! 💲💲💲');

    // target element with id submitButton and on click, run function handleSubmit
    $('#submitButton').on( 'click', handleSubmit);

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

    event.preventDefault();

    // when the function runs, targeting the element with id table-body, and append it to include
    // the following table row and table data cells
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

    $('#monthly-salary-span').empty();
    // incrementing to ensure element and variable are connected
    // monthlySalaryContainer++
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


}

let monthlySalaryContainer = 0;