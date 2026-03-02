const words = [
  "Hi,", // English
  "مرحبا,", // Arabic
  "ආයුබෝවන්,", // Sinhala
  "வணக்கம்,", // Tamil
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 1500;

const introText = document.getElementById("intro-text");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    // Typing
    introText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => (isDeleting = true), delayBetweenWords);
    }
  } else {
    // Deleting
    introText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;

      //   // Switch direction for Arabic
      //   if (words[wordIndex] === "مرحبا") {
      //     document.body.style.direction = "rtl";
      //   } else {
      //     document.body.style.direction = "ltr";
      //   }
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();

//

gsap.registerPlugin(ScrollTrigger);

const badges = gsap.utils.toArray(".skills-container .badge");

// Shuffle function
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const shuffledBadges = shuffle(badges);

gsap.to(shuffledBadges, {
  scrollTrigger: {
    trigger: "#coreskills",
    start: "top 80%",
  },
  opacity: 1,
  scale: 1,
  duration: 0.6,
  ease: "back.out(1.7)",
  stagger: 0.1,
});

//

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section-header").forEach((header) => {
  const title = header.querySelector("h2");
  const line = header.querySelector("hr");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: header,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  tl.to(title, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    ease: "power4.out",
  }).to(
    line,
    {
      width: "50%",
      opacity: 1,
      duration: 0.8,
      ease: "expo.out",
    },
    "-=0.6",
  );
});
