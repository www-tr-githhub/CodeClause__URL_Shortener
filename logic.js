let newURL = document.getElementById("surl");
let coptButton = document.getElementById("tocopy");

coptButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}