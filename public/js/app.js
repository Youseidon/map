const getVideo = (quality, result) => {
    const url = '/map?quality=' + quality + '';
    fetch(url).then((response) => {
        response.json().then((data) => {
            result(data)
        })
    });
}
const MapForm = document.querySelector("form");
const video = document.querySelector("#myVideo");

MapForm.addEventListener('submit', (e) => {
    if (video.hasChildNodes()) {
        video.removeChild(video.childNodes[0]);
    }
    e.preventDefault();
    const btn = e.submitter
    getVideo(btn.id, (data) => {
        const source = document.createElement('source');
        source.src = data.result;
        source.type = "video/mp4";
        video.appendChild(source);
        video.load();
        video.play();
    })

})