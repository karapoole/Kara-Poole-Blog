const usernameEl = document.querySelector("#username");
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#content");
const submitEl = document.querySelector("#submit");

submitEl.addEventListener("submit", function () {
  if (usernameEl.value && titleEl.value && contentEl.value) {
    const blogEntry = {
      username: usernameEl.value,
      title: titleEl.value,
      content: contentEl.value,
    };

    let blogPostObject;
    if (localStorage.getitem("blogPost")) {
      blogPostObject = JSON.parse(localStorage.getItem("blogPost"));
    } else {
      blogPostObject = [];
    }
    blogPostObject.push(blogEntry);
    localStorage.setItem("blogPost", JSON.stringify(blogPostObject));
    usernameEl.textContent = "";
    titleEl.textContent = "";
    contentEl.textContent = "";
    window.location.href = "blog.html";
  } else {
    alert("No field can be empty!");
  }
});
