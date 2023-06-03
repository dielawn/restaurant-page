const contentDiv = document.getElementById('content')

const businessName = 'Hot Dougs'
const description = "Welcome to Hot Dougs, the place where hot dogs go from ordinary to extraordinary! Our restaurant is a haven for adventurous food enthusiasts who believe that hot dogs should never be boring. "
const hours = 'Sunday: 11am - 5pm, Monday: 11am - 8pm, Tuesday: 11am - 8pm, Wednesday: 11am - 8pm, Thursday: 11am - 8pm, Friday: 11am - 8pm, Saturday: 11am - 10pm'
const contactInfo = {
    owner: 'Doug',
    phone: '555-5555',
    address: {
        street: '123 Downtown St.',
        city: 'Dudesville',
        state: 'Montana',
        stateAbrv: 'MT',
        zip: '59030'
    },
    email: 'doug@hotdougs.com'    
}
const images = [
    
    {
        name:'doug-grillin.jpg',
        src: 'images/',
        link:'https://www.pexels.com/photo/gray-haired-man-grilling-hot-dogs-8522762/#',
        alt:'Gray haired man grilling hotdogs',
        credit: 'RDNE Stock project',
        type: 'landscape',
    },
    {
        name:'hotdog-pyramid.jpg',
        src: 'images/',
        link: 'https://www.pexels.com/photo/beef-close-up-delicious-diet-357576/',
        alt:'Hotdogs stacked on a platter',
        credit: 'Pixabay',
        type: 'landscape',
    },
    {
        name:'hotdogs-veggies.jpg',
        src: 'images/',
        link: 'https://www.pexels.com/photo/hot-dogs-and-vegetables-4113507/',
        alt:'Hotdogs on plates with cherry tomatoes and cellery',
        credit: 'alleksana',
        type: 'portrait',
    },
    {
        name:'holding-hotdogs.jpg',
        src: 'images/',
        link: 'https://www.pexels.com/photo/person-holding-hotdog-sandwiches-12123654/',
        alt:'Each hand holding a decorated hotdog',
        credit: 'Kamila Bairam',
        type: 'portrait',
    },
    {
        name:'kids-hotdogs.jpg',
        src: 'images/',
        link: 'https://www.pexels.com/photo/a-young-girl-and-boy-smiling-while-holding-hot-dog-sandwiches-8522766/',
        alt:'A young girl and boy smiling while holding hotdogs',
        credit: 'RDNE Stock project',
        type: 'landscape',
    },
    {
        name:'condiments.jpg',
        src: 'images/',
        link: 'https://www.pexels.com/photo/sauces-for-hot-dogs-12157049/',
        alt:'Condiments on a tray',
        credit: 'Mayra Abeki',
        type: 'portrait',
    },
    {
        name:'hotdogs-coke.jpg',
        src: 'images/',
        link: 'https://www.pexels.com/photo/hot-dogs-with-soda-4113464/',
        alt:'Hotdogs on a plate with a soda near by',
        credit: 'alleksana',
        type: 'portrait',
    },
    {
        name:'grillin-dogs.jpg',
        src: 'images/',
        link: 'https://www.pexels.com/photo/two-sausages-on-charcoal-grill-1275692/',
        alt:'Two hotdogs on a charcoal grill',
        credit: 'Mateusz Dach',
        type: 'landscape',
    },
    {
        name:'hotdogs-stacked.jpg',
        src: 'images/',
        link: 'https://www.pexels.com/photo/hotdog-sandwich-on-white-background-4518645/',
        alt:'Three hotdogs stacked with toppings',
        credit: 'Polina Tankilevitch',
        type: 'portrait',
    },
    {
        name:'hotdogs-.disheveled.jpg',
        src: 'images/',
        link: 'https://www.pexels.com/photo/close-up-photo-of-hotdog-sandwiches-4518653/',
        alt:'Three hotdogs with toppings and white background',
        credit: 'Polina Tankilevitch',
        type: 'portrait',
    },
]

