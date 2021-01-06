const engFlag = "/public/images/eng.png"
const esFlag = "/public/images/es.png"

const section1Title = document.getElementById('section1Title');
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
const socialTitle = document.getElementById('socialTitle');
const resumeDownload = document.getElementById('resumeDownload');
const foot = document.getElementById('foot');
//About me paragraphs
const aboutMePar1 = document.getElementById('aboutMePar1');
const aboutMePar2 = document.getElementById('aboutMePar2');
const aboutMePar3 = document.getElementById('aboutMePar3');



//Language translations

var language = {
    eng:{
        s1title: "Hi! I'm Matias. I design & build software.",
        s1contact: "Learn more about what I do",
        navbar1: "Home",
        navbar2: "About",
        navbar3: "Projects",
        navbar4: "Contact",
        aboutMeTitle: "About me",
        projectsTitle: "My Projects",
        showMoreBtn: "More",
        contactTitle: "How can I help?",
        contactSubtitle: "Do you have any question or are you interested in working with me? Just fill the form below and I will respond in under 24 hours.",
        formButton: "SEND",
        formName: 'Your name',
        formMessage: 'Type your message here...',
        socialTitle: 'More about me',
        foot: ' Copyrigth 2021 - Matías Delorenzi - Web Designer',
        //About me paragraphs
        aboutMePar1: "Fascinated by the technological improvements of the last decades, I decided to study a degree in Information Systems Engineering at National Technologic University (UTN - Argentina). I am currently in my fourth year looking forward to expand my horizons and make people's lives easier through software developement.",
        aboutMePar2: "I see myself as a productive team worker, constantly learning from my co-workers and colleagues in order to achieve our goals.",
        aboutMePar3: "Working with a software developer doesen't just mean having an extra pair of hands, but a fresh perpective to find innovative solutions to today's world problems."

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
        formMessage: 'Escriba su mensaje aquí...',
        socialTitle: 'Conocer más',

    }
}


//Define language

if (window.location.hash){
    console.log('entro aca')
    if (window.location.hash === "#eng"){
        section1Title.textContent = language.eng.s1title;
        
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
        socialTitle.textContent = language.eng.socialTitle;
        resumeDownload.href = "/public/files/resume.pdf";
        resumeDownload.download = "Delorenzi Matias - Resume";
        foot.textContent = language.eng.foot;
        aboutMePar1.textContent = language.eng.aboutMePar1;
        aboutMePar2.textContent = language.eng.aboutMePar2;
        aboutMePar3.textContent = language.eng.aboutMePar3;
    }
}

// click function

function changeLanguage(){
    if (navbar1.textContent === "Inicio"){
        window.location.href = "#es"
    }else if(navbar1.textContent === "Home"){
        window.location.href = "#eng"
    }

    if (window.location.hash === "" || window.location.hash ==="#es"){
        window.location.href = '#eng';
        window.location.reload()
            
    } else if (window.location.hash === "#eng"){
        window.location.href = '#es';
        window.location.reload()       
    }
}

        