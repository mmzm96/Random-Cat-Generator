function catgen() {
    var photo = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    photo.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    //photo.src = "api.aladhan.com/v1/calendar";
    div.appendChild(photo);
}

function reset() {
    location.reload(true);
}
