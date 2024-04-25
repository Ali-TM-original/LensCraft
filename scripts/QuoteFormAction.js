let QuoteForm = document.getElementById("QuoteForm");

const QuoteFormSubmit = (e) => {
    let Name = document.getElementById("QuoteName");
    let EmailAddress = document.getElementById("QuoteEmail");
    let Phone = document.getElementById("QuotePhone");

    if (Name.value == "" || EmailAddress.value == "" || Phone.value == "") {
        alert("Cannot Send Empty Email");
        return;
    }

    QuoteForm.reset();
    alert("Sending Mail to: d946bf@inf.elte.hu");
    return;

}