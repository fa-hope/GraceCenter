function PutNameAuto() {
      let name = document.getElementById("name").value;
      let cible = document.getElementById("namerep");
      cible.innerHTML = name;
}
setInterval(PutNameAuto, 1000);

function telecharger() {
      let button = document.getElementById("downbutton");
      button.style.display = "none";
      window.print();
}