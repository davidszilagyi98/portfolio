function close() {
  document.querySelector("#eegy").addEventListener("click", function () {
    document.querySelector("#mobileicon").checked = false;
  });
}

close();

// USING RELLAX
let rellax = new Rellax(".rellax");

function scrollAppears() {
  const introText = document.querySelector(".creating");
  const introParagraph = document.querySelector(".user-focus");
  const introPosition = introText.getBoundingClientRect().top;
  const introParagraphPosition = introParagraph.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (
    introPosition < screenPosition &&
    introParagraphPosition < screenPosition < screenPosition
  ) {
    introText.classList.add("creating_appear");
    introParagraph.classList.add("creating_appear");
    paragraphOne.classList.add("video-paragraph-appear");
    paragraphTwo.classList.add("video-paragraph-appear");
  }
}

window.addEventListener("scroll", scrollAppears);

// ANIMATE IMAGES WITH FOR LOOP
const illustrations = document.querySelectorAll(".illustration");

illustrations.forEach((illustration) => {
  illustration.addEventListener("mouseover", function () {
    illustration.classList.add("illustration-effect");
  });

  illustration.addEventListener("mouseout", function () {
    illustration.classList.remove("illustration-effect");
  });
});

// VIDEO TEXT FADE IN

function scrollAppear() {
  var textFade = document.querySelector(".text_fade");
  var textPosition = textFade.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if (textPosition < screenPosition) {
    textFade.classList.add("text_appear");
  }
}

window.addEventListener("scroll", scrollAppear);

function scrollAppear2() {
  var textFade2 = document.querySelector(".text_fade2");
  var textPosition2 = textFade2.getBoundingClientRect().top;
  var screenPosition2 = window.innerHeight / 1.3;

  if (textPosition2 < screenPosition2) {
    textFade2.classList.add("text_appear2");
  }
}

window.addEventListener("scroll", scrollAppear2);
