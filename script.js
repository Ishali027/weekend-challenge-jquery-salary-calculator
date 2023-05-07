$(document).ready(onReady);

function onReady() {
    console.log('We have jquery $$$');
    $('#submit-btn').on('click' , submitHandle);
    $('#tablebody').on('click','.delete-btn', handleDelete)
}

let totalMonth = 0;

function submitHandle(event) {


    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNumber = $('#identification').val();
    let titleName = $('#title-name').val();
    let annualSalary = $('#annual-salary').val();

    event.preventDefault();

    
    $('#tablebody').append(`
    <tr>
        <td>
            ${firstName}
        </td>
        <td>
            ${lastName}
        </td>
        <td>
            ${idNumber}
        </td>
        <td>
            ${titleName}
        </td>
        <td>
            ${annualSalary}
        </td>
        <td>
            <button class= 'delete-btn'>Delete❌</button>
        </td>
        
    </tr>
    `)

    $('#first-name').val('');
    $('#last-name').val('');
    $('#identification').val('');
    $('#title-name').val('');
    $('#annual-salary').val('');

    totalMonth+=Math.round(annualSalary/12)
    $('#totalMonth').text(totalMonth)
    if(totalMonth>20000){
        $('#monthlyContainer').css('background-color', 'gray')
        $('#monthlyContainer').css('color', 'red')
    }   

}

function handleDelete() {
    $(this).closest('tr').remove()
}

