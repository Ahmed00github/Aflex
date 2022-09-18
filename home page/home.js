let max_width_films             = document.querySelector(".max_width_films");
let max_width_films2            = document.querySelector(".max_width_films2");
let section_trending_films      = document.querySelector(".sec_two");
let section_three               = document.querySelector(".sec_three");
let toUP                        = document.querySelector(".toUP");
let stars                       = document.querySelector(".stars");
let hi                          = document.querySelector(".hi");
let logOut                      = document.querySelector(".logOut");
let maxcontainer                = document.querySelector(".maxcontainer");
let pageTitle                   = document.querySelector(".pageTitle");
let noAccount                   = document.querySelector(".noAccount");
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
let stars_cards                             = [
    {
        image: "/home page/images/film25.jpg",
        name : "Glorious"
    },
    {
        image: "/home page/images/film25.jpg",
        name : "Glorious"
    },
    {
        image: "/home page/images/film25.jpg",
        name : "Glorious"
    },
    {
        image: "/home page/images/film25.jpg",
        name : "Glorious"
    },
    {
        image: "/home page/images/film25.jpg",
        name : "Glorious"
    },
    {
        image: "/home page/images/film25.jpg",
        name : "Glorious"
    },
    {
        image: "/home page/images/film25.jpg",
        name : "Glorious"
    },
    {
        image: "/home page/images/film25.jpg",
        name : "Glorious"
    },
    {
        image: "/home page/images/film25.jpg",
        name : "Glorious"
    },
    {
        image: "/home page/images/film25.jpg",
        name : "Glorious"
    },
    {
        image: "/home page/images/film25.jpg",
        name : "Glorious"
    },
];
let cards_animation                             =[
    {
        image: "/home page/images/film1.jpg",
    },
    {
        image: "/home page/images/film2.jpg",
    },
    {
        image: "/home page/images/film3.jpg",
    },
    {
        image: "/home page/images/film4.jpg",
    },
    {
        image: "/home page/images/film5.jpg",
    },
    {
        image: "/home page/images/film6.jpg",
    },
    {
        image: "/home page/images/film7.jpg",
    },
    {
        image: "/home page/images/film8.jpg",
    },
    {
        image: "/home page/images/film9.jpg",
    },
    {
        image: "/home page/images/film10.jpg",
    },
    {
        image: "/home page/images/film11.jpg",
    },
    {
        image: "/home page/images/film12.jpg",
    },
    {
        image: "/home page/images/film13.jpg",
    },
    {
        image: "/home page/images/film14.jpg",
    },
    {
        image: "/home page/images/film15.jpg",
    },
    {
        image: "/home page/images/film16.jpg",
    },
];
let cards_animation2                        = [
    {
        image: "/home page/images/film32.jpg",
    },
    {
        image: "/home page/images/film31.jpg",
    },
    {
        image: "/home page/images/film29.jpg",
    },
    {
        image: "/home page/images/film28.jpg",
    },
    {
        image: "/home page/images/film27.jpg",
    },
    {
        image: "/home page/images/film26.jpg",
    },
    {
        image: "/home page/images/film25.jpg",
    },
    {
        image: "/home page/images/film24.jpg",
    },
    {
        image: "/home page/images/film23.jpg",
    },
    {
        image: "/home page/images/film22.jpg",
    },
    {
        image: "/home page/images/film21.jpg",
    },
    {
        image: "/home page/images/film20.jpg",
    },
    {
        image: "/home page/images/film19.jpg",
    },
    {
        image: "/home page/images/film18.jpg",
    },
    {
        image: "/home page/images/film17.jpg",
    },
    {
        image: "/home page/images/film4.jpg",
    },
];
let array_login                             =[];
if(localStorage.information != undefined)
{
    array_login = JSON.parse(localStorage.information);
}
// console.log(ptn_right,max_width_films);
//Functions
showstars();
showCardAnimation1();
showCardAnimation2();
showTrendingFilms();
showTrendingFilms2();
anime();
anime2();
//Functions
function showCardAnimation1() {
    let cards='';
    for(let i=0;i<cards_animation.length;i++)
    {
        cards += 
        `
        <a href="#">
        <div class="card">
            <div class="image">
                <img src="${cards_animation[i].image}" alt="">
            </div>
        </div>
        </a>
        `;
    }
    max_width_films.innerHTML += cards;
};
function showCardAnimation2() {
    let cards='';
    for(let i=0;i<cards_animation2.length;i++)
    {
        cards += 
        `
        <a href="#">
        <div class="card">
            <div class="image">
                <img src="${cards_animation2[i].image}" alt="">
            </div>
        </div>
        </a>
        `;
    }
    max_width_films2.innerHTML += cards;
};
function anime(){
    let j=0;
    let flag=true;
    setInterval(function(){
        if(flag==true)
        {
            if(j==3000)
            {
                flag=false;
            }
            else
            {
                j+=200;
            }
            max_width_films.scrollBy({
                left:200,
                behavior:"smooth",
            });
        }
        else
        {
            if(j==0)
            {
                flag=true;
            }
            else
            {
                j-=200;
            }
            max_width_films.scrollBy({
                left:-200,
                behavior:"smooth",
            });
        }
    },800);
};
function anime2(){
    let j=0;
    let flag=true;
    max_width_films2.scrollTo({
        left:3000,
        behavior:"auto",
    });
    setInterval(function(){
        if(flag==true)
        {
            if(j==3000)
            {
                flag=false;
            }
            else
            {
                j+=200;
            }
            max_width_films2.scrollBy({
                left:-200,
                behavior:"smooth",
            });
        }
        else
        {
            if(j==0)
            {
                flag=true;
            }
            else
            {
                j-=200;
            }
            max_width_films2.scrollBy({
                left:200,
                behavior:"smooth",
            });
        }
    },800);
};
function showTrendingFilms() {
    let cards='';
    for(let i=0;i<TendingFilms.length;i++)
    {
        cards += 
        `
        <a href="../film show page/show.html">
            <div class="card_film" onclick="filmShowTrend1(${i})">
            <div class="image">
            <img src="${TendingFilms[i].image}" alt="">
            </div>
                <div class="name">
                    <p>${TendingFilms[i].name}</p>
                </div>
            </div>  
            </a>
        `;
    }
    section_trending_films.innerHTML += cards;
    
};
function showTrendingFilms2() {
    let cards='';
    for(let i=0;i<TendingFilms2.length;i++)
    {
        cards += 
        `
        <a href="../film show page/show.html">
        <div class="card_film" onclick="filmShowTrend2(${i})">
        <div class="image">
        <img src="${TendingFilms2[i].image}" alt="">
        </div>
            <div class="name">
                <p>${TendingFilms2[i].name}</p>
            </div>
        </div>  
        </a>
        `;
    }
    section_three.innerHTML += cards;
    
};
function filmShowTrend1(parameter){
    localStorage.trend=1;
    localStorage.index=parameter;
    console.log(localStorage.index);
};
function filmShowTrend2(parameter){
    localStorage.trend=2;
    localStorage.index=parameter;
    console.log(localStorage.index);
};
function showstars() {
    let artists='';
    for(let i=0;i<stars_cards.length;i++)
    {
        artists += 
        `
        <div class="stars_cards">
            <div class="image_stars">
                <img src="${stars_cards[i].image}" alt="">
            </div>
            <div class="nameofstars">
                <p>${stars_cards[i].name}</p>
            </div>
        </div>
        `;
    }
    stars.innerHTML += artists;
};
window.onscroll = function() {
    if(window.scrollY >= 900)
    {
        toUP.classList.remove("hidden");
    }
    else
    {
        toUP.classList.add("hidden");
    }
};
toUP.onclick = function() {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
};
window.onload =function() {
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
    if(localStorage.logOut == undefined)
    {
        localStorage.logOut=0;
    }
}
logOut.onclick = function() {
    localStorage.logOut=0;
}