var user__menu__items_logout = document.querySelector('.user__menu-items-logout')
console.log(user__menu__items_logout)
var modals = document.querySelectorAll('.modal')
console.log(modals)
var modal_login = document.querySelector('.modal_login');
var modal__content_Login = document.querySelector('.modal__content_Login')
console.log(modal__content_Login)


var modal__Register = document.querySelector('.modal__Register')
var modal__content_Register = document.querySelector('.modal__content_Register')
console.log(modal__content_Register)

var btn__secondary = document.querySelector('.btn__secondary')


user__menu__items_logout.onclick = function(e) {
    modal__content_Login.style.display = 'flex';   

    modal_login.style.display = 'flex';

}

var form_login__Switchbtn = document.querySelector('.form-login__Switch-btn');
form_login__Switchbtn.onclick = () => {
    modal__Register.style.display = 'flex';
    modal__content_Register.style.display = 'flex';
    modal__content_Login.style.display = 'none';   

}
btn__secondary.onclick  = () => {
    modal__content_Login.style.display = 'none';   

    modal_login.style.display = 'none';
}

var btn__secondary_Register = document.querySelector('.btn__secondary_Register');
btn__secondary_Register.onclick = function () {
    modal__content_Register.style.display = 'none';   
    modal__content_Login.style.display = 'none';   
    modal_login.style.display = 'none';
    modal__Register.style.display = 'none';
    // var modal__overlay = document.querySelector('.modal__overlay ').style.display = 'none';

}