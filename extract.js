// Extract macro details from the page.
function extract() {
    let dishName = document.getElementsByClassName("css-71ts4s")[0].innerText;
    let calories = document.getElementsByClassName("css-1v9zblq")[0].innerText;
    let carbs = document.getElementsByClassName("css-1smmr1t")[0].innerText.slice(0, -1);
    let fats = document.getElementsByClassName("css-1smmr1t")[1].innerText.slice(0, -1);
    let proteins = document.getElementsByClassName("css-1smmr1t")[2].innerText.slice(0, -1);

    // Metadata.
    let date = new Date().toDateString();

    // Construct the string to copy.
    let val = `${date},${dishName},${calories},${carbs},${proteins},${fats}`;

    // Copy to clipboard.
    navigator.clipboard.writeText(val);
}

extract();