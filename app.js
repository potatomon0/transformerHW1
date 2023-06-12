// DOM MANIPULATION
// Goal: Retail Site 
// Dynamically change the Entire Site with a click of a button
// General -- Mens -- Womens -- Children
let majorContainer = {//object created for things that will replace what's on the page
    mens: {
        headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
        productImages: [//six images that goes in the orange boxes in the red container
            {
                name: 'Sneakers',//what role does the 'name' play in this case? the pic was called in product() but 'name' was not used
                pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            },
            {
                name: 'Boots',
                pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
            },
            {
                name: 'Flannels',
                pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            },
            {
                name: 'Scarves',
                pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            },
            {
                name: 'Hoodies',
                pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            },
            {
                name: 'Hats',
                pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
            },
        ],
        textDescription: 'Update your everyday wardrobe with our collection of men’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
        lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    womens: {
        headImage:"https://www.realsimple.com/thmb/QHkrGeiLf4vEV5342LyWEmv5cvI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Real-Simple-work-clothes-for-women-affordable-v1-951a9c4310ee4db59e64f2f66b0fdcfe.jpg",
        optionTags: ["top", "bottom", "shoes"],
        productImages: [
            {
                name: "t shirt",
                pic: "https://www.helikon-tex.com/media/catalog/product/cache/6/image/500x/17f82f742ffe127f42dca9de82fb58b1/T/S/TS-TSW-CO-t-shirt_damski_-_bawena-11-1000_1.jpg"
            },
            {
                name: "pants",
                pic: "https://underarmour.scene7.com/is/image/Underarmour/PS1362772-001_HF?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708"
            },
            {
                name: "shoes",
                pic: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f820e398-3050-438b-91a9-e985898def17/spark-womens-shoes-w4WdlF.png"
            }
        ]
    },
    kids: {
        headImage:"https://www.verywellfamily.com/thmb/vy3Au-X1TWDhdFNFcIJn_FfshMk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-places-to-buy-kids-clothes-5190552-v1-d45adce7b25f414e89d16a85dc7e077f.jpg",
        optionTags:["kis top","kids bottom","kids shoes"],
        productImages:[
            {
                name:"top",
                pic:"https://m.media-amazon.com/images/I/71GDa0CzKgL._AC_UX385_.jpg"
            },
            {
                name:"bottom",
                pic:"https://target.scene7.com/is/image/Target/GUEST_bacb7516-8b7a-4aa0-940b-85d773ae47ab?wid=488&hei=488&fmt=pjpeg"
            },
            {
                name:"shoes",
                pic:"https://cdn.shopify.com/s/files/1/0297/2762/1253/products/DM0967-160-PHSLH001-2000_1200x.jpg?v=1662654979"
            }
        ]
    }
}
// -----------------------
//link js variables with html class names
let mainImage = document.querySelector('.mainImg')
let option = document.querySelector('.options')//green border container for options
let miniOp = document.querySelectorAll('.choice')//Sneakers Boots Flannels etc
let productBox = document.querySelector('.productContainer')//red container for orange product boxes where products go
let pic = document.querySelector('.polaroid')//not worked on yet
let textBox = document.querySelector('.textContainer')//not worked on yet

const changeAll = () => {//functions called by onclick in html
    changeTopPic();//in this case functions can be called prior to instantiating??
    changeOptions();
    product();
}
const changeWomen = () => {
    changeWTopPic();
    changeWOptions();
    wproduct();
}
const changeKids = ()=>{
    changeKTopPic();
    changeKOptions();
    kproduct();
}
const changeTopPic = () => {//function thats called within changeAll() with onclick in html
    // createImage 
    let newimage = document.createElement('img')//create an image element in html
    newimage.setAttribute('src', majorContainer.mens.headImage)//finds the path within the object previously created which contains image links and replaced the big image on screen
    newimage.setAttribute('class', 'topPic')//give a class name to the element created and it's called 'topPic'
    // replaceWith current
    mainImage.replaceWith(newimage)//command replaceWith() replaces an element in html with the new one
}
const changeWTopPic = () =>{
    let newimage = document.createElement('img')
    newimage.setAttribute('src', majorContainer.womens.headImage)
    newimage.setAttribute('class', 'topPic')
    mainImage.replaceWith(newimage)
}
const changeKTopPic = () =>{
    let newimage = document.createElement('img')
    newimage.setAttribute('src', majorContainer.kids.headImage)
    newimage.setAttribute('class', 'topPic')
    mainImage.replaceWith(newimage)
}
const changeOptions = () => {//function thats called within changeAll() with onclick in html
    majorContainer.mens.optionTags.forEach((tagname) => {
        //forEach loops through the optionTags ("Sneakers","Boots","Flannels",...etc)
        // CREATE div element for each tagName
        let txt = document.createElement('div')
        txt.innerHTML = tagname//set the value that will replace what's previously there
        // REPLACE ELEMENT WITH NEW ELEMENT
        option.append(txt)//append value of txt (which is tagname) onto the option element which is linked to 'options' in html
        //this shows up in the green border box
    })
}
const changeWOptions=()=>{
    majorContainer.womens.optionTags.forEach((tagname) => {
        let txt = document.createElement('div')
        txt.innerHTML = tagname
        option.append(txt)
    })
}
const changeKOptions=()=>{
    majorContainer.kids.optionTags.forEach((tagname) => {
        let txt = document.createElement('div')
        txt.innerHTML = tagname
        option.append(txt)
})
}
const product = () => {
    majorContainer.mens.productImages.forEach((obj) => {//loop through each object in majorContainer.mens.productImages
        //obj now represent the onject containing the name and pic properties
        let shopBox = document.createElement('img')//create an image element in html called shopBox
        //elements created at this point is not yet appointed a location in the html file
        shopBox.setAttribute('src', obj.pic)//give the new image a src from obj.pic which is also majorContainer.mens.productImages.pic
        //what was 'majorContainer.mens.productImages.name' for?
        shopBox.setAttribute('class', 'product')
        productBox.append(shopBox)//append (or replace?) the new images in productBox which was productContainer
    })
}
const wproduct = () => {
    majorContainer.womens.productImages.forEach((obj) => {
        let shopBox = document.createElement('img')
        shopBox.setAttribute('src', obj.pic)
        shopBox.setAttribute('class','product')
        productBox.append(shopBox)
    })
}
const kproduct =()=>{
    majorContainer.kids.productImages.forEach((obj) => {
        let shopBox = document.createElement('img')
        shopBox.setAttribute('src', obj.pic)
        shopBox.setAttribute('class','product')
        productBox.append(shopBox)
    })
}
//create an object for all sections that will be placed on the screen
//use nested object for ex:
//let majorContainer = {
    // mens: { firstPic:'',
            // textIntro:[],
            // productImages:[{title:'',pic:''},{title:'',          
            //                  pic:''},...]}
    // womens: {},
    // kids: {}
    // }
//use loCation = document.selectQuery('.className') to locate the class/id in html
//or use location = document.selectQuery('#idName') to select all items with this identification
//create a container function for onclick (which will happen in html) that will invoke the functions needed to replace elements
//create functions that will be nested within container function
//in those functions create elements with: let newElem = document.createElement('img')
    //the elements can be other html elements
//use commant: newElem.setAttribute('src','className')
//use command: loCation.append(newElem) or loCation.replace(newElem)
//to change elements on display
//if more than one, use forEach to loop throug them