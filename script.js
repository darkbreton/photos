const overlay = document.createElement("div");
overlay.id = "overlay";
overlay.addEventListener("click", off);

const photo = document.createElement("img");
photo.id = "photo";
photo.alt = "photo";

document.addEventListener("DOMContentLoaded", () => {
  overlay.appendChild(photo);
  document.body.appendChild(overlay);

  document.querySelectorAll(".gallery img").forEach((img) => {
    img.addEventListener("click", loadImg);
  });
});

function loadImg(e) {
  photo.src = e.currentTarget.src;
  photo.style.width = "auto";
  photo.style.height = "auto";
  photo.addEventListener("load", resizePhoto, { once: true });
  on();
  const tmp = new Image();
  tmp.src = e.currentTarget.src.replace("thumb", "photos");
  tmp.addEventListener(
    "load",
    () => {
      photo.src = tmp.src;
    },
    { once: true }
  );
}

const resizePhoto = () => {
  const photo = document.getElementById("photo");
  const maxW = 0.9 * window.outerWidth;
  const maxH = 0.9 * window.outerHeight;
  const photoRatio = photo.clientWidth / photo.clientHeight;

  const w = Math.min(maxW, maxH * photoRatio);
  const h = w / photoRatio;

  photo.style.width = w + "px";
  photo.style.height = h + "px";
};

document.addEventListener("keydown", handleKeyboard);

function handleKeyboard(event) {
  if (event.key === "Escape") {
    off();
  }
}

function on() {
  document.getElementById("overlay").style.display = "flex";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
