// Set these to your full profile URLs. Use "mailto:you@example.com" for Gmail.
const socialLinks = {
  instagram: "",
  facebook: "",
  tiktok: "",
  x: "",
  gmail: "",
};

for (const link of document.querySelectorAll("[data-social]")) {
  const destination = socialLinks[link.dataset.social];
  if (destination) {
    link.href = destination;
  } else {
    link.setAttribute("aria-disabled", "true");
  }
}

const about = document.querySelector("dialog");
document.querySelector("[data-info]").addEventListener("click", () => about.showModal());
