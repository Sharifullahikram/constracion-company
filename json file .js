// Number of testimonials to show by default
const DEFAULT_TESTIMONIAL_LIMIT = 3;

const testimonialsGrid = document.getElementById("testimonialsGrid");

// Helper: get random unique testimonials
function getRandomTestimonials(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

fetch("testimonials.json")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to load testimonials.json");
    return response.json();
  })
  .then((testimonials) => {
    testimonialsGrid.innerHTML = "";

    // Pick 3 random testimonials
    const randomTestimonials = getRandomTestimonials(testimonials, DEFAULT_TESTIMONIAL_LIMIT);

    randomTestimonials.forEach((item) => {
      const card = document.createElement("article");
      card.className = "testimonial-card";

      card.innerHTML = `
        <p>“${item.message}”</p>
        <div class="user-info">
          <strong>${item.name}</strong>
          <span>${item.role}</span>
        </div>
      `;
      testimonialsGrid.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Testimonials API Error:", error);
    testimonialsGrid.innerHTML = `<p style="text-align:center;">Testimonials could not be loaded.</p>`;
  });