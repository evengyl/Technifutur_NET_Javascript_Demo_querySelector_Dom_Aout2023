const myTitle = document.querySelector('h1#title');
myTitle.innerText = "Hello World!!!";
myTitle.style = "color : red";
console.log(myTitle.attributes);

const myLis = document.querySelectorAll('li.elem');

for (let myLi of myLis) {
    myLi.innerHTML = "Toto";
}

const lis = document.querySelectorAll('li');

for (let li of lis) {
    li.innerText = "Starfield";
    li.setAttribute('style', 'color:chartreuse');
}

// <h2></h2>
const subtitle = document.createElement('h2');


// <h2>Nikita!!!</h2>
subtitle.innerText = "Nikita!!!";

document.body.appendChild(subtitle);

const newLi = document.createElement('li');
newLi.innerText = "4";

const li3 = document.querySelector('li#elem3');

const myList = document.querySelector('ul#myList');

myList.insertBefore(newLi, myList.children[2]);

// myList.innerHTML += "<li>Coucou</li>"; a ne pas faire


//querySelector ne récup que le premier élément rencontrer dans le dom
const paragraphe1 = document.querySelector("p.paragraph_styled")
console.log(paragraphe1)
const ulList = document.querySelector("ul#myList")
console.log(ulList)

const paragrapheAll = document.querySelectorAll("p.paragraph_styled")
console.log(paragrapheAll)

for (let p of paragrapheAll)
{
    console.log(p.classList)

    p.classList.add("tutu_super_class")
    p.classList.remove("bs5")

    if(p.classList.contains("p10"))
    {
        p.classList.remove("p10")
        p.classList.add("p30")
    }
}

//gestion du boutton mamy
const zoomMamy = document.querySelector("button#zoomMamy")
zoomMamy.addEventListener("click", (e) => {
    e.preventDefault()

    for (let p of paragrapheAll)
    {
        if(p.classList.contains("fs2")){
            p.classList.remove("fs2")
            console.log(e)
            e.target.innerText = "Zoom Mamy"
        }
        else{
            p.classList.add("fs2")
            e.target.innerText = "DeZoom Mamy"
        }
    }
    

})
