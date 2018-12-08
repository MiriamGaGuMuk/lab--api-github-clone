//My Tolkien xD 84495fd9c87b2933d59de6ec4407434080d0bf27

const request = superagent


let name = document.querySelector('.profile__name')
let aka = document.querySelector('.profile__nickName')
let imageAvatar = document.querySelector('.profile__photo')
let bio = document.querySelector('.bio')
let company = document.querySelector('.company')
let city = document.querySelector('.location')
let email = document.querySelector('.email')
let blog = document.querySelector('.blog')
let container = document.querySelector('.containerright')
let input = document.querySelector('.textInput')

input.document.addEventListener('') {}


let reposVar = "";


const url = 'https://api.github.com/users/MiriamGaGuMuk'

request
    .get(url)
    .then(function (data) {
        console.log(data);

        //console.log(data.body)
        name.textContent = data.body.login
        imageAvatar.src = data.body.avatar_url
        aka.textContent = data.body.name
        bio.textContent = data.body.bio
        company.textContent = data.body.company
        city.textContent = data.body.location
        email.textContent = data.body.email
        blog.textContent = data.body.blog


        //console.log(data.body.results[0].email)

    })

const reposUrl = 'https://api.github.com/users/MiriamGaGuMuk/repos'
request
    .get(reposUrl)
    .then(function (data) {
        repos = data.body
        // console.log(reposVar)

        let templete = "";


        repos.forEach(function (element) {
            templete += `<article class="repo">
								<h2 class="repo__title">${element.name}</h2>
								<h3 class="repo__description">${element.description}</h3>
								<p class="repo__all">${element.language} | ${element.stargazers_count} | ${element.updated_at}</p>
							</article>`
        })

        container.innerHTML = templete


    })