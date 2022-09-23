
function validateInputs() {
    const firstName = document.getElementById("firstname");
    console.log("First Name : " + firstName.value);
    const lastName = document.getElementById("lastname");
    console.log("Last Name : " + lastName.value);
    const genderEl = document.getElementById("gender");
    console.log("Gender : " + genderEl.value);
    const emailEl = document.getElementById("email");
    console.log("Email : " + emailEl.value);
    const numberEl = document.getElementById("number");
    console.log("mobile No. : " + numberEl.value);
    const ageEl = document.getElementById("age");
    console.log("Age : " + ageEl.value);
    const dateEl = document.getElementById("date");
    console.log("Date of Birth : " + dateEl.value);
    const ardheerEl = document.getElementById("ardheer");
    console.log("Ardheer No. : " + ardheerEl.value);
    const addressEl = document.getElementById("address");
    console.log("Address : " + addressEl.value);
    const collegeName = document.getElementById("college");
    console.log("College Name : " + collegeName.value);
    const branchEl = document.getElementById("branch");
    console.log("Branch : " + branchEl.value);
    const yearEl = document.getElementById("year");
    console.log("year of studying : " + yearEl.value);


    if (firstName.value.length <= 0) {
        alert("First name is requrd..");
        firstName.focus();
        return false;
    };
    if (lastName.value.length <= 0) {
        alert("Last name is requrd..");
        lastName.focus();
        return false;
    };
    if (genderEl.value == "- -Select Gender- -") {
        alert("Gender is requrd..");
        genderEl.focus();
        return false;
    };
    if (emailEl.value.length <= 0) {
        alert("Email is requrd..");
        emailEl.focus();
        return false;
    };
    if (numberEl.value.length <= 0) {
        alert("Mobile no. is requrd..");
        numberEl.focus();
        return false;
    };
    if (ageEl.value.length <= 0) {
        alert("Age is requrd..");
        ageEl.focus();
        return false;
    };
    if (dateEl.value.length <= 0) {
        alert("Date of birth is requrd..");
        dateEl.focus();
        return false;
    };
    if (ardheerEl.value.length <= 0) {
        alert("Ardheer no. is requrd..");
        ardheerEl.focus();
        return false;
    };
    if (addressEl.value.length <= 0) {
        alert("address is requrd..");
        addressEl.focus();
        return false;
    };
    if (collegeName.value.length <= 0) {
        alert("university name is requrd..");
        collegeName.focus();
        return false;
    };
    if (branchEl.value == "- -Select Branch- -") {
        alert("branch name is requrd..");
        branchEl.focus();
        return false;
    };
    if (yearEl.value == "- -Select Year- -") {
        alert("Year of studying is requrd..");
        yearEl.focus();
        return false;
    };

    return false;
};
function validateFirstName(id) {
    const element = document.getElementById(id);
    const re = /^[a-zA-z ]+$/;
    if (!re.test(element.value)) {
        alert("First name must be string only..")
        element.style.border = "2px solid #ff0012";
        return false;
    };
    element.style.border = "2px solid #5dfbdf";
};
function validateLastName(id) {
    const element = document.getElementById(id);
    const re = /^[a-zA-z ]+$/;
    if (!re.test(element.value)) {
        alert("Last name must be string only..")
        element.style.border = "2px solid #ff0012";
        return false;
    };
    element.style.border = "2px solid #5dfbdf";
};
function validateEmail(id) {
    const element = document.getElementById(id);
    const re = /^[a-zA-z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if (!re.test(element.value)) {
        alert("Enter vaild email..")
        element.style.border = "2px solid #ff0012";
        return false;
    };
    element.style.border = "2px solid #5dfbdf";
};
function validateNumber(id) {
    const element = document.getElementById(id);
    const re = /^[0-9]{10}$/;
    if (!re.test(element.value)) {
        alert("Enter 10 digit mobile no. ")
        element.style.border = "2px solid #ff0012";
        return false;
    };
    element.style.border = "2px solid #5dfbdf";
};
function validateAge(id) {
    const element = document.getElementById(id);
    const re = /^[0-9]{1,2}$/;
    if (!re.test(element.value)) {
        alert("Enter your age(number) only..")
        element.style.border = "2px solid #ff0012";
        return false;
    };
    element.style.border = "2px solid #5dfbdf";
};
function validateAredheer(id) {
    const element = document.getElementById(id);
    const re = /^[0-9]{12}$/;
    if (!re.test(element.value)) {
        alert("Enter your 12 digit Ardheer no..")
        element.style.border = "2px solid #ff0012";
        return false;
    };
    element.style.border = "2px solid #5dfbdf";
};
function validateAddress(id) {
    const element = document.getElementById(id);
    const re = /^[a-zA-Z0-9 _/.,]+$/;
    if (!re.test(element.value)) {
        alert("Enter your Address");
        element.style.border = "2px solid #ff0012";
        return false;
    };
    element.style.border = "2px solid #5dfbdf";
};
function validateCollege(id) {
    const element = document.getElementById(id);
    const re = /^[a-zA-Z .,]+$/;
    if (!re.test(element.value)) {
        alert("Enter your College Name correctly..");
        element.style.border = "2px solid #ff0012";
        return false;
    };
    element.style.border = "2px solid #5dfbdf";
};
// const submitBtm=document.querySelector("button");
