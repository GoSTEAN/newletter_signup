const submitNewsletter = () => {
  const wrapper = document.querySelector(".wrap");
  const inputEmail = document.querySelector(".input-email");
  const submitBtn = document.querySelector(".submit-btn");
  const thanks = document.querySelector(".thanks");
  const dismiss = document.querySelector(".dismiss");
  const errorMessage = document.querySelector("small");
  const spanEmail = document.querySelector("span");

  submitBtn.addEventListener("click", (e) => e.preventDefault());

  const validateEmail = () => {
    const pattern = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
    if (pattern.test(inputEmail.value) === false || inputEmail.value === "") {
      inputEmail.classList.add("error");
      inputEmail.placeholder = "";
      errorMessage.style.display = "block";
    } else {
      inputEmail.classList.remove("error");
      inputEmail.placeholder = "email@company.com";
      errorMessage.style.display = "none";
      wrapper.style.display = "none";
      thanks.style.display = "flex";
      spanEmail.innerText = `${inputEmail.value}`;
    }
  };

  const returnToForm = () => {
    dismiss.addEventListener("click", () => {
      wrapper.style.display = "flex";
      thanks.style.display = "none";
      inputEmail.value = "";
    });
  };
  returnToForm();

  const submit = () => {
    submitBtn.addEventListener("click", () => {
      validateEmail();
      
    });
  };
  submit();
};
submitNewsletter();
