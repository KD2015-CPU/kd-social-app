function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    const selected = document.getElementById(sectionId);

    if (selected) {
        selected.classList.add("active");
    }

    const titles = {
        home: "Home",
        search: "Search",
        create: "Create",
        notifications: "Notifications",
        messages: "Messages",
        profile: "Profile",
        settings: "Settings"
    };

    document.getElementById("pageTitle").textContent =
        titles[sectionId] || "KD";

}


function toggleLike(button) {

    if (button.dataset.liked === "true") {
        button.dataset.liked = "false";
        button.textContent = "❤️ Like";
    } else {
        button.dataset.liked = "true";
        button.textContent = "💖 Liked";
    }

}


function createPost() {

    const textBox = document.getElementById("postText");
    const feed = document.getElementById("feed");

    if (!textBox || !feed) return;

    const text = textBox.value.trim();

    if (text === "") {
        alert("Please write something first.");
        return;
    }

    const post = document.createElement("div");

    post.className = "post";

    post.innerHTML = `
        <div class="post-user">Krishnadev</div>
        <p></p>
        <button onclick="toggleLike(this)">
            ❤️ Like
        </button>
    `;

    post.querySelector("p").textContent = text;

    feed.prepend(post);

    textBox.value = "";

    showSection("home");

}


function searchKD() {

    const input = document.getElementById("searchInput");
    const result = document.getElementById("searchResult");

    if (!input || !result) return;

    const text = input.value.trim();

    if (text === "") {
        result.textContent = "Please enter something to search.";
        return;
    }

    result.textContent = "Searching KD for: " + text;

}


function sendMessage() {

    const input = document.getElementById("messageInput");
    const result = document.getElementById("messageResult");

    if (!input || !result) return;

    const message = input.value.trim();

    if (message === "") {
        result.textContent = "Please type a message.";
        return;
    }

    result.textContent = "Message sent: " + message;

    input.value = "";

}
