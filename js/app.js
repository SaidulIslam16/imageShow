const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

const displayPhotos = photos=>{
    photos.forEach(photo => {
        console.log(photo)
        const allPhotoDiv = document.getElementById('photo-card');
        const photoDiv = document.createElement('div');
        photoDiv.innerHTML = `
        <div class="col">
        <div class="card">
          <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
            <p class="card-text">Album ID: ${photo.albumId}</p>
            <button class="btn btn-primary" id="show-btn">Show Detials</button>
          </div>
        </div>
      </div>
        `;
        allPhotoDiv.appendChild(photoDiv);
    });
}

loadPhotos();