let pageTitle                               = document.querySelector(".pageTitle");
let inp_name                                = document.querySelector(".inp_name");
let inp_email                               = document.querySelector(".inp_email");
let inp_pass                                = document.querySelector(".inp_pass");
let ptn_chan                                = document.querySelector(".ptn_chan");
let peranPassword                           = document.querySelector(".peranPassword");
let changePassword                          = document.querySelector(".changePassword");
let finallyChange                           = document.querySelector(".finallyChange");
let ptn_finallyChange                       = document.querySelector(".ptn_finallyChange");
let inp_oldPass                             = document.querySelector(".inp_oldPass");
let inp_newPass                             = document.querySelector(".inp_newPass");
let done                                    = document.querySelector(".done");
let not_done                                = document.querySelector(".not_done");
let canselChange                            = document.querySelector(".canselChange");
let mainSection                             = document.querySelector(".mainSection");
let noAccount                               = document.querySelector(".noAccount");
let eye1                                    = document.querySelector(".eye1");
let eye2                                    = document.querySelector(".eye2");
console.log(eye1)
// console.log(ptn_finallyChange)
let array_login                             =[];
if(localStorage.information != undefined)
{
    array_login = JSON.parse(localStorage.information);
}
window.onload = function() {
    inp_name.value=`${array_login[localStorage.login].firstName} ${array_login[localStorage.login].lastName}`;
    pageTitle.innerHTML = `${array_login[localStorage.login].firstName} ${array_login[localStorage.login].lastName}`;
    inp_email.value=`${array_login[localStorage.login].email}`;
    inp_pass.value=`${array_login[localStorage.login].password}`;
    if(localStorage.logOut == 0)
    {
        mainSection.classList.add("hidden");
        pageTitle.innerHTML = `no account log in now`;
        noAccount.classList.remove("hidden");
    }
    else 
    {
        inp_name.value=`${array_login[localStorage.login].firstName} ${array_login[localStorage.login].lastName}`;
        pageTitle.innerHTML = `${array_login[localStorage.login].firstName} ${array_login[localStorage.login].lastName}`;
        inp_email.value=`${array_login[localStorage.login].email}`;
        inp_pass.value=`${array_login[localStorage.login].password}`;
        mainSection.classList.remove("hidden");
        noAccount.classList.add("hidden");
    }
}
ptn_chan.onclick = function() {
    inp_newPass.value='';
    inp_oldPass.value='';
    peranPassword.classList.add("hidden");
    ptn_chan.classList.add("hidden");
    changePassword.classList.remove("hidden");
    finallyChange.classList.remove("hidden");
}
console.log(array_login[localStorage.login].password)
ptn_finallyChange.onclick = function() {
    if( inp_oldPass.value == array_login[localStorage.login].password && inp_newPass.value.length >=5 && localStorage.logOut==1 && inp_oldPass.value != inp_newPass.value)
    {
        array_login[localStorage.login].password = inp_newPass.value;
        localStorage.information = JSON.stringify(array_login);
        inp_pass.value=`${array_login[localStorage.login].password}`;
        done.classList.remove("hidden");
        setTimeout(() => {
            peranPassword.classList.remove("hidden");
            ptn_chan.classList.remove("hidden");
            changePassword.classList.add("hidden");
            finallyChange.classList.add("hidden");
            done.classList.add("hidden");
            not_done.classList.add("hidden");
        }, 1000);
        window.onload();
    }
    else {
        not_done.classList.remove("hidden");
        window.onload();
    }
}
canselChange.onclick = function() {
            peranPassword.classList.remove("hidden");
            ptn_chan.classList.remove("hidden");
            changePassword.classList.add("hidden");
            finallyChange.classList.add("hidden");
            done.classList.add("hidden");
            not_done.classList.add("hidden");
}
inp_newPass.onkeyup = function() {
    not_done.classList.add("hidden");
}
inp_oldPass.onkeyup = function() {
    not_done.classList.add("hidden");
}
eye1.onclick = function() {
    if(eye1.classList.contains("fa-eye"))
    {
        eye1.classList.remove("fa-eye");
        eye1.classList.add("fa-eye-slash");
        inp_oldPass.setAttribute("type","text");
    }
    else
    {
        eye1.classList.add("fa-eye");
        eye1.classList.remove("fa-eye-slash");
        inp_oldPass.setAttribute("type","password");
    }
}
eye2.onclick = function() {
    if(eye2.classList.contains("fa-eye"))
    {
        eye2.classList.remove("fa-eye");
        eye2.classList.add("fa-eye-slash");
        inp_newPass.setAttribute("type","text");
    }
    else
    {
        eye2.classList.add("fa-eye");
        eye2.classList.remove("fa-eye-slash");
        inp_newPass.setAttribute("type","password");
    }
}