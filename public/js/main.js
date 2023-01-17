// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


let content = document.getElementsByTagName("div")[0].children;


for (let i = 0; i < content.length; i++){
    content[i].addEventListener('dblclick',()=>{
        content[i].innerText =  content[i].innerText.toUpperCase();
    })
}

for (let i = 0; i < content.length; i++){
    content[i].addEventListener('click',()=>{
        console.log(content[i]);
    })
}



let proprietes = ["border: 1px solid gold;","background-color: blue;","background-color: red;","border: 5px dotted gold;"];

document.getElementsByTagName("input")[0].addEventListener('click',()=>{
    let propHasard = Math.floor(Math.random()*proprietes.length);

    for(let i = 0; i < content.length; i++){
        content[i].classList = proprietes[propHasard];
    }
})