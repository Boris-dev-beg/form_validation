window.addEventListener("load", () => {
  const form = document.querySelector("form");
  const email_error = document.getElementById("email_error");
  const name_error = document.getElementById("name_error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const name = document.getElementById("name");

    if (name.value.trim() === "" || parseInt(name.value)) {
      name.classList.add("border-red-500");
      name_error.classList.replace("hidden", "flex");
    } else {
      name.classList.remove("border-red-500");
      name_error.classList.replace("flex", "hidden");
    }
    if (email.value.trim() === "") {
      email.classList.add("border-red-500");
      email_error.classList.replace("hidden", "flex");
    } else {
      email.classList.remove("border-red-500");
      email_error.classList.replace("flex", "hidden");
    }
    alert(`Email And Name: ${ email.value +" "+ name.value}`)
  });
});
