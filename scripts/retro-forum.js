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
    <div class="">
        <div class="flex gap-x-10 pt-6">
            <p class="font-semibold"># ${post.category}</p>
            <p class="font-semibold">Author: ${post.author.name}</p>
        </div>
        <h1 id="post-title" class="text-xl font-bold mt-3">${post.title}</h1>
        <p class="text-base font-semibold mt-3 mb-5">${post.description}</p>
        <span>------------------------------------------------------------------------------------------</span>
        <div class="flex items-center justify-between mt-2 pb-5 mr-5">
            <div class="flex gap-x-6">
                <div class="flex items-center gap-x-2">
                    <i class="fa-regular fa-message text-xl"></i>
                    <p>${post.comment_count}</p>
                </div>
                <div class="flex items-center gap-x-2">
                    <i id="view-comment" class="fa fa-eye text-xl"></i>
                    <p id="view-count">${post.view_count}</p>
                </div>
                <div class="flex items-center gap-x-2">
                    <i class="fa-regular fa-clock text-xl"></i>
                    <p>${post.posted_time}</p>
                </div>
            </div>
            <button onclick="markRead()" id="markRead-btn" class="w-8 h-8 bg-blue-600 rounded-full" type="button"><i
                    class="fa-regular fa-envelope-open text-xl text-white"></i></button>
        </div>
    </div>
</div>
    `;
        cardSection.appendChild(cardDiv);
    }
}

loadDataAllPosts();


