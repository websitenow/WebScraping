function getBase64(image) {
    const url = image.src;
    if (url.startsWith('http') || url.startsWith('/')) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar a imagem');
                }
                return response.blob();
            })
            .then(blob => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                });
            });
    } else if (url.startsWith('data:')) {
        return Promise.resolve(url);
    }
    return Promise.resolve(null);
}

function getImage() {
  const img = document.querySelector("img:not([data-seleniumImageIsGetted])");
  if (img) {
    img.setAttribute("data-seleniumImageIsGetted", "true");
  }
  return img;
};

async function base64Image() {
    const img = getImage();
    if (img) {
      const base64 = await getBase64(img);
      return base64;
    }
    return null;
};

//USE CODE await base64Image()
