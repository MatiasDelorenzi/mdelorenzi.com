function sendEmail(){
    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const message = document.getElementById('formMessage').value;

    const body = "Este email fue enviado por " + name + ", su email es " + email + " e incluyó este mensaje: " + message

    Email.send({
        Host : "smtp.gmail.com",
        Username : "mdelorenzinoreply@gmail.com",
        Password : "100997mdelorenzi",
        To : 'matiasdelorenzi1997@gmail.com',
        From : "mdelorenzinoreply@gmail.com",
        Subject : "Nuevo email desde la web",
        Body : body
    }).then(
      alert('Email sent successfully')
    );

    document.getElementById('formName').value = ""
    document.getElementById('formEmail').value = ""
    document.getElementById('formMessage').value = ""

    console.log('send email function')
}