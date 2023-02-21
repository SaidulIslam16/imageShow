const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

const displayPhotos = photos=>{
    photos.forEach(photo => {
        console.log(photo)
    });
}

loadPhotos();