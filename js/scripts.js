const inputSearch = document.querySelector("#name-repository");
const container = document.querySelector(".container");
const url = 'https://api.github.com/users'

async function getUser(user) {
    const profileResponse = await fetch(`${url}/${user}`);

    const profile = profileResponse.json();

    return profile;
}

function showRepo(user) {
    container.innerHTML = ` <div class="avatar-profile">
    <img src="${user.avatar_url}" alt="" srcset="">
</div>
<div class="profile-infos">
    <div class="basic-infos">
        <div class="name-perfil">
            <p>${user.name}</p>
            <p>${user.twitter_username}</p>
        </div>
        <div class="joined">
            <p>${user.created_at}</p>
        </div>
    </div>
    <div class="repo-infos">
        <div class="repos">
            <p>Repos</p>
            <p>${user.public_repos}</p>
        </div>
        <div class="followers">
            <p>Followers</p>
            <p>${user.followers}</p>
        </div>
        <div class="following">
            <p>Following</p>
            <p>${user.following}</p>
        </div>
    </div>
      <div class="additional-infos">
        <div class="additional-1">
            <p><img src="./img/pin.png"/>${user.location}</p>
            <p><img src="./img/link.png">${user.blog}</p>   
        </div>
        <div class="additional-2">
            <p><img src="./img/twitter.png">${user.twitter_username}</p>
            <p><img src="./img/business-and-trade.png">${user.company}</p>   
        </div>

      </div>  
    </div>`
}



inputSearch.addEventListener('keyup', (e) => {
    const user = e.target.value;
    if(user.length > 0) {
        getUser(user).then((res) => showRepo(res))
    }
})