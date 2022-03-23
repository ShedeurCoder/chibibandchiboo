document.getElementById('searchf').onsubmit = () => {
    const sv = document.getElementById("search").value;
    window.location.href = "https://www.google.com/search?q=" + sv.replace(" ", "+");
    return false;
}
document.getElementById('urlf').onsubmit = () => {
    const uv = document.getElementById("url").value;
    if (uv.startsWith("http://") || uv.startsWith("https://") || uv.startsWith("ftp://")) {
        window.location.href = uv;
        return false;
    }
    window.location.href = "https://" + uv;
    return false;
}