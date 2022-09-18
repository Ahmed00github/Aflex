let hi                                  = document.querySelector(".hi");
let pageName                            = document.querySelector(".pageName");
let maxcontainer                        = document.querySelector(".maxcontainer");
let noAccount                           = document.querySelector(".noAccount");
let cardFilms                   = [
    [
    {
        image: "/home page/images/film20.jpg",
        name : "Shark side"
    },
    {
        image: "/home page/images/film21.jpg",
        name : "The resorl"
    },
    {
        image: "/home page/images/film22.jpg",
        name : "Hidden fox"
    },
    {
        image: "/home page/images/film23.jpg",
        name : "Bullet proof"
    },
    {
        image: "/home page/images/film32.jpg",
        name : "Eradication"
    },
    {
        image: "/home page/images/film25.jpg",
        name : "Glorious"
    },
    {
        image: "/home page/images/film26.jpg",
        name : "seoul vibe"
    },
    {
        image: "/home page/images/film11.jpg",
        name : "Bhaag milkha Bhaag"
    },
    {
        image: "/home page/images/film12.jpg",
        name : "The resorl"
    },
    {
        image: "/home page/images/film13.jpg",
        name : "Fall"
    },
    {
        image: "/home page/images/film14.jpg",
        name : "3mohm"
    },
    {
        image: "/home page/images/film15.jpg",
        name : "Lost city"
    },
    {
        image: "/home page/images/film16.jpg",
        name : "Apo sdam"
    },
    {
        image: "/home page/images/film17.jpg",
        name : "seoul vibe"
    },
    ],
    // *********************************************
    [
        {
            image: "/home page/images/film1.jpg",
            name : "Shark side"
        },
        {
            image: "/home page/images/film2.jpg",
            name : "The resorl"
        },
        {
            image: "/home page/images/film3.jpg",
            name : "Hidden fox"
        },
        {
            image: "/home page/images/film4.jpg",
            name : "Bullet proof"
        },
        {
            image: "/home page/images/film5.jpg",
            name : "Eradication"
        },
        {
            image: "/home page/images/film6.jpg",
            name : "Glorious"
        },
        {
            image: "/home page/images/film7.jpg",
            name : "seoul vibe"
        },
        {
            image: "/home page/images/film8.jpg",
            name : "Bhaag milkha Bhaag"
        },
        {
            image: "/home page/images/film9.jpg",
            name : "The resorl"
        },
        {
            image: "/home page/images/film10.jpg",
            name : "Fall"
        },
        {
            image: "/home page/images/film11.jpg",
            name : "3mohm"
        },
        {
            image: "/home page/images/film12.jpg",
            name : "Lost city"
        },
        {
            image: "/home page/images/film13.jpg",
            name : "Apo sdam"
        },
        {
            image: "/home page/images/film14.jpg",
            name : "seoul vibe"
        },
    ],
    // *************************************************
    [
        {
            image: "/home page/images/film32.jpg",
            name : "Shark side"
        },
        {
            image: "/home page/images/film31.jpg",
            name : "The resorl"
        },
        {
            image: "/home page/images/film29.jpg",
            name : "Hidden fox"
        },
        {
            image: "/home page/images/film28.jpg",
            name : "Bullet proof"
        },
        {
            image: "/home page/images/film27.jpg",
            name : "Eradication"
        },
        {
            image: "/home page/images/film26.jpg",
            name : "Glorious"
        },
        {
            image: "/home page/images/film25.jpg",
            name : "seoul vibe"
        },
        {
            image: "/home page/images/film24.jpg",
            name : "Bhaag milkha Bhaag"
        },
        {
            image: "/home page/images/film23.jpg",
            name : "The resorl"
        },
        {
            image: "/home page/images/film22.jpg",
            name : "Fall"
        },
        {
            image: "/home page/images/film21.jpg",
            name : "3mohm"
        },
        {
            image: "/home page/images/film20.jpg",
            name : "Lost city"
        },
        {
            image: "/home page/images/film19.jpg",
            name : "Apo sdam"
        },
        {
            image: "/home page/images/film18.jpg",
            name : "seoul vibe"
        },
    ],
    // ****************************************************
    [
        {
            image: "/home page/images/film1.jpg",
            name : "Shark side"
        },
        {
            image: "/home page/images/film2.jpg",
            name : "The resorl"
        },
        {
            image: "/home page/images/film3.jpg",
            name : "Hidden fox"
        },
        {
            image: "/home page/images/film4.jpg",
            name : "Bullet proof"
        },
        {
            image: "/home page/images/film5.jpg",
            name : "Eradication"
        },
        {
            image: "/home page/images/film6.jpg",
            name : "Glorious"
        },
        {
            image: "/home page/images/film7.jpg",
            name : "seoul vibe"
        },
        {
            image: "/home page/images/film8.jpg",
            name : "Bhaag milkha Bhaag"
        },
        {
            image: "/home page/images/film9.jpg",
            name : "The resorl"
        },
        {
            image: "/home page/images/film10.jpg",
            name : "Fall"
        },
        {
            image: "/home page/images/film11.jpg",
            name : "3mohm"
        },
        {
            image: "/home page/images/film12.jpg",
            name : "Lost city"
        },
        {
            image: "/home page/images/film13.jpg",
            name : "Apo sdam"
        },
        {
            image: "/home page/images/film14.jpg",
            name : "seoul vibe"
        },
    ],
    // **************************************************
    [
        {
            image: "/home page/images/film32.jpg",
            name : "Shark side"
        },
        {
            image: "/home page/images/film31.jpg",
            name : "The resorl"
        },
        {
            image: "/home page/images/film29.jpg",
            name : "Hidden fox"
        },
        {
            image: "/home page/images/film28.jpg",
            name : "Bullet proof"
        },
        {
            image: "/home page/images/film27.jpg",
            name : "Eradication"
        },
        {
            image: "/home page/images/film26.jpg",
            name : "Glorious"
        },
        {
            image: "/home page/images/film25.jpg",
            name : "seoul vibe"
        },
        {
            image: "/home page/images/film24.jpg",
            name : "Bhaag milkha Bhaag"
        },
        {
            image: "/home page/images/film23.jpg",
            name : "The resorl"
        },
        {
            image: "/home page/images/film22.jpg",
            name : "Fall"
        },
        {
            image: "/home page/images/film21.jpg",
            name : "3mohm"
        },
        {
            image: "/home page/images/film20.jpg",
            name : "Lost city"
        },
        {
            image: "/home page/images/film19.jpg",
            name : "Apo sdam"
        },
        {
            image: "/home page/images/film18.jpg",
            name : "seoul vibe"
        },
    ],
    ];
