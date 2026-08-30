const featureList = document.getElementById("featureList");
const FEATURE_PER_PAGE = 6; // only show 6 at a time
let featuresData = [];
let currentIndex = 0;

// Shuffle array helper
function shuffleArray(array) {
  return array.sort(() => 0.5 - Math.random());
}

// Load features from JSON
async function loadFeatures() {
  try {
    featureList.innerHTML = `<p class="loading">فیچرونه لوډیږي...</p>`;
    const response = await fetch("features.json");
    if (!response.ok) throw new Error("Features data could not be loaded");

    featuresData = await response.json();

    // Shuffle features to show random 6 on refresh
    featuresData = shuffleArray(featuresData);
    currentIndex = 0;

    showNextFeatures();

  } catch (error) {
    featureList.innerHTML = `<p class="error">فیچرونه لوډ نه شول، وروسته هڅه وکړئ.</p>`;
    console.error("Feature Error:", error);
  }
}

// Show next 6 features
function showNextFeatures() {
  featureList.innerHTML = "";

  const selectedFeatures = featuresData.slice(currentIndex, currentIndex + FEATURE_PER_PAGE);

  selectedFeatures.forEach(feature => {
    const card = document.createElement("article");
    card.className = "feature-card";

    const icon = document.createElement("div");
    icon.className = "icon";
    icon.innerHTML = `<i class="${feature.icon}"></i>`;

    const title = document.createElement("h3");
    title.textContent = feature.title;

    const desc = document.createElement("p");
    desc.textContent = feature.description;

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(desc);

    featureList.appendChild(card);
  });

  // Update index for next button
  currentIndex += FEATURE_PER_PAGE;

  // Loop back if we reach the end
  if (currentIndex >= featuresData.length) currentIndex = 0;
}

// Next Features button
const nextBtn = document.createElement("button");
nextBtn.textContent = "نور فیچرونه";
nextBtn.className = "btn btn-primary";
nextBtn.addEventListener("click", showNextFeatures);
featureList.parentElement.appendChild(nextBtn);

document.addEventListener("DOMContentLoaded", loadFeatures);