const http = require('http');

http.createServer((request, response) => {
    let body  = [];
    request.on('error', (err) => {
        console.log(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        console.log(body);
        body = Buffer.concat(body).toString();
        console.log('body:', body);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(
`
<html lang="en">
<head>
    <style>
        body div #myId{
            width: 100px;
            background-color: #ddd;
        }
        div{
            background: red;
        }
    </style>
</head>
<body>
    <div>
        <main>213213123</main>
        <img id="myId"></img>
        <img />
    </div>
</body>
</html>`);
    });
}).listen(8088);

console.log('server started');