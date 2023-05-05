$(document).ready(onReady);

function onReady() {
    console.log('We have jQuery! 💲💲💲');

    $('#submitButton').on( 'click', handleSubmit);

}

function handleSubmit(event) {
    
    let inputFname = $('#input-f-name').val();
    let inputLname = $('#input-l-name').val();
    let inputIdNum = $('#input-id-Num').val();
    let inputJobTitle = $('#input-job-Title').val();
    let inputAnnualSalary = $('#input-annSalary').val();


    event.preventDefault();

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

    $('#input-f-name').val('');
    $('#input-l-name').val('');
    $('#input-id-Num').val('');
    $('#input-job-Title').val('');
    $('#input-annSalary').val('');


}