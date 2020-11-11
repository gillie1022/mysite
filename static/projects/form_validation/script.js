let form = document.querySelector("#parking-form");
let presentNum = Date.now();
let presentDate = new Date();
let presentYear = presentDate.getFullYear();
let presentMonth = presentDate.getMonth();
let nameInput = document.querySelector("#name");
let nameField = nameInput.parentElement;
document.getElementsByTagName("label")[0].setAttribute("id", "name-label");
let nameLabel = document.querySelector("#name-label");
let carYear = document.querySelector("#car-year");
carYear.setAttribute("type", "number");
let carMake = document.querySelector("#car-make");
let carModel = document.querySelector("#car-model");
let carField = document.querySelector("#car-field");
document.getElementsByTagName("label")[1].setAttribute("id", "car-label");
let carLabel = document.querySelector("#car-label");
let startDate = document.querySelector("#start-date");
let startDateValue = startDate.value;
let startDateField = startDate.parentElement;
document
  .getElementsByTagName("label")[2]
  .setAttribute("id", "start-date-label");
let startDateLabel = document.querySelector("#start-date-label");
let days = document.querySelector("#days");
let daysField = days.parentElement;
days.setAttribute("type", "number");
document.getElementsByTagName("label")[3].setAttribute("id", "days-label");
let daysLabel = document.querySelector("#days-label");
let creditCard = document.querySelector("#credit-card");
let creditCardField = creditCard.parentElement;
creditCard.setAttribute("type", "number");
document
  .getElementsByTagName("label")[4]
  .setAttribute("id", "credit-card-label");
let creditCardLabel = document.querySelector("#credit-card-label");
let cvvInput = document.querySelector("#cvv");
let cvvField = cvvInput.parentElement;
cvvInput.setAttribute("type", "number");
document.getElementsByTagName("label")[5].setAttribute("id", "cvv-label");
let cvvLabel = document.querySelector("#cvv-label");
let expirationInput = document.querySelector("#expiration");
expirationInput.setAttribute("type", "month");
let expirationField = expirationInput.parentElement;
document
  .getElementsByTagName("label")[6]
  .setAttribute("id", "expiration-label");
let expirationLabel = document.querySelector("#expiration-label");

