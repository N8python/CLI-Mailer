CLI-Mailer allows you to send emails in bash, with a single line of input.
# Config
First download this github respository and place it inside a folder. Then, to configure the modules this app uses, enter (install npm if you don't have it yet):
```
$ npm install yargs
$ npm install nodemailer
```
And just like that, CLI-Mailer is set up!
# Usage
To use CLI-Mailer, simply fill out the following command template, the enter it:
```
$ node app.js send -e="youremail" -p="yourpassword" -t="recepientsemail" -s="subject" -b="body"
```
Then, voila, your email will be sent.
Enjoy!
