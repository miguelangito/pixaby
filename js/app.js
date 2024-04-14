const btn_zoom = document.querySelector(".btn-zoom")
const container = document.querySelector(".img-container");

async function getImages() {
  try {
    const URL = `https://pixabay.com/api/?key=41911933-b1b5cda18a9e20d0315aa3b3e`;
    const response = await fetch(URL);
    const data = await response.json();
    printImages(data.hits);
  } catch (error) {
    console.log(error.status);
  }
}

function printImages(images) {
  console.log(images);
  images.forEach((imag) => {  
    container.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img src="${imag.largeImageURL}" id="img-card" class="card-img-top" alt="image">
        <div class="card-body">
          <a class="btn-zoom" href="${imag.largeImageURL}" target="_blank">zoom in</a>
        </div>
    </div>
    `;
  });
}

getImages()