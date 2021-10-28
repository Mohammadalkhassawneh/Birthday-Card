const person = [
    {
        name : 'sahar',
        img  : 'https://randomuser.me/api/portraits/women/15.jpg',
        age  : 29,
        dop  : '1 june 1992'
    },
    {
         name : 'mohammad',
         img  : 'https://randomuser.me/api/portraits/men/16.jpg',
         age  : 24,
         dop  : '8 nov 1997'

    },
    {
        name : 'ahmad',
        img  : 'https://randomuser.me/api/portraits/men/12.jpg',
        age  : 24,
        dop  : '14 oct 1996'
    },
    {
        name : 'dania',
        img  : 'https://randomuser.me/api/portraits/women/14.jpg',
        age  : 22,
        dop  : '17 oct 1999'
    },
    {
    
        name : 'ali',
        img  : 'https://randomuser.me/api/portraits/men/5.jpg',
        age  : 22,
        dop  : '7 feb 1999'
    },
    {
        name : 'majed',
        img  : 'https://randomuser.me/api/portraits/men/45.jpg',
        age  : 2,
        dop  : '7 feb 2019'
    }

   
];
var cardsContainer = document.querySelector ('.cards-container')
for (let i = 0 ; i<person.length ; i++ ){
    var divElement = document.createElement('div');
    divElement.setAttribute('class','card');
    cardsContainer.appendChild(divElement);
    //img div
    var img = document.createElement('img')
    divElement.appendChild(img)
    img.src = person[i].img;
    //textdiv
    var divText = document.createElement ('div');
    divElement.appendChild(divText);
    var paragraph = document.createElement ('p');
    divText.appendChild(paragraph);
     paragraph.innerHTML = person[i].name + person[i].age ;
    
   

}