const menu = [
    {
        name: 'Apple Dog',
        price: '6.99',
        description: 'We know you already like hotdogs. Do you like apple and peanut butter? Us too! Try our Apple Dog!',
        type: 'entre',
        id: 'appleDog',
    },
    {
        name: 'Cream Cheese Dog',
        price: '7.99',
        description: 'This dog is the best! A top quality hoagie with cream cheese, and carmalized onion',
        type: 'entre',
        id: 'creamCheeseDog',
    },
    {
        name: 'General Dog',
        price: '4.99',
        description: 'Hotdog on a bun',
        type: 'entre',
        id: 'generalDog',
    },
    {
        name: 'Naked Dog',
        price: '3.99',
        description: 'Hotdog without a bun',
        type: 'entre',    
        id: 'nakedDog',
    },
    {
        name: 'Chips',
        price: '.99',
        description: 'Pickle Chips',
        type: 'side', 
        id: 'chips'   
    },
    {
        name: 'Soda',
        price: '.99',
        description: 'American sugar water',
        type: 'drink',
        id: 'soda'
    },
    {
        name: 'Beer',
        price: '1.99',
        description: 'Taste the mountains with your dog',
        type: 'drink',
        id: 'beer'
    },
]


const createDiv = (parent, divClass, divId, divContent) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add(divClass)
    newDiv.id = divId
    newDiv.innerHTML = divContent
    parent.appendChild(newDiv)
}

const createElement = (parent, element, elementClass, elementId, elementContent) => {
    const newElement = document.createElement(element)
    newElement.classList.add(elementClass)
    newElement.id = elementId
    newElement.innerText = elementContent
    parent.appendChild(newElement)
}


//Top of the page
createDiv(contentDiv, 'header', 'header', businessName)
createDiv(contentDiv, 'discription', 'discription', description)

//hours
const handleHours = () => {
    //line break hours at each comma
    let formatedHours = hours.replace(/,/g, "<br>")
    createDiv(contentDiv, 'hours', 'hours', formatedHours)
}
handleHours()

//contact info
createDiv(contentDiv, 'contactDiv', 'contactDiv', '');
const contactDiv = document.getElementById('contactDiv')
createDiv(contactDiv, 'contactInfo', 'ownerInfo', contactInfo.owner)
createDiv(contactDiv, 'contactInfo', 'phoneInfo', contactInfo.phone)
createDiv(contactDiv, 'contactInfo', 'addressInfo', contactInfo.address.street)
createDiv(contactDiv, 'contactInfo', 'addressInfo', contactInfo.address.city + ' ' + contactInfo.address.stateAbrv)
createDiv(contactDiv, 'contactInfo', 'emailInfo', contactInfo.email)

//menu
createDiv(contentDiv, 'menuDiv', 'menuDiv', '')
const menuDiv = document.getElementById('menuDiv')

//loop menu
const displayMenu = () => {
    for (let i = 0; i < menu.length; i++) {
      let header = menu[i].name;
      let itemId = menu[i].id
      let itemDesc = menu[i].description
      let itemPrice = menu[i].price
      if (menu[i].type === 'entre') {
        createDiv(menuDiv, 'entreDiv', 'entreDiv', '' )
        const entreDiv = document.getElementById('entreDiv')
        createElement(entreDiv, 'h1', 'menuHeader', itemId, header);
        createElement(entreDiv, 'p', 'menuDesc', itemId + 'Desc', itemDesc)  
        createElement(entreDiv, 'h4', 'menuPrice', itemId + 'Price', '$' + itemPrice )      
      } else if (menu[i].type === 'side') {
        const sideeDiv = document.getElementById('entreDiv')
        createElement(sideeDiv, 'h1', 'menuHeader', itemId, header);
        createElement(sideeDiv, 'p', 'menuDesc', itemId + 'Desc', itemDesc)
        createElement(sideeDiv, 'h4', 'menuPrice', itemId + 'Price', '$' + itemPrice )  
      } else if (menu[i].type === 'drink') {
        const drinkDiv = document.getElementById('entreDiv')
        createElement(drinkDiv, 'h1', 'menuHeader', itemId, header);
        createElement(drinkDiv, 'p', 'menuDesc', itemId + 'Desc', itemDesc)
        createElement(drinkDiv, 'h4', 'menuPrice', itemId + 'Price', '$' + itemPrice )  
      }
    }
  };
  


displayMenu()


