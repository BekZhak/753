var http = require("http")
var fs = require("fs")

function staticServerFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;
    
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(500, {"Content-Type":"text/plain"})
            res.end("500 - Internal error")
        }
        else {
            res.writeHead(responseCode, {"Content-Type":contentType});
            res.end(data)
        }

    })

    
  
}

http.createServer(function(req, res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase()
    switch(path) {
        
        case "":
            staticServerFile(res, "/index.html", "text/html")
            break;

        case "/img/welcome.jpg":
            staticServerFile(res, "/img/welcome.jpg", "image/jpeg")
            break;

        case "/about":
            staticServerFile(res, "/about.html", "text/html")
            break;

        case "/img/about.jpg":
            staticServerFile(res, "/img/about.jpg", "image/jpeg")
            break;

        case "/style.css":
            staticServerFile(res, "/style.css", "text/css")
            break;

        case "/video/students/memes.mp4":
            staticServerFile(res, "/video/students/memes.mp4", "video/mp4")
            break;

        case "/img/cry.jpg":
            staticServerFile(res, "/img/cry.jpg", "image/jpeg")
            break;
    
        default:
            staticServerFile(res, "/error.html", "text/html", 404)
            break;
            
    }
}).listen(3000)