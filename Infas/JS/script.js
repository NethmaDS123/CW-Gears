//function created to get image & description and display enlarged and formatted
function showImage(imageSrc, description) {
    document.getElementById('Nimage').src = imageSrc;
    document.getElementById('description').innerHTML = description;
}

const themes = ['theme1', 'theme2', 'theme3', 'theme4'];
//JS to change theme when clicked
document.querySelectorAll('td').forEach(td =>
{
    td.addEventListener('click', function()
    {
        const selectedTheme = this.className;
		document.body.className = selectedTheme;
        if (selectedTheme === 'theme4') {
            document.body.style.backgroundColor = generateRandomColor();
            document.body.style.color = generateRandomColor();
        } else {
            //changing variable to the required theme colours
            document.body.style.backgroundColor = '';
            document.body.style.Color = '';
        }
	});
});

//Generates a set of digits from a given array which gives a randomised HEXA value
function generateRandomColor() {
    const hexChars = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += hexChars[Math.floor(Math.random() * 16)];
    }
    return hex;
}

//Functions to adjust text size
function increaseFontSize() {
    //get current size
	var currentSize = parseFloat(document.body.style.fontSize) || 1;
    //increase the current size
	var newSize = currentSize + 0.25;
    //make it the main size of the website
	document.body.style.fontSize = newSize + "vw";
}
function decreaseFontSize() {
	var currentSize = parseFloat(document.body.style.fontSize) || 1;
	var newSize = currentSize - 0.25;
	document.body.style.fontSize = newSize + "vw";
}
