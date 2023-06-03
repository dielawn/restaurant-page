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
        zip: '59030'
    },
    email: 'doug@hotdougs.com'    
}

const createDiv = (parent, divClass, divId, divContent) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add(divClass)
    newDiv.id = divId
    newDiv.innerHTML = divContent
    parent.appendChild(newDiv)
}



createDiv(contentDiv, 'header', 'header', businessName)
createDiv(contentDiv, 'discription', 'discription', description)

const handleHours = () => {
    //line break hours at each comma
    createDiv(contentDiv, 'hours', 'hours', hours)
}
createDiv(contentDiv, 'hours', 'hours', hours)



createDiv(contentDiv, 'contactDiv', 'contactDiv', '');
const contactDiv = document.getElementById('contactDiv')

const handleContactInfo = () => {
    createDiv(contactDiv, 'contactInfo', 'ownerInfo', contactInfo.owner)
    createDiv(contactDiv, 'contactInfo', 'phoneInfo', contactInfo.phone)
    createDiv(contactDiv, 'contactInfo', 'addressInfo', contactInfo.address.street)
    createDiv(contactDiv, 'contactInfo', 'addressInfo', contactInfo.address.city + ' ' + contactInfo.address.state)
    createDiv(contactDiv, 'contactInfo', 'emailInfo', contactInfo.email)
}

handleContactInfo(); 




