let films                               = document.querySelector(".films");
let hi                                  = document.querySelector(".hi");
let input_for_search                    = document.querySelector(".input_for_search");
let indexFilms                          = 0;
let pageOne                             = document.querySelector(".pageOne");
let pageTow                             = document.querySelector(".pageTow");
let pageThree                           = document.querySelector(".pageThree");
let pageFour                            = document.querySelector(".pageFour");
let pageFive                            = document.querySelector(".pageFive");
let pageTitle                           = document.querySelector(".pageTitle");
let noAccount                           = document.querySelector(".noAccount");
let maxcontainer                        = document.querySelector(".maxcontainer");
pageOne.onclick = function() {
    indexFilms=0;
    showFilms();
    input_for_search.value='';
    pageOne.classList.add("activePage");
    pageTow.classList.remove("activePage");
    pageThree.classList.remove("activePage");
    pageFour.classList.remove("activePage");
    pageFive.classList.remove("activePage");
}
pageTow.onclick = function() {
    indexFilms=1;
    showFilms();
    input_for_search.value='';
    pageOne.classList.remove("activePage");
    pageTow.classList.add("activePage");
    pageThree.classList.remove("activePage");
    pageFour.classList.remove("activePage");
    pageFive.classList.remove("activePage");
}
pageThree.onclick = function() {
    indexFilms=2;
    showFilms();
    input_for_search.value='';
    pageOne.classList.remove("activePage");
    pageTow.classList.remove("activePage");
    pageThree.classList.add("activePage");
    pageFour.classList.remove("activePage");
    pageFive.classList.remove("activePage");
}
pageFour.onclick = function() {
    indexFilms=3;
    showFilms();
    input_for_search.value='';
    pageOne.classList.remove("activePage");
    pageTow.classList.remove("activePage");
    pageThree.classList.remove("activePage");
    pageFour.classList.add("activePage");
    pageFive.classList.remove("activePage");
}
pageFive.onclick = function() {
    indexFilms=4;
    showFilms();
    input_for_search.value='';
    pageOne.classList.remove("activePage");
    pageTow.classList.remove("activePage");
    pageThree.classList.remove("activePage");
    pageFour.classList.remove("activePage");
    pageFive.classList.add("activePage");
}
let cardFilms                           = [
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
    {
        image: "/home page/images/film32.jpg",
        name : "seoul vibe"
    },
    {
        image: "/home page/images/film31.jpg",
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
        {
            image: "/home page/images/film32.jpg",
            name : "seoul vibe"
        },
        {
            image: "/home page/images/film31.jpg",
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
        {
            image: "/home page/images/film32.jpg",
            name : "seoul vibe"
        },
        {
            image: "/home page/images/film31.jpg",
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
        {
            image: "/home page/images/film32.jpg",
            name : "seoul vibe"
        },
        {
            image: "/home page/images/film31.jpg",
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
let array_login                                  =[];
    if(localStorage.information != undefined)
    {
        array_login = JSON.parse(localStorage.information);
    }
function filmShowTrend1(parameter){
        localStorage.trend=3;
        localStorage.index=parameter;
        localStorage.index_2d=indexFilms;
        console.log(localStorage.index);
    };
window.onload = function() {
    hi.innerHTML =
    `
    Hi ${array_login[localStorage.login].firstName}
    `;
    input_for_search.value='';
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
function showFilms() {
    let cards='';
    for(let i=0;i<cardFilms[indexFilms].length;i++)
    {
        cards += 
        `
        <a href="../film show page/show.html">
                <div class="card_film" onclick="filmShowTrend1(${i})">
                <div class="image">
                <img src="${cardFilms[indexFilms][i].image}" alt="">
                </div>
                    <div class="name">
                        <p>${cardFilms[indexFilms][i].name}</p>
                    </div>
                </div>  
            </a>
        `;
    }
    films.innerHTML = cards;
}
input_for_search.onkeyup = function() {
    let cards='';
    let flag_found=false;
    for(let j=0;j<=4;j++)
    {
    for(let i=0;i<cardFilms[j].length;i++)
    {
        if( cardFilms[j][i].name.toLowerCase().includes(input_for_search.value.toLowerCase()) )
        {
            flag_found=true;
            cards += 
            `
            <a href="../film show page/show.html">
                <div class="card_film" onclick="filmShowTrend1(${i})">
                <div class="image">
                <img src="${cardFilms[j][i].image}" alt="">
                </div>
                    <div class="name">
                        <p>${cardFilms[j][i].name}</p>
                    </div>
                </div>  
            </a>
        `;
        }
    }
    }
    films.innerHTML = cards;
    if(flag_found==false)
    {
        films.innerHTML=`<p class="notfound">Not found</p>`;
    }
    flag_found=false;
    if(input_for_search.value.length == 0)
    {
        showFilms();
    }
}
showFilms();