let login = prompt('What is name?', 'pressname');
if (login == 'Admin') {
    let password = prompt('What is password?', 'presspassword');
    if (password == 'Я главный') {
        alert('Здравствуйте!')
    } if (password == null) {
        alert('Отмена')
    } else if (password != 'Я главный') {
        alert('Неверный пароль')
    }
} if (login == null) {
    alert('Отменено')
} else if (login != 'Admin') {
    alert('Я вас не знаю!')
}
