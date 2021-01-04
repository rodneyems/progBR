// let path = process.argv[2]
// let width = Number(process.argv[3])
const fs = require("fs")
let sharp = require("sharp")
let compress_images = require("compress-images")

//instalar modulo sharp
function compress(input, output){
    compress_images(input, output, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        function (error, completed, statistic) {
        console.log("-------------");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("-------------");
        excluir(input)
})
}

function resize(path, output, width){
    sharp(path).rotate(450).resize({width:width}).toFile(output, (error) =>{
        if (error){throw error}
        else{
            console.log("Img Resized successfully")
            compress(output, "./temp/compressed/")

        }
    })
}

function excluir(path){
    fs.unlink(path,err=>{
        if(err) throw err
        else{
            console.log("Arquivo excluido com sucesso")
        }
    })
}

resize("./img.jpg", "./temp/teste.jpg", 1920)