/* Once the document is ready to be worked with we can run a function and get a reference to both Login and Sign Up forms*/
document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    /* When clicked on the create account it will hide the login for and remove the formHidden from the createAccountForm */
    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{ /* e will pass a reference in place of () in the Event */
        e.preventDefault(); /* This will prevent the html from redirecting and loading webpages from the href*/
        loginForm.classList.add("formHidden");
        createAccountForm.classList.remove("formHidden");
    });

 /* Same code as above but the other way around so when the Login form is cliked the createAccountForm is hidden */
    document.querySelector("#linkLogin").addEventListener("click", e  =>{ /* e will pass a reference in place of () in the Event*/
        e.preventDefault();
        loginForm.classList.remove("formHidden");
        createAccountForm.classList.add("formHidden");
    });
});