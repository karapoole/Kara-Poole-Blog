const usernameEl = document.getElementById("username");
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const submitEl = document.getElementById("submit");

// creates function to run the following on click
submitEl.addEventListener("click", function (event) {
  event.preventDefault();
  // checks for values in user input fields
  if (usernameEl.value && titleEl.value && contentEl.value) {
    //creates object from user input values
    const blogEntry = {
      username: usernameEl.value,
      title: titleEl.value,
      content: contentEl.value,
    };

    let blogPostObject;
    // checks for existing blog posts in local storage
    if (localStorage.getItem("blogPost")) {
      // retrives any existing blog posts from local storage
      blogPostObject = JSON.parse(localStorage.getItem("blogPost"));
    } else {
      // if no blog posts in local storage, creates empty array to store new blog post submitted via form
      blogPostObject = [];
    }
    // stores new blog posts submitted via form in local storage
    blogPostObject.push(blogEntry);
    // converts blog entry into string for local storage
    localStorage.setItem("blogPost", JSON.stringify(blogPostObject));
    // clears fields in form after submit
    usernameEl.textContent = "";
    titleEl.textContent = "";
    contentEl.textContent = "";

    //links to blog post page after successful submit
    window.location.href = "./blog.html";
  } else {
    // alerts user of any empty fields
    alert("No field can be empty!");
  }
});
