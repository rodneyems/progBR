const http = require("http")
const url = require("url")
const fs = require("fs")

function handleFile(req, res, myCallback){
    let path = "." + url.parse(req.url).pathname
    if (path == "." || path == "./"){
        path = "./index.html"
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            if(!myCallback(req, res)){
                res.writeHead(404, {"Content-Type":"text/html;charset=utf-8"})
                res.end("PAGINA NÃO ENCONTRADA")
            }
        }else{
            res.writeHead(200, {"Content-Type":"text/html"})
            res.write(data)
            res.end()
        }
    })

}

function handleRequest(req, res){
    let path = "." + url.parse(req.url).pathname


    if(path == "./teste"){
        res.end("TESTE OK")
        let method = req.method
        console.log(method)
        return true
    }else{
        return false
    }
}

http.createServer((request, response)=>{
    
    handleFile(request, response, handleRequest)

}).listen(3000, (err)=>{
    if(err)console.log(err)
    else{
        console.log("Servidor rodando")
    }
})

// GET = Solicita algo/ler um dado ou arquivo (html por exemplo) ---- POST - Mandar um dado para o SV, se mandar 2 usuário vai ir os dois iguais então vc precisa tratar isso ----- PUT - Ele sobrescreve ou atualiza - DELETE - Apaga ---- Tudo usando fetch 