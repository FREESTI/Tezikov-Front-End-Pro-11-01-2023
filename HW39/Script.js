let options = [
  { name: "smile", count: 0 },
  { name: "neutral", count: 0 },
  { name: "sad", count: 0 },
  { name: "angry", count: 0 },
  { name: "heart", count: 0 },
];

function updateSmileys() {
  let smileysDiv = document.getElementById("smileys");

  smileysDiv.innerHTML = "";

  options.forEach((option) => {
    let optionDiv = document.createElement("div");
    optionDiv.className = "option";

    let smiley = document.createElement("span");
    smiley.className = "smiley";
    smiley.innerHTML = getSmiley(option.name);
    optionDiv.appendChild(smiley);

    let count = document.createElement("span");
    count.className = "count";
    count.innerHTML = option.count;
    optionDiv.appendChild(count);

    optionDiv.addEventListener("click", () => {
      option.count++;
      updateSmileys();
    });

    smileysDiv.appendChild(optionDiv);
  });
}

function getSmiley(name) {
  switch (name) {
    case "smile":
      return "&#x1F600;";
    case "neutral":
      return "&#x1F610;";
    case "sad":
      return "&#x1F61E;";
    case "angry":
      return "&#x1F621;";
    case "heart":
      return "&#x2764;";
    default:
      return "";
  }
}

updateSmileys();
