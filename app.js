var express = require('express');
var exec = require('child_process').execFile


var app = express()

app.use(express.static(__dirname + '/public')); // exposes index.html, per below
app.use(express.static(__dirname + '/node_modules')); // exposes index.html, per below

//app.use(express.static('/node_modules'));
app.get('/send', function (req, res) {
    var program = req.query.program
    var keys = req.query.keys

    var commands = []
    var executable = "AutoHotkey.exe"
    commands.push("send_command.ahk")
    commands.push(program)
    commands.push(keys)
    console.log(commands)
    res.send(executable + ", " + commands.toString());
    exec(executable, commands, function (err, data) {
        //console.log(err)
        //console.log(data.toString());
    });
});

app.listen(8888);