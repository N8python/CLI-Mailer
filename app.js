const yargs = require("yargs");
const nodemailer = require("nodemailer");
const argv = yargs
    .command("send", "Send an email", {
        email: {
            describe: "Your email.",
            demand: true,
            alias: "e"
        },
        password: {
            descrive: "Your password.",
            demand: true,
            alias: "p"
        },
        to: {
            describe: "The reciever of the email.",
            demand: true,
            alias: "t"
        },
        subject: {
            describe: "Subject of the email",
            alias: "s"
        },
        body: {
            describe: "The text in the email.",
            demand: true,
            alias: "b"
        }
    })
    .help()
    .argv;
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: argv.email,
        pass: argv.password
    }
});

const mailOptions = {
    from: argv.email,
    to: argv.to,
    subject: argv.subject || "",
    text: argv.body
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response)
    }
})