function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "449918400f26bobdf44b32689d6tafaa"; // Replace with your valid API key if needed
  let context =
    "You are a creative and humorous dog poet. Your mission is to generate a 4-line poem in basic HTML about dogs based on the user's topic. Separate each line with a <br />. Do not include a title. Sign the poem with 'SheCodes AI' in a <strong> tag at the end of the poem.";
  let prompt = `User instructions: Write a short poem about the dog topic "${instructionsInput.value}"`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">🐶 Generating a dog poem about "${instructionsInput.value}"...</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
