function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("animate__fadeInLeft", "animate__fadeInRight");
        if (x[i].style.display === "block") {
            x[i].style.display = "none";
            x[i].classList.add("animate__animated", "animate__fadeOutLeft");
        }
    }

    var currentTab = document.getElementById(tabName);
    currentTab.style.display = "block";
    currentTab.classList.remove("animate__fadeOutLeft");
    currentTab.classList.add("animate__animated", "animate__fadeInRight");

    if (tabName === 'skills') {
        var bars = document.getElementsByClassName('skill-bar-fill');
        for (i = 0; i < bars.length; i++) {
            bars[i].style.width = '0';
            setTimeout((function(bar, width) {
                return function() {
                    bar.style.width = width;
                };
            })(bars[i], bars[i].style.getPropertyValue('--skill-width')), 0);
        }
    }

    // Remove a classe 'active' de todos os botões das abas
    var tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Adiciona a classe 'active' ao botão da aba atual
    document.querySelector('button[data-tab="' + tabName + '"]').classList.add("active");
}

document.getElementById('language-toggle').addEventListener('change', function() {
    const isEnglish = this.checked;
    const elementsEn = document.querySelectorAll('[data-lang="en"]');
    const elementsPt = document.querySelectorAll('[data-lang="pt"]');
    
    if (isEnglish) {
        elementsEn.forEach(element => {
            element.style.display = 'block';
            element.classList.remove("animate__fadeOut");
            element.offsetWidth; // Trigger reflow
            element.classList.add("animate__fadeIn");
        });
        elementsPt.forEach(element => {
            element.style.display = 'none';
            element.classList.remove("animate__fadeIn");
            element.classList.add("animate__fadeOut");
        });
    } else {
        elementsEn.forEach(element => {
            element.style.display = 'none';
            element.classList.remove("animate__fadeIn");
            element.classList.add("animate__fadeOut");
        });
        elementsPt.forEach(element => {
            element.style.display = 'block';
            element.classList.remove("animate__fadeOut");
            element.offsetWidth; // Trigger reflow
            element.classList.add("animate__fadeIn");
        });
    }

    // Adiciona animação suave ao trocar de idioma
    const languageContainer = document.getElementById('language-container');
    languageContainer.classList.add('animate__animated', 'animate__pulse');
    setTimeout(() => {
        languageContainer.classList.remove('animate__pulse');
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const isEnglish = document.getElementById('language-toggle').checked;
    const elementsEn = document.querySelectorAll('[data-lang="en"]');
    const elementsPt = document.querySelectorAll('[data-lang="pt"]');

    if (isEnglish) {
        elementsPt.forEach(element => element.style.display = 'none');
    } else {
        elementsEn.forEach(element => element.style.display = 'none');
    }

    // Default tab to open
    openTab('aboutMe');
});

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("animate__fadeInLeft", "animate__fadeInRight");
        if (x[i].style.display === "block") {
            x[i].style.display = "none";
            x[i].classList.add("animate__animated", "animate__fadeOutLeft");
        }
    }

    var currentTab = document.getElementById(tabName);
    currentTab.style.display = "block";
    currentTab.classList.remove("animate__fadeOutLeft");
    currentTab.classList.add("animate__animated", "animate__fadeInRight");

    if (tabName === 'skills') {
        var bars = document.getElementsByClassName('skill-bar-fill');
        for (i = 0; i < bars.length; i++) {
            bars[i].style.width = '0';
            setTimeout((function(bar, width) {
                return function() {
                    bar.style.width = width;
                };
            })(bars[i], bars[i].style.getPropertyValue('--skill-width')), 0);
        }
    }

    // Remove a classe 'active' de todos os botões das abas
    var tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Adiciona a classe 'active' ao botão da aba atual
    var currentTabButton = document.querySelector('button[data-tab="' + tabName + '"]');
if (currentTabButton) {
    currentTabButton.classList.add("active");
}
}

document.addEventListener('DOMContentLoaded', () => {
    const isEnglish = document.getElementById('language-toggle').checked;
    const elementsEn = document.querySelectorAll('[data-lang="en"]');
    const elementsPt = document.querySelectorAll('[data-lang="pt"]');

    if (isEnglish) {
        elementsPt.forEach(element => element.style.display = 'none');
    } else {
        elementsEn.forEach(element => element.style.display = 'none');
    }

    // Default tab to open
    openTab('aboutMe');
});
