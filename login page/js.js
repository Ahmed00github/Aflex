let inp_password        =  document.querySelector("#input-pass");
let inp_email           =  document.querySelector("#input-email");
let link_ptn_sign       =  document.querySelector(".link-ptn-sign");
let ptn_sign            =  document.querySelector(".ptn-sign");      
let eye_To_Show         =  document.querySelector(".fa-solid");
let wrong_email         =  document.querySelector(".wrong_email");
let wrong_pass          =  document.querySelector(".wrong_pass");
let contt                =  document.querySelector(".contt");
let flag_email          =  false;
let flag_pass           =  false;
let flag_login          =  false;
//console.log(inp_email,inp_password,link_ptn_sign,eye_To_Show);
let array               = [];
if(localStorage.information != undefined)
{
    array = JSON.parse(localStorage.information);
}
// *******************************************************************************
//**************************************************************** */
if( flag_email != true || flag_pass !=true )
{
    ptn_sign.style.cssText=
    `
    opacity:0.5;
    cursor: not-allowed;
    `;
    
}
else {
    ptn_sign.style.cssText=
    `
    opacity:1;
    cursor: pointer;
    `;
    flag_login=true;
}
//**************************************************************** */
inp_email.onkeyup = function() {
    contt.classList.add("hidden");
    if(inp_email.value.length > 3)
    {
        if(inp_email.value.length >3 && inp_email.value.includes("@") && !(inp_email.value.includes(" ")))
    {
        flag_email=true;
        wrong_email.classList.add("hidden");
    }else{
        flag_email=false;
        wrong_email.classList.remove("hidden");
    }  
    }
    // ***************************************************************
    if( flag_email != true || flag_pass !=true )
    {
        ptn_sign.style.cssText=
        `
        opacity:0.5;
        cursor: not-allowed;
        `;
        flag_login=false;
    }
    else {
        ptn_sign.style.cssText=
        `
        opacity:1;
        cursor: pointer;
        `;
        flag_login=true;
    }
    //****************************************************** */
}
// *******************************************************************************
inp_password.onkeyup = function() {
    contt.classList.add("hidden");
    if(inp_password.value.length >= 5)
    {
        flag_pass=true;
        wrong_pass.classList.add("hidden");
    }else {
        flag_pass=false;
        wrong_pass.classList.remove("hidden");
    }
    //****************************************************************** */
    if( flag_email != true || flag_pass !=true )
    {
        ptn_sign.style.cssText=
        `
        opacity:0.5;
        cursor: not-allowed;
        `;
        flag_login=false;
    }
    else {
        ptn_sign.style.cssText=
        `
        opacity:1;
        cursor: pointer;
        `;
        flag_login=true;
    }
}
// *****************************************************************************************
ptn_sign.onclick = function() {
    if(flag_login==true)
    {
        let flag_access = false;
        for(let i=0;i<array.length;i++)
        {
            if (inp_email.value == array[i].email && inp_password.value == array[i].password)
            {
                localStorage.login=i;
                flag_access=true;
                localStorage.logOut=1;
                break;
            }
        }
        if(flag_access==true)
        {
            contt.classList.add("hidden");
            return true;
        }else{
            contt.classList.remove("hidden");
            return false;
            
        }
    }
    else
    {
        contt.classList.remove("hidden");
        return false;
    }
}
//******************************************************************************************* */
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