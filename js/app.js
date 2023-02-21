const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

const displayPhotos = photos=>{
    photos.forEach(photo => {
        // console.log(photo)
        const allPhotoDiv = document.getElementById('photo-card');
        const photoDiv = document.createElement('div');
        photoDiv.innerHTML = `
        <div class="col">
        <div class="card">
          <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
            <p class="card-text">Album ID: ${photo.albumId}</p>
            <button class="btn btn-primary" onclick = "loadPhotoDetials(${photo.id})">Show Detials</button>
          </div>
        </div>
      </div>
        `;
        allPhotoDiv.appendChild(photoDiv);
    });
}

const loadPhotoDetials = (id)=>{
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPhotoDetials(data))
}

const displayPhotoDetials = (photo)=>{
    console.log(photo)
    const photoDetials = document.getElementById('photo-details');
    photoDetials.innerHTML = `
    <div class="card w-50 mx-auto">
    <img src="${photo.url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${photo.title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
    `
}

loadPhotos();