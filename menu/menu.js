//DECLARATION
var disableBtn = document.getElementById('Dbutton');
var enableBtn = document.getElementById('Ebutton');

//ADDING LISTENERS
disableBtn.addEventListener("click",disableADD);
enableBtn.addEventListener("click",enableADD);

//BUTTON TOGGLE
chrome.storage.local.get(['setting'],function (result) {
    if (result.setting === "enabled"){
        enableBtn.classList.add('active');
        disableBtn.classList.remove('active');
    }
    else {
        disableBtn.classList.add('active');
        enableBtn.classList.remove('active');
    }
});

//FUNCTIONS
function disableADD(){
    chrome.runtime.sendMessage('RemoveCss');
    disableBtn.classList.add('active');
    enableBtn.classList.remove('active');
}
function enableADD(){
    chrome.runtime.sendMessage('AddCss');
    enableBtn.classList.add('active');
    disableBtn.classList.remove('active');
}