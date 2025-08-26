const marquee = document.getElementById("marquee-content");
const faqContainer = document.getElementById("faq-container");

const faqs = [
  {
    question: "Is Spark Free To Use?",
    answer:
      "Yes! You can use Spark for free. We also have optional plans if you want more features.",
    isOpen: false,
  },
  {
    question: "Is Spark Safe?",
    answer:
      "Yes, Spark is safe to use and follows industry security standards.",
    isOpen: false,
  },
  {
    question: "Can I Use Spark Outside My Country?",
    answer: "Absolutely, Spark works globally with internet access.",
    isOpen: false,
  },
  {
    question: "What Makes Spark Different?",
    answer:
      "Spark offers unique features, seamless integration, and a user-friendly interface.",
    isOpen: false,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const span = document.getElementById("changing-span");
  const words = ["Warm", "Real", "Safe"];
  let i = 0;

  setInterval(() => {
    // Change word instantly
    span.textContent = words[i % words.length];

    // Trigger bounce-in
    span.classList.remove("animate-in");
    void span.offsetWidth; // force reflow so animation restarts
    span.classList.add("animate-in");

    i++;
  }, 3000);
});


// Duplicate marquee content for seamless loop
document.addEventListener("DOMContentLoaded", function () {
  const marquee = document.getElementById("marquee-content");
  marquee.innerHTML += marquee.innerHTML;
});

let pos = 0;
function animateMarquee() {
  pos -= 1;
  if (Math.abs(pos) >= marquee.scrollWidth / 2) {
    pos = 0;
  }
  marquee.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animateMarquee);
}
// Duplicate content for seamless loop
marquee.innerHTML += marquee.innerHTML;
animateMarquee();

function renderFaqs() {
  faqContainer.innerHTML = "";

  faqs.forEach((faq, index) => {
    // Create question container
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("faq-question");
    questionDiv.textContent = faq.question;

    // Arrow icon
    const arrow = document.createElement("span");
    arrow.classList.add("arrow");
    arrow.textContent = "▼";
    if (faq.isOpen) arrow.classList.add("open");
    questionDiv.appendChild(arrow);

    // Create answer div
    const answerDiv = document.createElement("div");
    answerDiv.classList.add("faq-answer");
    if (faq.isOpen) answerDiv.classList.add("open");
    answerDiv.textContent = faq.answer;

    // Append question and answer to container
    faqContainer.appendChild(questionDiv);
    faqContainer.appendChild(answerDiv);

    // Add click event to toggle
    questionDiv.addEventListener("click", () => {
      faqs[index].isOpen = !faqs[index].isOpen;
      renderFaqs();
    });
  });
}

renderFaqs();
