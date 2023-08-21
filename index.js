// Searchbar
const searchEngines = {
  Google: "https://www.google.com/search?q=",
  DuckDuckGo: "https://duckduckgo.com/?q=",
  Bing: "https://www.bing.com/search?q=",
  Yahoo: "https://search.yahoo.com/search?p=",
};
const searchField = document.getElementById("search-field");
const clearFieldButton = document.getElementById("clear-field");
const searchEngine = "Duckduckgo";

if (!Object.keys(searchEngines).includes(searchEngine)) {
  searchEngine = "Duckduckgo";
}

var searchUrl = searchEngines[searchEngine];

searchField.placeholder = "Search " + searchEngine + "...";

// Check searchbar for keystrokes
searchField.addEventListener("keyup", function (event) {
  // If there is some text in searchbar, display clear-field button
  if (searchField.value != "") {
    clearFieldButton.style.visibility = "visible";
  } else {
    clearFieldButton.style.visibility = "hidden";
  }

  // If last keystroke was "Enter" treat it as search-button is clicked
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("search-button").click();
  }
});

// Clear text and keep searchbar in focus
function clearField() {
  searchField.value = "";
  clearFieldButton.style.visibility = "hidden";
  searchField.focus();
}

// Search query
function search() {
  if (searchField.value != "") {
    var val = searchField.value;
    window.open(searchUrl + val, "_self");
  }
  clearField();
}

// Show Scrollbar on scrolling
window.addEventListener("scroll", function showScrollbar() {
  if (window.scrollY > 0) {
    if (!document.body.classList.contains("visible-scrollbar")) {
      document.body.classList.add("visible-scrollbar");
      setTimeout(hideScrollbar, 1500);
    }
  } else {
    document.body.classList.remove("visible-scrollbar");
  }
});

// Hide Scrollbar
function hideScrollbar(e) {
  e.target.classList.remove("visible-scrollbar");
}
