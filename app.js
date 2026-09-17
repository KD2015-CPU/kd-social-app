function showSection(sectionId, clickedButton) {

    document.querySelectorAll(".section").forEach(function(section) {
        section.classList.remove("active");
    });

    const section = document.getElementById(sectionId);

    if (section) {
        section.classList.add("active");
    }

    const title = document.getElementById("pageTitle");

    if (title) {
        const titles = {
            home: "Home",
            search: "Search",
            create: "Create Post",
            notifications: "Notifications",
            messages: "Messages",
            profile: "Profile",
            settings: "Settings"
        };

        title.textContent = titles[sectionId] || "KD";
    }

    document.querySelectorAll(".nav button").forEach(function(button) {
        button.classList.remove("active");
    });

    if (clickedButton) {
        clickedButton.classList.add("active");
    }

    window.scrollTo(0, 0);
}


function toggleLike(button) {

    if (button.textContent.includes("Liked")) {
        button.textContent = "❤️ Like";
    } else {
        button.textContent = "❤️ Liked";
    }
}


function createPost() {

    const input = document.getElementById("postText");
    const message = document.getElementById("createMessage");

    if (!input) {
        return;
    }

    const text = input.value.trim();

    if (text === "") {

        if (message) {
            message.textContent = "Please write something.";
        }

        return;
    }

    const feed = document.getElementById("feed");

    if (!feed) {
        return;
    }

    const post = document.createElement("div");
    post.className = "post";

    const user = document.createElement("div");
    user.className = "post-user";
    user.textContent = "KD User";

    const content = document.createElement("div");
    content.textContent = text;

    const like = document.createElement("button");

    like.textContent = "❤️ Like";
    like.style.marginTop = "10px";

    like.onclick = function() {
        toggleLike(like);
    };

    post.appendChild(user);
    post.appendChild(content);
    post.appendChild(like);

    feed.prepend(post);

    input.value = "";

    if (message) {
        message.textContent = "Post published! 🎉";

        setTimeout(function() {
            message.textContent = "";
        }, 2000);
    }

    showSection("home");
}


function searchKD() {

    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");

    if (!input || !results) {
        return;
    }

    const query = input.value.trim().toLowerCase();

    if (query === "") {
        results.innerHTML = "<p>Please enter a search.</p>";
        return;
    }

    const items = [
        "KD User",
        "KD Creator",
        "KD Community",
        "KD Social App",
        "KD Shorts"
    ];

    const matches = items.filter(function(item) {
        return item.toLowerCase().includes(query);
    });

    results.innerHTML = "";

    if (matches.length === 0) {
        results.innerHTML = "<p>No results found.</p>";
        return;
    }

    matches.forEach(function(item) {

        const result = document.createElement("div");

        result.className = "search-result";
        result.textContent = "🔎 " + item;

        results.appendChild(result);
    });
}


function sendMessage() {

    const input = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatBox");

    if (!input || !chatBox) {
        return;
    }

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    const message = document.createElement("div");

    message.className = "post";

    const strong = document.createElement("strong");
    strong.textContent = "You: ";

    const textNode = document.createTextNode(text);

    message.appendChild(strong);
    message.appendChild(textNode);

    chatBox.appendChild(message);

    input.value = "";
}


function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}
