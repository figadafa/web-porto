function enterSite() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
}

function revealOnScroll() {
  document.querySelectorAll('.fade-in-left, .fade-in-right, .slide-up, .fade-up').forEach(function(el) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('show');
    }else {
      el.classList.remove('show');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);



document.addEventListener('DOMContentLoaded', function() {
  const seeMoreBtn = document.getElementById('seeMore');
  if (seeMoreBtn) {
    seeMoreBtn.onclick = function(e) {
      e.preventDefault();
      window.location.href = "about.html";
    };
  }
});


//Section Lenguages

const skillData = {
  web: ["HTML", "CSS", "JavaScript"],
  programming: ["C++", "Java", "Python", "SQL"],
  tools: ["AWS"]
};

const container = document.getElementById("languages-container");
const cards = document.querySelectorAll(".skill-card");

function updateLanguages(skill) {
  if (!container || !skillData[skill]) return;
  container.innerHTML = "";
  skillData[skill].forEach((lang, index) => {
    const badge = document.createElement("span");
    badge.className =
      "badge-anim";
    badge.textContent = lang;
    container.appendChild(badge);


    // animasi muncul satu-satu
    setTimeout(() => {
      badge.classList.add("show");
    }, index * 150);
  });
}

// Default tampilkan Web Development
updateLanguages("web");

// Event listener untuk klik card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const skill = card.dataset.skill;
    updateLanguages(skill);
  });
});




