// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];
  document.getElementById("country").addEventListener("input", e => {
    let suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";
    countryList.forEach(country => {
      if (country.startsWith(e.target.value)) {
        suggestions.innerHTML += country + "<br>";
      };
    });
  });