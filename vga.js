function myFunction() {
    var x = document.getElementById("myContent");
    var btn = document.getElementsByTagName("button")[0];
    if (x.style.display === "none") {
        x.style.display = "block";
        btn.innerHTML = "Lihat Lebih Sedikit";
    } else {
        x.style.display = "none";
        btn.innerHTML = "Lihat Selengkapnya";
    }
}