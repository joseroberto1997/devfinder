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
            <p>@octocat</p>
        </div>
        <div class="joined">
            <p>Joined 25 Jan 2021</p>
        </div>
    </div>
    <div class="repo-infos">
        <div class="repos">
            <p>Repos</p>
            <p>8</p>
        </div>
        <div class="followers">
            <p>Followers</p>
            <p>8</p>
        </div>
        <div class="following">
            <p>Following</p>
            <p>8</p>
        </div>
    </div>
      <div class="additional-infos">
        <div class="additional-1">
            <p><img src="./img/pin.png"/>San Francisco</p>
            <p><img src="./img/link.png">https://github.blog</p>   
        </div>
        <div class="additional-2">
            <p><img src="./img/twitter.png">Not available</p>
            <p><img src="./img/business-and-trade.png">@github</p>   
        </div>

      </div>  
    </div>`
}



inputSearch.addEventListener('keyup', (e) => {
    const user = e.target.value;
    if(user.length > 0) {
        getUser(user).then((res) => console.log(res))
    }
})