function validateName() {
  let nameValue = nameInput.value;
  if (nameValue !== "") {
    nameField.classList.remove("input-invalid");
    nameField.classList.add("input-valid");
    nameLabel.textContent = "Name";
  } else {
    nameField.classList.remove("input-valid");
    nameField.classList.add("input-invalid");
    nameLabel.textContent = "Name is required!";
  }
}
function validateCar() {
  let carYearValue = carYear.value;
  let carMakeValue = carMake.value;
  let carModelValue = carModel.value;
  if (
    carYearValue > 1900 &&
    carYearValue < 2021 &&
    carMakeValue !== "" &&
    carModelValue !== ""
  ) {
    carField.classList.remove("input-invalid");
    carField.classList.add("input-valid");
    carLabel.textContent = "Car";
  } else if (
    carYearValue === "" &&
    carMakeValue === "" &&
    carModelValue === ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Year, Make, and Model are required!";
  } else if (
    carYearValue === "" &&
    carMakeValue === "" &&
    carModelValue !== ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Year and Make are required!";
  } else if (
    carYearValue === "" &&
    carMakeValue !== "" &&
    carModelValue === ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Year and Model are required!";
  } else if (
    carYearValue > 1900 &&
    carYearValue < 2021 &&
    carMakeValue === "" &&
    carModelValue === ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Make and Model are required!";
  } else if (
    carYearValue < 1900 &&
    carMakeValue === "" &&
    carModelValue === ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent =
      "Year must be after 1900 and Make and Model are required!";
  } else if (
    carYearValue > 2020 &&
    carMakeValue === "" &&
    carModelValue === ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent =
      "Year must be before 2021 and Make and Model are required!";
  } else if (
    carYearValue < 1900 &&
    carMakeValue === "" &&
    carModelValue !== ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Year must be after 1900 and Make is required!";
  } else if (
    carYearValue < 1900 &&
    carMakeValue !== "" &&
    carModelValue === ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Year must be after 1900 and Model is required!";
  } else if (
    carYearValue > 2020 &&
    carMakeValue === "" &&
    carModelValue !== ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Year must be before 2021 and Make is required!";
  } else if (
    carYearValue > 2020 &&
    carMakeValue !== "" &&
    carModelValue === ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Year must be before 2021 and Model is required!";
  } else if (
    carYearValue > 1900 &&
    carYearValue < 2021 &&
    carMakeValue === "" &&
    carModelValue === ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Make and Model are required!";
  } else if (
    carYearValue < 1900 &&
    carMakeValue === "" &&
    carModelValue !== ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Year must be after 1900 and Make is required!";
  } else if (
    carYearValue === "" &&
    carMakeValue !== "" &&
    carModelValue !== ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Year is required!";
  } else if (
    carYearValue < 1900 &&
    carMakeValue !== "" &&
    carModelValue !== ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Year must be after 1900!";
  } else if (
    carYearValue > 2020 &&
    carMakeValue !== "" &&
    carModelValue !== ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Year must be before 2020!";
  } else if (
    carYearValue > 1900 &&
    carYearValue < 2021 &&
    carMakeValue === "" &&
    carModelValue !== ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Make is required!";
  } else if (
    carYearValue > 1900 &&
    carYearValue < 2021 &&
    carMakeValue !== "" &&
    carModelValue === ""
  ) {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent = "Model is required!";
  }
}
function validateStartDate() {
  let startDateNumValue = startDate.valueAsNumber;
  if (presentNum < startDateNumValue) {
    startDateField.classList.remove("input-invalid");
    startDateField.classList.add("input-valid");
    startDateLabel.textContent = "Date parking";
  } else if (presentNum > startDateNumValue) {
    startDateField.classList.remove("input-valid");
    startDateField.classList.add("input-invalid");
    startDateLabel.textContent = "Date parking must be in the future!";
  } else {
    startDateField.classList.remove("input-valid");
    startDateField.classList.add("input-invalid");
    startDateLabel.textContent = "Date parking is required!";
  }
}
function validateDays() {
  let daysValue = days.value;
  if (daysValue > 30) {
    daysField.classList.remove("input-valid");
    daysField.classList.add("input-invalid");
    daysLabel.textContent = "Maximum number of days is 30!";
  } else if (daysValue === "") {
    daysField.classList.remove("input-valid");
    daysField.classList.add("input-invalid");
    daysLabel.textContent = "Number of days is required!";
  } else if (daysValue < 1) {
    daysField.classList.remove("input-valid");
    daysField.classList.add("input-invalid");
    daysLabel.textContent = "Minimum number of days is 1!";
  } else {
    daysField.classList.remove("input-invalid");
    daysField.classList.add("input-valid");
    daysLabel.textContent = "Number of days";
  }
}
function validateCreditCard() {
  validateCardNumber();
  let creditCardValue = creditCard.value;
  if (creditCardValue === "") {
    creditCardField.classList.remove("input-valid");
    creditCardField.classList.add("input-invalid");
    creditCardLabel.textContent = "Credit Card is required!";
  } else if (validateCardNumber(creditCardValue) === false) {
    creditCardField.classList.remove("input-valid");
    creditCardField.classList.add("input-invalid");
    creditCardLabel.textContent = "Please input a valid Credit Card number!";
  } else {
    creditCardField.classList.remove("input-invalid");
    creditCardField.classList.add("input-valid");
    creditCardLabel.textContent = "Credit Card";
  }
}
function validateCardNumber(number) {
  var regex = new RegExp("^[0-9]{16}$");
  if (!regex.test(number)) return false;

  return luhnCheck(number);
}
function luhnCheck(val) {
  var sum = 0;
  for (var i = 0; i < val.length; i++) {
    var intVal = parseInt(val.substr(i, 1));
    if (i % 2 == 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return sum % 10 == 0;
}
function validateCvv() {
  let cvvValue = cvvInput.value;
  if (cvvValue === "") {
    cvvField.classList.remove("input-valid");
    cvvField.classList.add("input-invalid");
    cvvLabel.textContent = "CVV is required";
  } else if (cvvValue < 100 || cvvValue > 999) {
    cvvField.classList.remove("input-valid");
    cvvField.classList.add("input-invalid");
    cvvLabel.textContent = "CVV must be 3 digits!";
  } else {
    cvvField.classList.remove("input-invalid");
    cvvField.classList.add("input-valid");
    cvvLabel.textContent = "CVV";
  }
}
function validateExpiration() {
  let expirationValue = expirationInput.valueAsDate;
  if (expirationValue !== null) {
    validateExpirationInFuture();
  } else {
    expirationField.classList.remove("input-valid");
    expirationField.classList.add("input-invalid");
    expirationLabel.textContent = "Expiration is required!";
  }
}
function validateExpirationInFuture() {
  let expirationValue = expirationInput.valueAsDate;
  let expirationMonth = expirationValue.getMonth();
  let expirationYear = expirationValue.getFullYear();
  if (presentYear > expirationYear) {
    expirationField.classList.remove("input-valid");
    expirationField.classList.add("input-invalid");
    expirationLabel.textContent = "Expiration Year must be in the future!";
  } else if (presentMonth > expirationMonth) {
    expirationField.classList.remove("input-valid");
    expirationField.classList.add("input-invalid");
    expirationLabel.textContent = "Expiration must be in the future!";
  } else {
    expirationField.classList.remove("input-invalid");
    expirationField.classList.add("input-valid");
    expirationLabel.textContent = "Expiration";
  }
}
function totalCost() {
  if (
    nameField.classList.contains("input-valid") === true &&
    carField.classList.contains("input-valid") === true &&
    startDateField.classList.contains("input-valid") === true &&
    daysField.classList.contains("input-valid") === true &&
    creditCardField.classList.contains("input-valid") === true &&
    cvvField.classList.contains("input-valid") === true &&
    expirationField.classList.contains("input-valid") === true
  ) {
    let edate = new Date(document.querySelector("#start-date").valueAsNumber);
    let dow = edate.getDay();
    let price = 0;
    for (let n = 0; n < document.querySelector("#days").value; n++) {
      if (dow == 5 || dow == 6) price += 7;
      else price += 5;
      dow++;
      if (dow > 6) dow = 0;
    }
    document.querySelector("#total").textContent = "Total: $" + price + ".00";
  } else {document.querySelector("#total").textContent = "";}
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateName();
  validateCar();
  validateStartDate();
  validateDays();
  validateCreditCard();
  validateCvv();
  validateExpiration();
  totalCost();
});
