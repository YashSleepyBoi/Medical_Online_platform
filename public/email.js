
console.log('WOKR???')




function sendEmail(){
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "yash137yadav@gmail.com",
                Password : "BE31909F5385E01C100F716D1C6A1F3E6567",
                To : 'yash137yadav@gmail.com',
                From : "yash137yadav@gmail.com",
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
            message => alert(message)
            );}