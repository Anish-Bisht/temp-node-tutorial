const http = require('http')

const server = http.createServer((req, res) => {
   // console.log(req);
    if (req.url === "/") {
       // res.write("Helo we are alomost there")
        res.end("Helo we are alomost there")

    } else if (req.url === "/about") {
      //  res.write("It's about page")
        res.end("It's about page")
    }

    res.end(`
<h1>Oops</h1>
<p>Something went wrong</p>
`)
})

server.listen(5001)