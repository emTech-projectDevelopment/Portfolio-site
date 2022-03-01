console.log('Script Ready')

const screenshots = './asset/images/Project Screenshots/'

const projectItems = [
    {title: "JS Calculator", projectDescription : "Calculator App using HTML, CSS and Javascript", repo: "https://github.com/emTech-projectDevelopment/Calculator-Project", live: "https://emtech-projectdevelopment.github.io/Calculator-Project/", imgSrc: "./asset/images/Project-Screenshots/CALCULATOR-JS.png", imgAlt: "JS Calculator"},
    {title: "CSS Animation", projectDescription : "Animation demonstration using HTML and CSS", repo: "https://github.com/emTech-projectDevelopment/Fantastic-Devs-Css-Demo", live: "https://emtech-projectdevelopment.github.io/Fantastic-Devs-Css-Demo/", imgSrc: "./asset/images/Project-Screenshots/CSS-DEMO.png", imgAlt: "css demo"},
    {title: "JS Quiz", projectDescription : "Generation AU | AcademyXi quiz challenge using HTML, CSS and Javascript", repo: "https://github.com/emTech-projectDevelopment/octo-lamp-five", live: "https://emtech-projectdevelopment.github.io/octo-lamp-five/", imgSrc: "./asset/images/Project-Screenshots/QUIZ.png", imgAlt: "quiz app"},
    {title: "JS Clock", projectDescription : "Clock App using HTML, CSS and Javascript", repo: "https://github.com/emTech-projectDevelopment/Clock-Project", live: "https://emtech-projectdevelopment.github.io/Clock-Project/", imgSrc: "./asset/images/Project-Screenshots/CLOCK-JS.png", imgAlt: "clock app"},
    {title: "Shopping Cart", projectDescription : "Generation AU | AcademyXi Shopping cart challenge using HTML, CSS and Javascript", repo: "https://emtech-projectdevelopment.github.io/Shopping-Cart-Challenge/", live: "https://github.com/emTech-projectDevelopment/Shopping-Cart-Challenge", imgSrc: "./asset/images/Project-Screenshots/SHOPPING-CART.png", imgAlt: "shopping cart js"},
    {title: "To Do App", projectDescription : "Generation AU | AcademyXi To Do App - Assesment - Using HTML, CSS and Javascript", repo: "https://github.com/emTech-projectDevelopment/je-final-project", live: "https://gollanj.github.io/je-final-project/", imgSrc: "./asset/images/Project-Screenshots/TO-DO_APP.png", imgAlt: "to do app"},
    {title: "Vintage Car Website", projectDescription : "Generation AU | AcademyXi Responsive web site challenge using HTML and CSS", repo: "https://github.com/emTech-projectDevelopment/ColmarWebAssessement", live: "https://emtech-projectdevelopment.github.io/ColmarWebAssessement/", imgSrc: "./asset/images/Project-Screenshots/VINTAGE-CAR-RENTAL.png", imgAlt: "vintage car website"}
];


function populateprojects(data){
    const projectsWrapper = document.querySelector('.projects-wrapper');

    for (let i=0; i<projectItems.length;i++){
       let projectItemsHtml = 
        `<div class="project-item">
                <h4 class="project-title">${data[i].title}</h4>
                <a href=${data[i].live}>
                    <img class="project-image" src=${data[i].imgSrc} alt=${data[i].imgAlt}/>
                <a/>
                <p class="project-description">${data[i].projectDescription}</p>
                <a class="project-link" href=${data[i].repo}>${data[i].title} Github Repository</a>
                <a class="project-link" href=${data[i].live}>${data[i].title} Github Live Site</a>
         </div>`;

        projectsWrapper.innerHTML +=  projectItemsHtml;
    }
}  

const contacts = [
    {name: 'Telephone', contact : '0421 224 777'},
    {name: 'Email', contact : 'emtech.projectdevelopment@gmail'},
    {name : 'LinkedIn', contact : 'https://www.linkedin.com/in/elias-matta-b28858227/'},
    {name : 'GitHub', contact : 'https://github.com/emTech-projectDevelopment'}
]

function populateContacts(data){
    const contactsWrapper = document.querySelector('.my-contacts')

    for (let i=0; i<contacts.length; i++) {
        let contactsHTML = 
        `<div class="my-contact">
            <span>${data[i].name}</span>
            <a href=${data[i].contact} target="_blank">${data[i].contact}</a>
        </div>`;
        contactsWrapper.innerHTML += contactsHTML
    }
}

populateContacts(contacts)
populateprojects(projectItems)