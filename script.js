// DROPDOWN MENU USER PROFILE and BACKGROUND COLOR/THEME COLOR

    var settingsMenu = document.querySelector('.settings-menu');
    var darkBtn = document.querySelector('#dark-btn');

    function settingsMenuToggle(){
        settingsMenu.classList.toggle("settings-menu-height") ;
    }

    darkBtn.onclick = function(){

        darkBtn.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-theme");

        if(localStorage.getItem("theme")==="light"){
            localStorage.setItem("theme","dark");
        }
        else{
            localStorage.setItem("theme","light");
        }

    }

    // For keeping the theme as it was before refreshing the page
    // Concept of LocalStorage

    // 1. Initializing loaclStorage Variable
    // localStorage.setItem("variableName","varrableValue");

    // 2. Accessing value of localStorage Variable
    // localStorage.getItem("variableName");

    if(localStorage.getItem("theme")==="light"){ // if the theme was light
        darkBtn.classList.remove("dark-btn-on");
        document.body.classList.remove("dark-theme");
    }
    else if(localStorage.getItem("theme")==="dark"){ // if the theme was dark
        darkBtn.classList.add("dark-btn-on");
        document.body.classList.add("dark-theme");
    }
    else{ // this will set the default value of theme to light
        localStorage.setItem("theme","light");
    }
