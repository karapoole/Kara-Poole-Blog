const usernameEl = document.getElementById("username");
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const submitEl = document.getElementById("submit");

submitEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (usernameEl.value && titleEl.value && contentEl.value) {
    const blogEntry = {
      username: usernameEl.value,
      title: titleEl.value,
      content: contentEl.value,
    };

    console.log(blogEntry);

    let blogPostObject;
    if (localStorage.getItem("blogPost")) {
      blogPostObject = JSON.parse(localStorage.getItem("blogPost"));
    } else {
      blogPostObject = [];
    }
    blogPostObject.push(blogEntry);
    localStorage.setItem("blogPost", JSON.stringify(blogPostObject));
    usernameEl.textContent = "";
    titleEl.textContent = "";
    contentEl.textContent = "";
    window.location.href = "./blog.html";
  } else {
    alert("No field can be empty!");
  }
});
