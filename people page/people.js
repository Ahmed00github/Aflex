let allImages                           = document.querySelector(".allImages");
let pageOne                             = document.querySelector(".pageOne");
let pageTow                             = document.querySelector(".pageTow");
let pageThree                           = document.querySelector(".pageThree");
let pageFour                            = document.querySelector(".pageFour");
let pageFive                            = document.querySelector(".pageFive");
let tosetMainImage                      = document.querySelector(".one");
let mainImage                           = document.querySelector(".mainImage");
let one                                 = document.querySelector("#one");
let hi                                  = document.querySelector(".hi");
let maxcontainer                        = document.querySelector(".maxcontainer");
let pageTitle                           = document.querySelector(".pageTitle");
let noAccount                           = document.querySelector(".noAccount");
{/* <div class="contImage">
                <img src="../home page/images/film12.jpg" >
            </div> */}
let index_2d                            = 0;
let arr_images                          = [
    [
        {
            image:"../home page/images/film16.jpg",
        },
        {
            image:"../home page/images/film17.jpg",
        },
        {
            image:"../home page/images/film18.jpg",
        },
        {
            image:"../home page/images/film19.jpg",
        },
        {
            image:"../home page/images/film20.jpg",
        },
    ],
    [
        {
            image:"../home page/images/film1.jpg",
        },
        {
            image:"../home page/images/film2.jpg",
        },
        {
            image:"../home page/images/film3.jpg",
        },
        {
            image:"../home page/images/film4.jpg",
        },
        {
            image:"../home page/images/film5.jpg",
        },
    ],
    [
        {
            image:"../home page/images/film32.jpg",
        },
        {
            image:"../home page/images/film31.jpg",
        },
        {
            image:"../home page/images/film29.jpg",
        },
        {
            image:"../home page/images/film28.jpg",
        },
        {
            image:"../home page/images/film27.jpg",
        },
    ],
    [
        {
            image:"../home page/images/film10.jpg",
        },
        {
            image:"../home page/images/film25.jpg",
        },
        {
            image:"../home page/images/film3.jpg",
        },
        {
            image:"../home page/images/film20.jpg",
        },
        {
            image:"../home page/images/film16.jpg",
        },
    ],
    [
        {
            image:"../home page/images/film4.jpg",
        },
        {
            image:"../home page/images/film5.jpg",
        },
        {
            image:"../home page/images/film23.jpg",
        },
        {
            image:"../home page/images/film31.jpg",
        },
        {
            image:"../home page/images/film32.jpg",
        },
    ],
];
let array_login                             =[];
if(localStorage.information != undefined)
{
    array_login = JSON.parse(localStorage.information);
}
window.onload = function () {
        index_2d=0;
        pageOne.classList.add("activimage");
        pageTow.classList.remove("activimage");
        pageThree.classList.remove("activimage");
        pageFour.classList.remove("activimage");
        pageFive.classList.remove("activimage");
        one.src=arr_images[index_2d][0].image;
        showImages();
        hi.innerHTML =
        `
        Hi ${array_login[localStorage.login].firstName}
        `;
    if(localStorage.logOut == 0)
    {
        pageTitle.innerHTML = `no account log in now`;
        noAccount.classList.remove("hidden");
        maxcontainer.classList.add("hidden");
    }
    else 
    {
        pageTitle.innerHTML = `Aflex`;
        maxcontainer.classList.remove("hidden");
        noAccount.classList.add("hidden");
    }
}

function showImages() {
    let cards='';
        for(let j=0;j<arr_images[index_2d].length;j++)
        {
            cards += 
            `
            <div class="img0" onclick="setMainImage(${j})">
                    <img src="${arr_images[index_2d][j].image}" >
            </div>
            `;
        }
        allImages.innerHTML = cards;
}
function setMainImage(parameter) {
    one.src = arr_images[index_2d][parameter].image;
}
showImages();
pageOne.onclick = function() {
    index_2d=0;
    pageOne.classList.add("activimage");
    pageTow.classList.remove("activimage");
    pageThree.classList.remove("activimage");
    pageFour.classList.remove("activimage");
    pageFive.classList.remove("activimage");
    showImages();
}
pageTow.onclick = function() {
    index_2d=1;
    pageOne.classList.remove("activimage");
    pageTow.classList.add("activimage");
    pageThree.classList.remove("activimage");
    pageFour.classList.remove("activimage");
    pageFive.classList.remove("activimage");
    showImages();
}
pageThree.onclick = function() {
    index_2d=2;
    pageOne.classList.remove("activimage");
    pageTow.classList.remove("activimage");
    pageThree.classList.add("activimage");
    pageFour.classList.remove("activimage");
    pageFive.classList.remove("activimage");
    showImages();
}
pageFour.onclick = function() {
    index_2d=3;
    pageOne.classList.remove("activimage");
    pageTow.classList.remove("activimage");
    pageThree.classList.remove("activimage");
    pageFour.classList.add("activimage");
    pageFive.classList.remove("activimage");
    showImages();
}
pageFive.onclick = function() {
    index_2d=4;
    pageOne.classList.remove("activimage");
    pageTow.classList.remove("activimage");
    pageThree.classList.remove("activimage");
    pageFour.classList.remove("activimage");
    pageFive.classList.add("activimage");
    showImages();
}
