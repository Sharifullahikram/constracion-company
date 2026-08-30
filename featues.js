const featureList = document.getElementById("featureList");

// Load Features from JSON (API)
async function loadFeatures() {
  try {
    featureList.innerHTML = `<p class="loading">فیچرونه لوډیږي...</p>`;
    const response = await fetch("features.json");
    if (!response.ok) throw new Error("Features data could not be loaded");
    const features = await response.json();

    featureList.innerHTML = "";

    features.forEach(feature => {
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

  } catch (error) {
    featureList.innerHTML = `<p class="error">فیچرونه لوډ نه شول، وروسته هڅه وکړئ.</p>`;
    console.error("Feature Error:", error);
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", loadFeatures);