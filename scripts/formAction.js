let LoginForm = document.getElementById("Contact_form");

LoginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let Name = document.getElementById("nameField");
    let EmailAddress = document.getElementById("emailField");
    let Phone = document.getElementById("phoneField");
    let Message = document.getElementById("textAreaField");

    if (Name.value == "" || EmailAddress.value == "" || Phone.value == "" || Message.value == "") {
        alert("Cannot Send Empty Email");
        LoginForm.removeEventListener("submit");
    }

    LoginForm.reset();
    alert("Sending Mail to: d946bf@inf.elte.hu");
    LoginForm.removeEventListener("submit");
});