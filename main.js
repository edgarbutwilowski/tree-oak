let sendmailButton = document.getElementById("sendmail");
if(sendmailButton){
    sendmailButton.onclick = function() {
        let vornameFormular = document.getElementById("vorname");
        let vornameText = "";
        if(vornameFormular) vornameText = vornameFormular.value;

        let nachnameFormular = document.getElementById("nachname");
        let nachnameText = "";
        if(nachnameFormular) nachnameText = nachnameFormular.value;

        let kontaktFormular = document.getElementById("kontaktformular");
        let kontaktText = "";
        if(kontaktFormular) kontaktText = kontaktFormular.value;
        window.open("mailto:raphael_zahner@hotmail.com?subject=Anfrage an Tree Oak&body=" 
            + kontaktText + "%0A%0A" + vornameText + " " + nachnameText, "_blank", "noreferrer");
    }    
}