const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('input');

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}
function getMail(){
    var mail = document.getElementById("mail_input").value;
    if (isEmailValid(input.value)){
        alert(`Данные отправлены! ${mail}`);
    } else if (document.getElementById("mail_input").value === ""){
        alert("Введите адрес электронной почты.");
    } else {
        alert("Введен некорректный адрес.")
    }
}


