// FAQ Dynamic Section Using JSON API (5 random per refresh)
const faqList = document.getElementById("faqList");
const FAQ_PER_PAGE = 5;

// Load FAQ data from JSON file
async function loadFAQ() {
  try {
    faqList.innerHTML = `<p class="faq-loading">پوښتنې لوډیږي...</p>`;

    const response = await fetch("faq.json");
    if (!response.ok) throw new Error("FAQ data could not be loaded");

    const faqs = await response.json();

    faqList.innerHTML = "";

    // Shuffle array
    const shuffled = faqs.sort(() => 0.5 - Math.random());

    // Get first 5 questions
    const selectedFAQs = shuffled.slice(0, FAQ_PER_PAGE);

    selectedFAQs.forEach((faq, index) => {
      const faqItem = document.createElement("details");
      faqItem.className = "faq-item";

      // First FAQ open by default
      if (index === 0) faqItem.open = true;

      const summary = document.createElement("summary");
      summary.textContent = faq.question;

      const answer = document.createElement("p");
      answer.textContent = faq.answer;

      faqItem.appendChild(summary);
      faqItem.appendChild(answer);

      faqList.appendChild(faqItem);
    });

    accordionFAQ();
  } catch (error) {
    faqList.innerHTML = `
      <p class="faq-error">
        FAQ معلومات لوډ نه شول. مهرباني وکړئ وروسته بیا هڅه وکړئ.
      </p>
    `;
    console.error("FAQ Error:", error);
  }
}

// Accordion functionality - only one open at a time
function accordionFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) otherItem.open = false;
        });
      }
    });
  });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", loadFAQ);