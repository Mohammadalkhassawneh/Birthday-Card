const person  = [
    {
        name : 'Sahar',
        img: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
        age: 29,
        dop: '13 jan 1992'
    },
    {
        name : 'Reem',
        img: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
        age: 27,
        dop: '19 Oct 1994'
    },{
        name : 'Dania',
        img: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
        age: 22,
        dop: '14 Oct 1997'
    },{
        name : 'Ghoson',
        img: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
        age: 21,
        dop: '14 Oct 1998'
    },{
        name : 'Hazem',
        img: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
        age: 23,
        dop: '14 Oct 1998'
    },{
        name : 'Ahamad',
        img: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
        age: 23,
        dop: '16 Oct 1998'
    }
];

var date = new Date()
var month = date.toLocaleString('en-US', { month: 'short' });
var day = date.getDate();
var today = day + ' '+ month;
var  counter = 0;

// var divElement = document.createElement('div');
 var cardsContainer = document.querySelector('.cards-container');

for(let i = 0 ; i<person.length;i++ ){
    if(person[i].dop.includes(today)){

     var divElement = document.createElement('div');
     //divElement.id=i;
     divElement.setAttribute('class','card');
     cardsContainer.appendChild(divElement);
     //img 
     var img = document.createElement('img');
     divElement.appendChild(img);
     img.src = person[i].img;
     //div text
     var textDiv = document.createElement('div');
     divElement.appendChild(textDiv);
     var pargraph = document.createElement('p');
     var agenumber = document.createElement('span');
     pargraph.appendChild(agenumber);
     agenumber.innerHTML = (person[i].age).toString();
    console.log(agenumber);
    
     textDiv.appendChild(pargraph);
    
     pargraph.innerHTML = person[i].name  + '<br>' + person[i].age + ' Years';

     counter++;
    }

}

var header = document.querySelector('#header');
header.innerHTML = `${counter} Birthdays Today` 
function red() {
   document.body.style.backgroundColor = "red";
}
function yellow () {
    document.body.style.backgroundColor = "yellow";
}
function black () {
    document.body.style.backgroundColor = "black";
}
function clearcontent() {
    document.querySelector('.cards-container').innerHTML = "";
}
