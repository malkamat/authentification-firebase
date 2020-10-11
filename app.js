const btnInscription = document.querySelector(".btn-inscription")
const btnConnexion = document.querySelector(".btn-connexion")
const btnDeco = document.querySelector(".btn-deco")
const formInscription = document.querySelector(".form-inscription")
const formConnexion = document.querySelector(".form-connexion")
const emailInscription = document.querySelector(".email-inscription")
const mdpInscription = document.querySelector(".mdp-inscription")
const h1 = document.querySelector("h1")
const info = document.querySelector(".info")

btnInscription.addEventListener("click", () => {

    if(formConnexion.classList.contains("apparition")) {
        formConnexion.classList.remove("apparition")
    }

    formInscription.classList.toggle("apparition")
})

btnConnexion.addEventListener("click", () => {

    if(formInscription.classList.contains("apparition")) {
        formInscription.classList.remove("apparition")
    }

    formConnexion.classList.toggle("apparition")
})

formInscription.addEventListener("submit", (e) => {
    e.preventDefault()
    const mailValeur = emailInscription.value
    const mdpInscriptionValeur = mdpInscription.value

    auth.createUserWithEmailAndPassword(mailValeur, mdpInscriptionValeur)
    .then(cred => {
        console.log(cred);
        formInscription.reset()
        formInscription.classList.toggle("apparition")
    })

})

btnDeco.addEventListener("click" , (e) => {
    e.preventDefault()
    auth.signOut()
    .then(() => {
        console.log("deco");
    })
})

formConnexion.addEventListener("submit", (e) => {
    e.preventDefault()
    const mailValeur = emailConnexion.value
    const mdpConnexionValeur = mdpConnexion.value

    auth.signInWithEmailAndPassword(mailValeur, mdpConnexionValeur)
    .then(cred => {
        console.log(cred.user);
        formConnexion.reset()
        formConnexion.classList.toggle("apparition")
    })

})

auth.onAuthStateChanged(utlisateur => {
    if(utlisateur) {
        info.innerText = "voici le contenu privé !"
        h1.innerText = "Vous voila de retour !"
    } else {
        console.log("vous etes deco");
        info.innerText = "Contenu public"
        h1.innerText = "Bienvenue, inscrivez-vous ou connectez-vous"
    }
})