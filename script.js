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
    img.addEventListener("click", (e) => {
      photo.src = e.currentTarget.src;
      photo.addEventListener("load", resizePhoto, { once: true });
      on();
      const tmp = new Image();
      tmp.src = e.currentTarget.src.replace("thumb", "photos");
      tmp.onload = () => {
        photo.src = tmp.src;
      };
    });
  });
});

const resizePhoto = () => {
  if (photo.clientWidth > photo.clientHeight) {
    photo.style.width = "90%";
    photo.style.height = "auto";
  } else {
    photo.style.width = "auto";
    photo.style.height = "90%";
  }
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
