var cw, ch;
var s;

var R_f, G_f, B_f;

function setup() 
{
    cw = windowWidth;
    ch = windowHeight;
    createCanvas(cw, ch);
}

function draw() 
{
    translate(width/2, height/2);
    rotate(mouseX / 500);

    R_f = map(mouseX, 0, windowWidth, 50, 255);
    G_f = map(mouseY, 0, windowHeight, 50, 255);
    B_f = map(mouseX, 0, windowWidth, 255, 50);

    strokeWeight(windowWidth/200);

    fill(R_f, G_f, B_f);
    stroke(255, 255, 255);

    // columns
    for(var i = -50; i < 50; i++)
    {
        for(var j = -50; j < 50; j++)
        {
            polygon((i*30) * (windowWidth/200), (j*17) * (windowWidth/200), 10 * (windowWidth/200), 6);
        }
    }

    // rows
    for(var i = -50; i < 50; i++)
    {
        for(var j = -50; j < 50; j++)
        {
            polygon(((i*30) + 15) * (windowWidth/200), ((j*17) + 8.5) * (windowWidth/200), 10 * (windowWidth/200), 6);
        }
    }
}

// create hexagon
function polygon(x, y, radius, npoints) 
{
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) 
    {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}

var eventListeners = [ "click", "hover" ];

var sectionOne = document.getElementById("sectionOne");
var sectionTwo = document.getElementById("sectionTwo");
var sectionThree = document.getElementById("sectionThree");
var sectionFour = document.getElementById("sectionFour");
var sectionFive = document.getElementById("sectionFive");
var sectionSix = document.getElementById("sectionSix");

var navItem1 = document.getElementById("nav_item_1");
var navItem2 = document.getElementById("nav_item_2");
var navItem3 = document.getElementById("nav_item_3");
var navItem4 = document.getElementById("nav_item_4");
var navItem5 = document.getElementById("nav_item_5");
var navItem6 = document.getElementById("nav_item_6");

var navText1 = document.getElementById("nav_text_one");
var navText2 = document.getElementById("nav_text_two");
var navText3 = document.getElementById("nav_text_three");
var navText4 = document.getElementById("nav_text_four");
var navText5 = document.getElementById("nav_text_five");
var navText6 = document.getElementById("nav_text_six");

var nav = document.getElementById("nav");

var footer = document.getElementById("footer");

$(sectionOne).show();
$(sectionTwo).hide();
$(sectionThree).hide();
$(sectionFour).hide();
$(sectionFive).hide();
$(sectionSix).hide();

navItem1.style.fill = "rgba(255,255,200,0.5)";

// DESKTOP