let TendingFilms                = [
    {
        image: "/home page/images/film11.jpg",
        name : "Bhaag milkha Bhaag"
    },
    {
        image: "/home page/images/film12.jpg",
        name : "The resorl"
    },
    {
        image: "/home page/images/film13.jpg",
        name : "Fall"
    },
    {
        image: "/home page/images/film14.jpg",
        name : "3mohm"
    },
    {
        image: "/home page/images/film15.jpg",
        name : "Lost city"
    },
    {
        image: "/home page/images/film16.jpg",
        name : "Apo sdam"
    },
    {
        image: "/home page/images/film17.jpg",
        name : "seoul vibe"
    },
    ];
// *********************************************************************************************************************
let TendingFilms2                = [
        {
            image: "/home page/images/film20.jpg",
            name : "Shark side"
        },
        {
            image: "/home page/images/film21.jpg",
            name : "The resorl"
        },
        {
            image: "/home page/images/film22.jpg",
            name : "Hidden fox"
        },
        {
            image: "/home page/images/film23.jpg",
            name : "Bullet proof"
        },
        {
            image: "/home page/images/film32.jpg",
            name : "Eradication"
        },
        {
            image: "/home page/images/film25.jpg",
            name : "Glorious"
        },
        {
            image: "/home page/images/film26.jpg",
            name : "seoul vibe"
        },
        ];
let array_login                             =[];
if(localStorage.information != undefined)
{
    array_login = JSON.parse(localStorage.information);
}
//************************************************************************************************************************ */
// localStorage.trend
// localStorage.index
let filmName                            = document.querySelector(".filmName");
let filmImage                           = document.querySelector(".filmImage");

window.onload = function(){
    if(localStorage.trend==1)
    {
        filmName.innerHTML = TendingFilms[localStorage.index].name;
        filmImage.src      = TendingFilms[localStorage.index].image;
        pageName.innerHTML = TendingFilms[localStorage.index].name;
    }
    else if(localStorage.trend==2)
    {
        filmName.innerHTML = TendingFilms2[localStorage.index].name;
        filmImage.src      = TendingFilms2[localStorage.index].image;
        pageName.innerHTML = TendingFilms2[localStorage.index].name;
    }
    else 
    {
        filmName.innerHTML = cardFilms[localStorage.index_2d][localStorage.index].name;
        filmImage.src      = cardFilms[localStorage.index_2d][localStorage.index].image;
        pageName.innerHTML = cardFilms[localStorage.index_2d][localStorage.index].name;
        console.log(cardFilms[localStorage.index_2d][localStorage.index].name)
    }
    hi.innerHTML =
    `
    Hi ${array_login[localStorage.login].firstName}
    `;
    if(localStorage.logOut == 0)
    {
        pageName.innerHTML = `no account log in now`;
        noAccount.classList.remove("hidden");
        maxcontainer.classList.add("hidden");
    }
    else 
    {
        pageName.innerHTML = `Aflex`;
        maxcontainer.classList.remove("hidden");
        noAccount.classList.add("hidden");
    }
}