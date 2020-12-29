  var firebaseConfig = {
    apiKey: "AIzaSyBnALua8JXjSIXPgoPiA6XCiWzCgWND77Q",
    authDomain: "maximal-coast-208016.firebaseapp.com",
    databaseURL: "https://maximal-coast-208016.firebaseio.com",
    projectId: "maximal-coast-208016",
    storageBucket: "maximal-coast-208016.appspot.com",
    messagingSenderId: "602377401534",
    appId: "1:602377401534:web:87e65f895e945ed6155aef",
    measurementId: "G-FBSFCDYJXP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  db = firebase.firestore();
  firebase.analytics();

  // Ler todos os dados GET
//   db.collection("turmaA").get()
//                         .then((snapshot)=>{
//                         snapshot.forEach((doc)=>{
//                         console.log(doc.data().nome)
//       })
//   })

// let docRef = db.collection("turmaA").doc("zhsLKrP4XSsPppHZptb9")

// docRef.get().then((doc)=>{
//     console.log(doc.data())
// })

// PESQUISA
// db.collection("turmaA").where("nome", "==", "José").get().then((snapshot=>{
//     snapshot.forEach((doc)=>{
//         console.log(doc.data().nome, doc.data().sobrenome)
//     })
// }))

// Add
// db.collection("turmaA").add({
//     nome: "Marcos",
//     sobrenome: "Santos",
//     notas: {noata1: 9.6, nota2: 7.5}
// }).then((doc)=>{
//      console.log("Documento inserido com sucesso")
// }).catch(err => {
//      console.log(err)
// })

// UPDATE
// db.collection("turmaA").doc("FadVtngaIJexuBriIUrm").update({
//     nome: "Mauricio",
//     sobrenome: "Benington",
//     notas: {noata1: 9.6, nota2: 7.5}
// }).then((doc)=>{
//      console.log("Documento inserido com sucesso")
// }).catch(err => {
//      console.log(err)
// })

// UPDATE
// db.collection("turmaA").doc("FadVtngaIJexuBriIUrm").update({
//     // materias: ["português","geografia"]
//     materias: firebase.firestore.FieldValue.arrayUnion("Rio de janeiro")
// }).then((doc)=>{
//      console.log("Documento inserido com sucesso")
// }).catch(err => {
//      console.log(err)
// })

// on Snap
//     db.collection("turmaA").onSnapshot((snapshot)=>{
//         snapshot.forEach((doc)=>{
//         console.log(doc.data().nome)
//     })
// })

//Delete
// db.collection("turmaA").doc("FadVtngaIJexuBriIUrm").update({
//     materias: firebase.firestore.FieldValue.delete()
// }).then((doc)=>{
//      console.log("Documento inserido com sucesso")
// }).catch(err => {
//      console.log(err)
// })

// CRIANDO UM USER
// let newUserEmail = "novoteste@teste.com"
// let newUserPass = "123456"

// let auth = firebase.auth()

// auth.createUserWithEmailAndPassword(newUserEmail,newUserPass).then((usr)=>{
//     console.log(usr," cadastrado")
// }).catch((err)=>{err})

// let auth = firebase.auth()

// // // LOGANDO
// function login(){

//     auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{
//         auth.signInWithEmailAndPassword("novoteste@teste.com", "123456").then(logged=>{
//             console.log("USUARIO AUTENTICADO", auth.currentUser)
//         })
//     }) // SESSION = ABA, LOCAL = NAVEGADOR, NONE = F5 acaba
// }

// CHECANDO LOGIN AUTO
// auth.onAuthStateChanged(user=>{
//     if (user){
//         console.log("USUARIO CONECATADO ",user)
//     }else{
//         console.log("NINGUÉM LOGADO NO MOMENTO")
//     }
// })

// LOGOUT
// function logout(){
//     auth.signOut().then().catch()
// }

// PARA CONTROLO DO BD
// allow read: if true; (todos podem ler)
// allow write: if true; (todos podem escrever)
// allow write: if false; (não pode escrever)
// allow write: if request.auth.uid != null; (se logado podem escrever)
// allow write: if request.auth.uid != "asdasdasdasdsaas"; (se logado com o login x)
