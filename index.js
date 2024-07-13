let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);





let signNowButton = document.getElementById("sign-now-button");

const addSignature = (event, person) => {
  const newSignature = document.createElement('p');
  newSignature.textContent = `🖊️ ${person.name} from ${person.school} made a proposal.`;
  const signaturesSection = document.querySelector('.signatures');
  signaturesSection.appendChild(newSignature);
  event.preventDefault();
};

let scaleFactor = 1;
const modalImage = document.getElementById('modal-image'); 

function scaleImage() {
  scaleFactor = (scaleFactor === 1) ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
}

function toggleModal(person) {
  const modal = document.getElementById('thanks-modal');
  const modalContent = document.getElementById('thanks-modal-content');
  modal.style.display = 'flex';
  modalContent.textContent = `Thank you, ${person.name}! Your suggestion has been submitted.`;
  const intervalId = setInterval(scaleImage, 500);
  setTimeout(() => {
    modal.style.display = 'none';
    clearInterval(intervalId);
  }, 4000);
}


const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    school: petitionInputs[1].value
  }
  for (let i = 0; i < petitionInputs.length - 1; i++) {
    if (petitionInputs[i].value == "") {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
  if (containsErrors == false) {
    addSignature(event, person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length - 1; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}
signNowButton.addEventListener('click', validateForm);






let likeButton = document.getElementById("like-btn");
let count = 0;

const addLike = () => {
  count = count + 1;
  likeButton.textContent = `❤️ ${count}`;
}

likeButton.addEventListener('click', addLike)




let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable"); document.querySelectorAll(".revealable");

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
      revealableContainers[i].classList.remove("active");
    }
  }
}

window.addEventListener('scroll', reveal)



const closeButton = document.getElementById('closeButton');
function hideModal() {
  const modal = document.getElementById('thanks-modal');
  modal.style.display = 'none';
}
closeButton.addEventListener('click', hideModal);






document.addEventListener('DOMContentLoaded', function () {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;

  document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});






