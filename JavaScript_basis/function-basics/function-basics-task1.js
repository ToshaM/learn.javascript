function checkAge(age) {
age = (age > 18) ? true : confirm('Родители разрешили?')
}

function checkAge(age) {
return age = age > 18 || confirm('Родители разрешили?')
}
