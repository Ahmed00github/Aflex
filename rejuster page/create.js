let inp_firstName           = document.querySelector(".inp-first");
let inp_last                = document.querySelector(".inp-last");
let inp_emila               = document.querySelector(".inp-email");
let inp_age                 = document.querySelector(".inp-age");
let inp_password            = document.querySelector(".inp-password");
let ptn_create              = document.querySelector(".ptn_create");
let eye_To_Show             =  document.querySelector(".fa-solid");
//************************************************************************** */
let flag_firstName          = false;
let flag_lastName           = false;
let flat_email              = false;
let flag_pass               = false;
let flag_create             = false;
//************************************************************************** */
let wrongFirstName1         = document.querySelector(".wrongFirstName1");
let wrongFirstName2         = document.querySelector(".wrongFirstName2");
let wrongFirstName3         = document.querySelector(".wrongFirstName3");
let wrongFirstName5         = document.querySelector(".wrongFirstName5");
let old_account             = document.querySelector(".old_account");
let new_account             = document.querySelector(".new_account");
//*************************************************************************** */
//*************************************************************************** */
let array                   = [];
//*************************************************************************** */
if(localStorage.information != undefined)
{
    array = JSON.parse(localStorage.information);
}
//*************************************************************************** */
//  console.log(inp_firstName,inp_last,inp_emila,inp_age,inp_password,ptn_create);
if(flag_firstName != true || flag_lastName != true || flat_email != true || flag_pass != true)
{
    new_account.classList.add("hidden");
    old_account.classList.add("hidden");
    ptn_create.style.cssText=
    `
    opacity:0.5;
    cursor: not-allowed;
    `;
    flag_create=false;
}else {
    ptn_create.style.cssText=
    `
    opacity:1;
    cursor: pointer;
    `;
    flag_create=true;
}
//******************************************************************************************************* */
inp_firstName.onkeyup = function() {
    new_account.classList.add("hidden");
    old_account.classList.add("hidden");
    if(inp_firstName.value.length < 3)
    {
        flag_firstName=false;
        wrongFirstName1.classList.remove("hidden");
    }else {
        flag_firstName=true;
        wrongFirstName1.classList.add("hidden");
    }
    //********************************************************* */
    if(flag_firstName != true || flag_lastName != true || flat_email != true || flag_pass != true)
    {
        ptn_create.style.cssText=
        `
        opacity:0.5;
        cursor: not-allowed;
        `;
        flag_create=false;
    }else {
        ptn_create.style.cssText=
        `
        opacity:1;
        cursor: pointer;
        `;
        flag_create=true;
    }
}
//*************************************************************************************************************** */
inp_last.onkeyup = function() {
    new_account.classList.add("hidden");
    old_account.classList.add("hidden");
    if(inp_last.value.length < 3)
    {
        flag_lastName=false;
        wrongFirstName2.classList.remove("hidden");
    }else {
        flag_lastName=true;
        wrongFirstName2.classList.add("hidden");
    }
    //********************************************************* */
    if(flag_firstName != true || flag_lastName != true || flat_email != true || flag_pass != true)
    {
        ptn_create.style.cssText=
        `
        opacity:0.5;
        cursor: not-allowed;
        `;
        flag_create=false;
    }else {
        ptn_create.style.cssText=
        `
        opacity:1;
        cursor: pointer;
        `;
        flag_create=true;
    }
}
//******************************************************************************************************************* */
inp_emila.onkeyup = function() {
    new_account.classList.add("hidden");
    old_account.classList.add("hidden");
    if(inp_emila.value.includes("@") && inp_emila.value.length > 3)
    {
        flat_email=true;
        wrongFirstName3.classList.add("hidden");
    }else {
        flat_email=false;
        wrongFirstName3.classList.remove("hidden");
    }
    //******************************************************************* */
    if(flag_firstName != true || flag_lastName != true || flat_email != true || flag_pass != true)
    {
        ptn_create.style.cssText=
        `
        opacity:0.5;
        cursor: not-allowed;
        `;
        flag_create=false;
    }else {
        ptn_create.style.cssText=
        `
        opacity:1;
        cursor: pointer;
        `;
        flag_create=true;
    }
}
//********************************************************************************************************************** */
console.log(wrongFirstName5)
inp_password.onkeyup = function() {
    new_account.classList.add("hidden");
    old_account.classList.add("hidden");
    if(inp_password.value.length >= 5)
    {
        flag_pass=true;
        wrongFirstName5.classList.add("hidden");
    }else {
        flag_pass=false;
        wrongFirstName5.classList.remove("hidden");
    }
    if(flag_firstName != true || flag_lastName != true || flat_email != true || flag_pass != true)
    {
        ptn_create.style.cssText=
        `
        opacity:0.5;
        cursor: not-allowed;
        `;
        flag_create=false;
    }else {
        ptn_create.style.cssText=
        `
        opacity:1;
        cursor: pointer;
        `;
        flag_create=true;
    }
}
//************************************************************************************************************************ */
ptn_create.onclick = function() {
    if(flag_create==true)
    {
        let account=newAccount={
                firstName : inp_firstName.value,
                lastName  : inp_last.value,
                email     : inp_emila.value,
                password  : inp_password.value,
            };
        let flag_newAccount=true;
            for(let i=0 ; i< array.length ; i++)
            {
                if(account.email == array[i].email)
                {
                    flag_newAccount=false;
                    break;
                }
            }
            if(flag_newAccount == true)
            {
                old_account.classList.add("hidden");
                array.push(account);
                localStorage.information=JSON.stringify(array);
                new_account.classList.remove("hidden");
            }else {
                old_account.classList.remove("hidden");
                new_account.classList.add("hidden");
            }
        
    }
}
//*************************************************************************************************************************** */
eye_To_Show.onclick = function() {
    if(eye_To_Show.classList.contains("fa-eye"))
    {
        eye_To_Show.classList.remove("fa-eye");
        eye_To_Show.classList.add("fa-eye-slash");
        inp_password.setAttribute("type","text");
    }
    else
    {
        eye_To_Show.classList.add("fa-eye");
        eye_To_Show.classList.remove("fa-eye-slash");
        inp_password.setAttribute("type","password");
    }
}