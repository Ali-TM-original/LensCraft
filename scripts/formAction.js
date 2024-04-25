let ContactForm = document.getElementById("Contact_form");

ContactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let Name = document.getElementById("nameField");
    let EmailAddress = document.getElementById("emailField");
    let Phone = document.getElementById("phoneField");
    let Message = document.getElementById("textAreaField");

    if (Name.value == "" || EmailAddress.value == "" || Phone.value == "" || Message.value == "") {
        alert("Cannot Send Empty Email");
        ContactForm.removeEventListener("submit");
    }

    ContactForm.reset();
    alert("Sending Mail to: d946bf@inf.elte.hu");
    ContactForm.removeEventListener("submit");
});