const CFHeading = document.querySelector("#CFHeading");
const CFButton = document.querySelector("#CFButton");

let cf = 0;

CFButton.addEventListener("click", function () {
	cf += 1;
	CFHeading.innerHTML = `Your CF: ${CF}`;
});