navItem1.addEventListener("mouseenter", function(event)
{
    $(sectionOne).delay(200).fadeIn(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(255,255,200,0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navItem2.addEventListener("mouseenter", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).delay(200).fadeIn(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(255,255,200,0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navItem3.addEventListener("mouseenter", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).delay(200).fadeIn(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(255,255,200,0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navItem4.addEventListener("mouseenter", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).delay(200).fadeIn(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(255,255,200,0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navItem5.addEventListener("mouseenter", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).delay(200).fadeIn(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(255,255,200,0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navItem6.addEventListener("mouseenter", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).delay(200).fadeIn(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(255,255,200,0.5)";
});

// TEXTEXTEXTEXTEXT// TEXTEXTEXTEXTEXT// TEXTEXTEXTEXTEXT
// TEXTEXTEXTEXTEXT// TEXTEXTEXTEXTEXT// TEXTEXTEXTEXTEXT
// TEXTEXTEXTEXTEXT// TEXTEXTEXTEXTEXT// TEXTEXTEXTEXTEXT
// TEXTEXTEXTEXTEXT// TEXTEXTEXTEXTEXT// TEXTEXTEXTEXTEXT
// TEXTEXTEXTEXTEXT// TEXTEXTEXTEXTEXT// TEXTEXTEXTEXTEXT
// TEXTEXTEXTEXTEXT// TEXTEXTEXTEXTEXT// TEXTEXTEXTEXTEXT

navText1.addEventListener("mouseenter", function(event)
{
    $(sectionOne).delay(200).fadeIn(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(255,255,200,0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navText2.addEventListener("mouseenter", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).delay(200).fadeIn(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(255,255,200,0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navText3.addEventListener("mouseenter", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).delay(200).fadeIn(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(255,255,200,0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navText4.addEventListener("mouseenter", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).delay(200).fadeIn(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(255,255,200,0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navText5.addEventListener("mouseenter", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).delay(200).fadeIn(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(255,255,200,0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navText6.addEventListener("mouseenter", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).delay(200).fadeIn(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(255,255,200,0.5)";
});

navItem1.addEventListener("mouseleave", function(event)
{
    navItem1.style.fill = "rgba(255,255,200,0.5)";
});

navItem2.addEventListener("mouseleave", function(event)
{
    navItem2.style.fill = "rgba(255,255,200,0.5)";
});

navItem3.addEventListener("mouseleave", function(event)
{
    navItem3.style.fill = "rgba(255,255,200,0.5)";
});

navItem4.addEventListener("mouseleave", function(event)
{
    navItem4.style.fill = "rgba(255,255,200,0.5)";
});

navItem5.addEventListener("mouseleave", function(event)
{
    navItem5.style.fill = "rgba(255,255,200,0.5)";
});

navItem6.addEventListener("mouseleave", function(event)
{
    navItem6.style.fill = "rgba(255,255,200,0.5)";
});

// MOBILE// MOBILE// MOBILE// MOBILE// MOBILE// MOBILE
// MOBILE// MOBILE// MOBILE// MOBILE// MOBILE// MOBILE
// MOBILE// MOBILE// MOBILE// MOBILE// MOBILE// MOBILE

navItem1.addEventListener("click", function(event)
{
    $(sectionOne).delay(200).fadeIn(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(255,255,200,0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navItem2.addEventListener("click", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).delay(200).fadeIn(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(255,255,200,0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navItem3.addEventListener("click", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).delay(200).fadeIn(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(255,255,200,0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navItem4.addEventListener("click", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).delay(200).fadeIn(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(255,255,200,0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navItem5.addEventListener("click", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).delay(200).fadeIn(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(255,255,200,0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navItem6.addEventListener("click", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).delay(200).fadeIn(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(255,255,200,0.5)";
});

// TEXT// TEXT// TEXT// TEXT// TEXT// TEXT// TEXT// TEXT
// TEXT// TEXT// TEXT// TEXT// TEXT// TEXT// TEXT// TEXT
// TEXT// TEXT// TEXT// TEXT// TEXT// TEXT// TEXT// TEXT

navText1.addEventListener("click", function(event)
{
    $(sectionOne).delay(200).fadeIn(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(255,255,200,0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navText2.addEventListener("click", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).delay(200).fadeIn(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(255,255,200,0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navText3.addEventListener("click", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).delay(200).fadeIn(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(255,255,200,0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navText4.addEventListener("click", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).delay(200).fadeIn(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(255,255,200,0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navText5.addEventListener("click", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).delay(200).fadeIn(200);
    $(sectionSix).fadeOut(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(255,255,200,0.5)";
    navItem6.style.fill = "rgba(245, 241, 101, 0.5)";
});

navText6.addEventListener("click", function(event)
{
    $(sectionOne).fadeOut(200);
    $(sectionTwo).fadeOut(200);
    $(sectionThree).fadeOut(200);
    $(sectionFour).fadeOut(200);
    $(sectionFive).fadeOut(200);
    $(sectionSix).delay(200).fadeIn(200);
    $(footer).fadeOut(200).delay(200).fadeIn(200);
    navItem1.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem2.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem3.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem4.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem5.style.fill = "rgba(245, 241, 101, 0.5)";
    navItem6.style.fill = "rgba(255,255,200,0.5)";
});

nav.addEventListener("mouseenter", function(event)
{
        navItem2.classList.remove("navAnimation");
        navItem3.classList.remove("navAnimation");
        navItem4.classList.remove("navAnimation");
        navItem5.classList.remove("navAnimation");
        navItem6.classList.remove("navAnimation");
});