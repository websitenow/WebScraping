const script = document.createElement("script");
script.id = "selenium-scrapper";
script.innerHTML = `function getBase64(image) {
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
}`;
document.body.appendChild(script);
