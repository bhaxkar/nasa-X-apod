const form = document.querySelector("form");
const name = document.getElementById("name");
const mail = document.getElementById("email");
const phnumber = document.getElementById('phnumber');
const message = document.getElementById("message");
function sendEmail(){
    const info = `Name : ${name.value} <br> Email : ${mail.value} <br> Phone Number : ${phnumber.value} <br> Message : ${message.value}`;

    Email.send({
        SecureToken : "5b5b8d90-55fa-496d-96fd-dc328980ec56",
        To : 'jhabhaskar950@gmail.com',
        From : 'hlobhaskarjha02@gmail.com',
        Subject : "New Contact Form Enquiry",
        Body : info
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
            });
        }
    }
  );
}
form.addEventListener("submit", (e) => {
    e.preventDefault();  
    sendEmail();
    form.reset();
    return false;
});


