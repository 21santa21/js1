'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let log = prompt('Enter your login');
if (log === adminLogin){
    let loginPassword = prompt('Enter your password');
    if (loginPassword === adminPassword) {
        alert('Добро пожаловать!');
    } else if (loginPass === null) {
        alert('Отменено пользователем!');
    } else {
        alert('Доступ запрещен, неверный gfhjkm!');
    }
} else if (log === null) {
    alert('Отменено пользователем!');
} else {
    alert('Доступ запрещен, неверный логин!');
}



