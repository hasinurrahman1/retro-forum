const loadDataAllPosts = () => {
    const url = 'https://openapi.programming-hero.com/api/retro-forum/posts';
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
}

const displayData = (data) => {
    const cardSection = document.getElementById('card-container')
    for (const post of data.posts) {
        // console.log(post.title)
        const cardDiv = document.createElement('div')
        cardDiv.innerHTML = `
    <div class="bg-gray-100 flex rounded-xl shadow-lg mb-6">
        <div class="w-40 pt-6">
            <div class="w-20 h-20 mx-auto relative">
                <img class="rounded-lg" src="${post.image}" alt="">
            </div>
            <p class="active-point absolute"></p>
        </div>
        <div>
            <div class="flex gap-x-10 pt-6">
                <p class="font-semibold"># ${post.category}</p>
                <p class="font-semibold">Author: ${post.author.name}</p>
            </div>
            <h1 class="text-xl font-bold mt-3">${post.title}</h1>
            <p class="text-base font-semibold mt-3 mb-5">${post.description}</p>
            <span>------------------------------------------------------------------------------------------</span>
            <div class="flex items-center justify-between mt-2 pb-5 mr-5">
                <div class="flex gap-x-6">
                    <div class="flex items-center gap-x-2">
                        <i class="fa-regular fa-message text-xl"></i>
                        <p>${post.comment_count}</p>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <i class="fa fa-eye text-xl"></i>
                        <p>${post.view_count}</p>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <i class="fa-regular fa-clock text-xl"></i>
                        <p>${post.posted_time}</p>
                    </div>
                </div>
                <button id="markRead-btn" class="w-8 h-8 bg-blue-600 rounded-full" type="button"><i class="fa-regular fa-envelope-open text-xl text-white"></i></button>
            </div>
        </div>
    </div>
    `;
        cardSection.appendChild(cardDiv);
    }
    document.getElementById('markRead-btn').addEventListener('click', function () {
        const markIncrease = document.getElementById('mark-increase');
        const markIncreaseString = markIncrease.innerText;
        const markIncreaseValue = parseInt(markIncreaseString)
        const increaseMarks = markIncreaseValue + 1;
        markIncrease.innerText = increaseMarks
        console.log(markIncrease);
    })
}
loadDataAllPosts();


const loadLatestPosts = () => {
    const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts';
    fetch(url)
        .then(response => response.json())
        .then(data => displayLatestPosts(data))
}

const displayLatestPosts = (data) => {
    const latestContainer = document.getElementById('latest-container');
    for (const post of data) {
        // console.log(post.title)
        const latestDiv = document.createElement('div');
        latestDiv.innerHTML = `
    <div class="w-96 rounded-3xl bg-black shadow-lg shadow-black">
        <div class="pt-7">
            <img class="w-80 h-52 mx-auto rounded-3xl" src="${post.cover_image}" alt="">
        </div>
        <div class="w-80 mx-auto mt-5">
            <div class="flex items-center gap-x-4 text-white">
                <i class="fa-regular fa-calendar-check"></i>
                <p>${post.author.posted_date ? post.author.posted_date : 'No publish date'}</p>
            </div>
            <h1 class="text-cyan-400 text-xl font-semibold mt-3">${post.title}</h1>
            <p class="text-white mt-3">${post.description}</p>
            <div class="flex items-center gap-x-5 mt-5 pb-5">
                <img class="w-14 h-14 bg-amber-400 rounded-full" src="${post.profile_image}" alt="" srcset="">
                <div class="text-white">
                    <h1>${post.author.name}</h1>
                    <h3>${post.author.designation ? post.author.designation : 'No Designation'}</h3>
                </div>
            </div>
        </div>
    </div>
    `;
        latestContainer.appendChild(latestDiv);
    }
}
loadLatestPosts();
