var firebaseConfig = {
    apiKey: "AIzaSyCp_mAZ1el1zcwdbf4p83stxk8kJzM8rIQ",
    authDomain: "myfirebasestored.firebaseapp.com",
    databaseURL: "https://myfirebasestored.firebaseio.com",
    projectId: "myfirebasestored",
    storageBucket: "myfirebasestored.appspot.com",
    messagingSenderId: "454234137721",
    appId: "1:454234137721:web:1b128e924b889ab8b460a8",
    measurementId: "G-VV062K3JTB"
  };
firebase.initializeApp(firebaseConfig);

let file = document.getElementById("inputFile")

const storage = firebase.storage()
const ref = storage.ref("/uploads/")
// ref.listAll().then(res => {
//     res.items.forEach(element => {
//         element.getDownloadURL().then(url=>{
//             console.log(url)
//         })
//     })
// })

file.addEventListener("change", file =>{
    let uploadFile = file.target.files[0]
    ref.child(uploadFile.name).put(uploadFile).then(snap=>{
        console.log(snap)
    })
})