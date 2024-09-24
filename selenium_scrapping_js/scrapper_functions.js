function getBase64(image) {
  return fetch(image.src)
    .then(response => response.blob())
    .then(blob => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    });
};

function getImage() {
  const img = document.querySelector("img:not([data-seleniumImageIsGetted])");
  if (img) {
    img.setAttribute("data-seleniumImageIsGetted", "true")
  }
  return img
}
