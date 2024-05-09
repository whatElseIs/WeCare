document.addEventListener("DOMContentLoaded", function() {
    const signup = document.querySelector('#signup');
    const frmOpenBtn = document.querySelector('#form-login');
    const home = document.querySelector('.home');
    const formContainer = document.querySelector('.form_container');
    const formClose = document.querySelector('.form_close');
    const login = document.querySelector('#login');
    const pwShow = document.querySelectorAll('.pw_hide');



/* Button for the features inside the start button of "WE CARE"*/
document.getElementById('BTexercise').addEventListener('click', function() {
    window.location.href = 'BTexercise_Guest.html';
    });
    document.getElementById('Csound').addEventListener('click', function() {
        window.location.href = 'Csound_Guest.html';
        });
        document.getElementById('DMquotes').addEventListener('click', function() {
            window.location.href = 'DMquotes_Guest.html';
            });
           



signup.addEventListener('click', (e) => {
    e.preventDefault();
    formContainer.classList.add('active');
});

login.addEventListener('click', (e) => {
    e.preventDefault();
    formContainer.classList.remove('active');
});


frmOpenBtn.addEventListener('click', () => home.classList.add('show'));
formClose.addEventListener('click', () => home.classList.remove('show'));

pwShow.forEach((icon)=> {
    icon.addEventListener('click', () => {
        let getPwInput = icon.parentElement.querySelector('input'); 
        if(getPwInput.type === 'password') {
            getPwInput.type = 'text';
            icon.classList.replace('uil-eye-slash', 'uil-eye');
        } else {
            getPwInput.type = 'password';
            icon.classList.replace('uil-eye', 'uil-eye-slash');
        }
    });
});


    switchPlay(Audio.play); // Automatically start the audio
    const labelPlay = document.querySelector('.label-play');

    labelPlay.addEventListener('click', (e) => {
        e.preventDefault();


    });

});




/*Disabling Features */
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    popup.classList.remove("open-popup");
}
///
///
//
///
// Function to open the pop-up Emailing
function openPopupG() {
    if ($("#popupG").is(':visible')) {
        $("#popupG").hide();
    } else {
        $("#popupG").show();
    }
}

// Function to close the pop-up
function closePopupG() {
    document.getElementById("name2").value = "";
    document.getElementById("email2").value = "";
    document.getElementById("message2").value = "";
    $("#popupG").hide();
    
}
// Function to open the pop-up Information
// Function to open the pop-up Information
// Function to open the pop-up Information
// Function to open the pop-up Information
function openPopupIn() {
    if ($("#popupIn").is(':visible')) {
        $("#popupIn").hide();
    } else if ($("#popupIn_Dev").is(':visible')){
        $("#popupIn_Dev").hide();
    }
    else {
        $("#popupIn").show();
    }
}
function closePopupIn() {
    $("#popupIn").hide();
}
// Function to open the pop-up Information
// Function to open the pop-up Information for Developers
function openPopupDev() {
    // Hide other forms
    $(".popupIn").not("#popupIn_Dev").hide();
    if ($("#popupIn_Dev").is(':visible')) {
        $("#popupIn_Dev").hide();
    } else {
        $("#popupIn_Dev").show();
    }
}
//back button
function goBack(){
    $("#popupIn_Dev").hide();
    $("#popupIn").show();
}
function closePopupIn_Dev() {
    $("#popupIn_Dev").hide();
}
// For the sounds of UI
function switchPlay() {
    const audioclick = document.getElementById("audioclick");
    const toggleSwitch = document.getElementById('toggle');
    const labelPlay = document.querySelector('.label-play');

    // Check if the elements exist
    if (!audioclick || !toggleSwitch || !labelPlay) {
        console.error('One or more elements could not be found');
        return;
    }

    // Check if the toggle is checked
    if (toggleSwitch.checked) {
        // If checked, pause the audio
        audioclick.pause();
        // Remove active class
        labelPlay.classList.remove('active');
    } else {
        // If unchecked, play the audio
        audioclick.play();
        // Add active class
        labelPlay.classList.add('active');
    }
}

       

