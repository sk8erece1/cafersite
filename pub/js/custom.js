$(document).ready(function () {
    var path = window.location.pathname;
    if (path != "/commands" && path != "/en" && path != "/commands/" && path != "/en/" && path != "/contact" && path != "/contact/" && navigator.language != "tr-TR" && navigator.language != "tr") {
        $(".nav-menu li:last").after("<li><a href='https://bot.eggsybot.xyz/en'>SWITCH TO ENGLISH</a></li>");
    }
});

/* ARAMA FONKSİYONU */
function ara() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("aramaKutusu");
    filter = input.value.toUpperCase();
    var tables = ["eglence", "kullanici", "yetkili", "ekstra"];
    tables.forEach(t => {
        table = document.getElementById(t);
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    })
}