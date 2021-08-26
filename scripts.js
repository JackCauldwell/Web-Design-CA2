// Array store all health tips
var tips = [
  'Eat a healthy diet.',
  'Consume less salt and sugar',
  'Reduce intake of harmful fats.',
  'Avoid harmful use of alcohol.',
  'Dont smoke',
  'Check your blood pressure regularly',
  'Get vaccinated',
  'Get Tested',
  'Cover your mouth when coughing or sneezing',
  'Prevent mosquito bites',
  'Follow traffic laws',
  'Drink only safe water',
  'Talk to someone you trust if you are feeling down',
  'Take antibiotics only as prescribed',
  'Clean your hands properly',
  'Prepare your food correctly',
  'Have regular check-ups',
];

// This function will be invoked to display random new tip from the array
function randomTip() {
  // Generating random number with in the size of array
  var randomNum = Math.floor(Math.random() * tips.length);

  // Displaying the random tip to HTML
  document.getElementById('diplayTip').innerHTML = tips[randomNum];
}

// Clears the form data whenever user press submit button
document.addEventListener('submit', function (event) {
  event.preventDefault();
  event.target.reset();
});
