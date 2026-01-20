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
  const span = document.getElementById("changing-span");
  if (span) {
    const words = ["Warm", "Real", "Safe"];
    let i = 0;
    setInterval(() => {
      span.textContent = words[i % words.length];
      span.classList.remove("animate-in");
      void span.offsetWidth;
      span.classList.add("animate-in");
      i++;
    }, 3000);
  }

  if (marquee) {
    marquee.innerHTML += marquee.innerHTML;
  }
});

// Marquee animation only if element exists
if (marquee) {
  let pos = 0;
  function animateMarquee() {
    pos -= 1;
    if (Math.abs(pos) >= marquee.scrollWidth / 2) pos = 0;
    marquee.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animateMarquee);
  }
  animateMarquee();
}

// FAQ rendering only if container exists
function renderFaqs() {
  if (!faqContainer) return;
  faqContainer.innerHTML = "";
  faqs.forEach((faq, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("faq-question");
    questionDiv.textContent = faq.question;
    const arrow = document.createElement("span");
    arrow.classList.add("arrow");
    arrow.textContent = "▼";
    if (faq.isOpen) arrow.classList.add("open");
    questionDiv.appendChild(arrow);
    const answerDiv = document.createElement("div");
    answerDiv.classList.add("faq-answer");
    if (faq.isOpen) answerDiv.classList.add("open");
    answerDiv.textContent = faq.answer;
    faqContainer.appendChild(questionDiv);
    faqContainer.appendChild(answerDiv);
    questionDiv.addEventListener("click", () => {
      faqs[index].isOpen = !faqs[index].isOpen;
      renderFaqs();
    });
  });
}

if (faqContainer) renderFaqs();

 document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const menuIconTop = document.getElementById('menu-icon-top');
    const menuIconMiddle = document.getElementById('menu-icon-middle');
    const menuIconBottom = document.getElementById('menu-icon-bottom');
    
    function toggleMenu() {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      
      // Toggle menu visibility
      menuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
      
      // Toggle hamburger to X animation
      if (!isExpanded) {
        // Open animation
        menuIconTop.style.transform = 'rotate(45deg) translate(5px, 6px)';
        menuIconMiddle.style.opacity = '0';
        menuIconBottom.style.transform = 'rotate(-45deg) translate(5px, -6px)';
      } else {
        // Close animation
        menuIconTop.style.transform = 'none';
        menuIconMiddle.style.opacity = '1';
        menuIconBottom.style.transform = 'none';
      }
      
      // Prevent body scrolling when menu is open
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    }
    
    // Menu button click
    menuButton.addEventListener('click', toggleMenu);
    
    // Overlay click to close
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on links (optional)
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        toggleMenu();
      }
    });
  });
