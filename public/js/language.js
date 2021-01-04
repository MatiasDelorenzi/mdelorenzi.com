const engFlag = "/public/images/eng.png"
const esFlag = "/public/images/es.png"

const section1Title = document.getElementById('section1Title');
const section1Text = document.getElementById('section1Text');
const section1Contact = document.getElementById('section1Contact');
const navbar1 = document.getElementById('navbar1');
const navbar2 = document.getElementById('navbar2');
const navbar3 = document.getElementById('navbar3');
const navbar4 = document.getElementById('navbar4');
const navbar5 = document.getElementById('navbar5');
const aboutMeTitle = document.getElementById('aboutMeTitle');
const projectsTitle = document.getElementById('projectsTitle');
const showMoreBtn = document.getElementById('showMore');
const contactTitle = document.getElementById('contactTitle');
const formButton = document.getElementById('formButton');
const formName = document.getElementById('formName');
const formMessage = document.getElementById('formMessage');
const contactSubtitle = document.getElementById('contactTimeResponse');


//Language translations

var language = {
    eng:{
        s1title: "Matias in English",
        s1text: "This is my text in english",
        s1contact: "Contact",
        navbar1: "Home",
        navbar2: "About Me",
        navbar3: "Projects",
        navbar4: "Contact Me",
        aboutMeTitle: "About Me",
        projectsTitle: "My Projects",
        showMoreBtn: "Show more",
        contactTitle: "How can I help?",
        contactSubtitle: "Do you have any question or are you interested in working with me? Just fill the form below and I will respond in under 24 hours.",
        formButton: "SEND",
        formName: 'Your name',
        formMessage: 'Type your message here...'

    },
    es: {
        s1title: "Matías in Spanish",
        s1text: "este es mi texto en español",
        s1contact: "Contáctame",
        navbar1: "Inicio",
        navbar2: "Sobre Mi",
        navbar3: "Proyectos",
        navbar4: "Contacto",
        aboutMeTitle: "Sobre Mi",
        projectsTitle: "Mis Proyectos",
        showMoreBtn: "Mostrar Más",
        contactTitle: "¿Cómo puedo ayudarle?",
        contactSubtitle: "¿Tiene alguna pregunta o está interesado en trabajar conmigo? Por favor, complete el formulario a continuación y responderé en las próximas 24 horas.",
        formButton: "ENVIAR",
        formName: 'Nombre',
        formMessage: 'Escriba su mensaje aquí...'
    }
}


//Define language

if (window.location.hash){
    if (window.location.hash === "#eng"){
        section1Title.textContent = language.eng.s1title;
        section1Text.textContent = language.eng.s1text;
        section1Contact.textContent = language.eng.s1contact;
        navbar1.textContent = language.eng.navbar1;
        navbar2.textContent = language.eng.navbar2;
        navbar3.textContent = language.eng.navbar3;
        navbar4.textContent = language.eng.navbar4;
        aboutMeTitle.textContent = language.eng.aboutMeTitle;
        projectsTitle.textContent = language.eng.projectsTitle;
        showMoreBtn.textContent = language.eng.showMoreBtn;
        contactTitle.textContent = language.eng.contactTitle;
        formButton.value = language.eng.formButton;
        formName.placeholder = language.eng.formName,
        formMessage.placeholder = language.eng.formMessage;
        contactSubtitle.textContent = language.eng.contactSubtitle;
    }
}

// click function

function changeLanguage(){
    if (window.location.hash === "" || window.location.hash ==="#es"){
        window.location.href = '#eng';
        window.location.reload()
            
    } else if (window.location.hash === "#eng"){
        window.location.href = '#es';
        window.location.reload()       
    }
}

        