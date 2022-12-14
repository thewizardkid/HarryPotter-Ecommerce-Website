const express = require("express");
const bodyParser = require("body-parser")
const request = require("request");
const https = require("https");
const alert = require("alert")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/ecom.html");

})

app.post("/", function (req, res) {
    var newsemail = req.body.nemail;

    const data = {
        members: [
            {
                email_address: newsemail,
                status: "subscribed",

            }
        ]
    };
    const jsonData = JSON.stringify(data)
    const url = "https://us21.api.mailchimp.com/3.0/lists/39ca9786c9"

    const options = {
        method: "POST",
        auth: "harshit:4c46bcf75859529dc5de283182d179cc-us21"
    }

    const request = https.request(url, options, function (response) {
        if (response.statusCode === 200) {
            alert("succesfully signedup for newsletter")
        }
        else {
            alert("Sorry there was a problem")
        }

        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port 3000")
})