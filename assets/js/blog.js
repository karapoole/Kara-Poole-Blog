const blogDisplayEl = document.getElementById("blogDisplay");

let blogPostObject;
if (localStorage.getItem("blogPost")) {
  // retrieves any existing blog posts from local storage and converts to object
  blogPostObject = JSON.parse(localStorage.getItem("blogPost"));
} else {
  // creates empty array if blogPost does not exist in Local Storage
  blogPostObject = [];
}

// Reversing order so the latest post is at the top
blogPostObject.reverse();

// Creating blog posts from the entries in our blogPostObject JSON
for (const blogEntry of blogPostObject) {
  // creates HTML element for blog post container
  let blogContainer = document.createElement("article");
  // creates HTML element for blog post title
  let blogTitle = document.createElement("h3");
  // creates HTML element for username and blog content
  let blogAuthor = document.createElement("h5");
  let blogEntryContent = document.createElement("p");
  // creates box around blog posts
  blogContainer.style.border = "solid black";
  blogContainer.style.marginTop = "10px";
  blogContainer.style.padding = "10px";

  // Sets text for username, blog title, and blog entry for each post inside of blog container
  blogTitle.textContent = blogEntry.title;
  blogAuthor.textContent = "Authored by " + blogEntry.username;
  blogAuthor.style.fontStyle = "italic";
  blogEntryContent.textContent = blogEntry.content;

  // Appending the title, username and content to the blogContainer
  blogContainer.appendChild(blogTitle);
  blogContainer.appendChild(blogAuthor);
  blogContainer.appendChild(blogEntryContent);

  // Appending the blogContainer to the list of displayed Blog Posts
  blogDisplayEl.append(blogContainer);
}

// adds functionality to back button
back.addEventListener("click", function (event) {
  window.location.href = "./index.html";
});
