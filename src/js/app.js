//My Tolkien xD 84495fd9c87b2933d59de6ec4407434080d0bf27

const request = superagent


let name = document.querySelector('.profile__name')
let nick = document.querySelector('.profile__nickName')
let imageAvatar = document.querySelector('.profile__photo')
let bio = document.querySelector('.profile__bio')
let company = document.querySelector('.company')
let city = document.querySelector('.location')
let email = document.querySelector('.email')
let blog = document.querySelector('.blog')
let container = document.querySelector('.rightContainer')
let input = document.querySelector('.textInput')

let repos = "";

input.addEventListener("keypress", function(e){
    let inputUsername = ""
    if(e.keyCode == 13)
    {
        inputUsername = input.value // returning false will prevent the event from bubbling up.
        filterBox(inputUsername)
    }

    console.log(inputUsername)
})
// console.log(input.value)

const url = 'https://api.github.com/users/MiriamGaGuMuk'

request
    .get(url)
    .then(function (data) {
        console.log(data);

        //console.log(data.body)
        name.textContent = data.body.login
        imageAvatar.src = data.body.avatar_url
        nick.textContent = data.body.name
        bio.textContent = data.body.bio
        company.textContent = data.body.company
        city.textContent = data.body.location
        email.textContent = data.body.email
        blog.textContent = data.body.blog

    })

const urlRepo = 'https://api.github.com/users/MiriamGaGuMuk/repos'
request
    .get(urlRepo)
    .then(function (data) {
        repos = data.body
        // console.log(repos)

        let templete = "";


        repos.forEach(function (element) {
            templete += `<article class="repo">
								<h2 class="repo__title">${element.name}</h2>
								<h3 class="repo__description">${element.description}</h3>
								<p class="repo__all">${element.language} | ${element.stargazers_count} | ${element.updated_at}</p>
							</article>`
        })

        container.innerHTML = templete


    });
    
    
    function filterBox(event){
    const url = `https://api.github.com/users/${event}`
    request
        .get(url)
        .then(function(data){
                
                //console.log(data.body)
                name.textContent = data.body.login
                imageAvatar.src = data.body.avatar_url
                nick.textContent = data.body.name
                bio.textContent = data.body.bio
                company.textContent = data.body.company
                city.textContent = data.body.location
                email.textContent = data.body.email
                blog.textContent = data.body.blog
                //console.log(data.body.results[0].email)
                
        });
    
    const url_repos = `https://api.github.com/users/${event}/repos`
        request
        .get(url_repos)
        .then(function(data){
            repos = data.body
            // console.log(repos)
    
            let templete =""
            
                
                repos.forEach(function(element){
                    templete += `<article class="repo">
                                    <h2 class="repo__title">${element.name}</h2>
                                    <h3 class="repo__description">${element.description}</h3>
                                    <p class="repo__all">${element.language} | ${element.stargazers_count} | ${element.updated_at}</p>
                                </article>`
                })
    
                container.innerHTML = templete
                
        });

    }
    
    
    
