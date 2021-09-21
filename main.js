document.getElementById("validate_btn").addEventListener('click', () => 
{
    //if fisrt name is not empty
    if(document.getElementById("first-name-input").value.length > 0)
    {
        document.getElementById("fisrt-name-error").style.display = "none";
        document.getElementById("first-name-input").style.border = "1px solid rgba(128, 128, 128, 0.301)";
        document.getElementById("first-name-input").style.background = "none";
    }
    else
    {
        document.getElementById("fisrt-name-error").style.display = "inline";
        document.getElementById("first-name-input").style.border = "1px solid red";
        document.getElementById("first-name-input").style.background = "url(images/icon-error.svg) no-repeat scroll right 5px center";
    }
    //if last name is not empty
    if(document.getElementById("last-name-input").value.length > 0)
    {
        document.getElementById("last-name-error").style.display = "none";
        document.getElementById("last-name-input").style.border = "1px solid rgba(128, 128, 128, 0.301)";
        document.getElementById("last-name-input").style.background = "none";
    }
    else
    {
        document.getElementById("last-name-error").style.display = "inline";
        document.getElementById("last-name-input").style.border = "1px solid red";
        document.getElementById("last-name-input").style.background = "url(images/icon-error.svg) no-repeat scroll right 5px center";
    }

    //if mail is correct format
    if(document.getElementById("mail-input").validity.valid > 0)
    {
        document.getElementById("mail-error").style.display = "none";
        document.getElementById("mail-input").style.border = "1px solid rgba(128, 128, 128, 0.301)";
        document.getElementById("mail-input").style.background = "none";
    }
    else
    {
        document.getElementById("mail-error").style.display = "inline";
        document.getElementById("mail-input").style.border = "1px solid red";
        document.getElementById("mail-input").style.background = "url(images/icon-error.svg) no-repeat scroll right 5px center";
    }

    //if password is not empty
    if(document.getElementById("password-input").value.length > 0)
    {
        document.getElementById("password-error").style.display = "none";
        document.getElementById("password-input").style.border = "1px solid rgba(128, 128, 128, 0.301)";
        document.getElementById("password-input").style.background = "none";
    }
    else
    {
        document.getElementById("password-error").style.display = "inline";
        document.getElementById("password-input").style.border = "1px solid red";
        document.getElementById("password-input").style.background = "url(images/icon-error.svg) no-repeat scroll right 5px center";
    }
});