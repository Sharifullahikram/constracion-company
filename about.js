const stepsList = document.getElementById("stepsList");

// Load steps from JSON (API)
async function loadSteps() {
  try {
    stepsList.innerHTML = `<p class="loading">مرحلې لوډیږي...</p>`;

    const response = await fetch("steps.json");
    if (!response.ok) throw new Error("Steps data could not be loaded");

    const steps = await response.json();
    stepsList.innerHTML = "";

    steps.forEach(step => {
      const card = document.createElement("div");
      card.className = "step-card";

      const icon = document.createElement("div");
      icon.className = "step-number";
      icon.textContent = step.icon;

      const title = document.createElement("h3");
      title.textContent = step.title;

      const desc = document.createElement("p");
      desc.textContent = step.description;

      card.appendChild(icon);
      card.appendChild(title);
      card.appendChild(desc);

      stepsList.appendChild(card);
    });

  } catch (error) {
    stepsList.innerHTML = `<p class="error">مرحلې لوډ نه شوې، وروسته هڅه وکړئ.</p>`;
    console.error("Steps Error:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadSteps);