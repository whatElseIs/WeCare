
/*LOGOUT BUTTON FOR THE USER */
document.getElementById('log-out').addEventListener('click', function() {
    window.location.href = 'index.html';
    });
    
/* Button for the features inside the start button of "WE CARE"*/
//for the flipping features
document.querySelectorAll(".card__inner").forEach(function(card) {
    let timer;

    // Add mouseenter event listener to each card
    card.addEventListener("mouseenter", function(e) {
        clearTimeout(timer);
        timer = setTimeout(function() {
            card.classList.add("is-flipped");
        }, 400);
    });

    // Add mouseleave event listener to each card
    card.addEventListener("mouseleave", function(e) {
        clearTimeout(timer);
        card.classList.remove("is-flipped");
    });
});
document.getElementById('BT_exercise').addEventListener('click', function() {
    window.location.href = 'BTexercise.html';
    });
    document.getElementById('Calming_sound').addEventListener('click', function() {
        window.location.href = 'Csound.html';
        });
        document.getElementById('Daily_motivational').addEventListener('click', function() {
            window.location.href = 'DMquotes.html';
            });
            document.getElementById('Yoga_exercise').addEventListener('click', function() {
                window.location.href = 'Yoga_Exercise/Yexercise.html';
                });
                document.getElementById('game_button').addEventListener('click', function() {
                    window.location.href = 'Flow_Game/game.html';
                    });
                    document.getElementById('Mood_tracker').addEventListener('click', function() {
                       window.location.href = 'Mood_Tracker/mood_tracker.html';
                        });

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
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
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
    var audioclick = document.getElementById("audioclick");
    var toggleSwitch = document.getElementById('toggle');
    var labelPlay = document.querySelector('.label-play');

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

        document.addEventListener("DOMContentLoaded", function() {
            switchPlay(Audio.play); // Automatically start the audio
        });
