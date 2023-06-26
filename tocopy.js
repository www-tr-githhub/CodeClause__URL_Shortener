let btn = document.getElementById("shorten");

btn.addEventListener('click', short);


async function short(){
    let lurl = document.getElementById("lurl").value;
    let surl = document.getElementById("surl");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${lurl}`);
    const data = await result.json();

    surl.value = data.result.short_link2;
}
