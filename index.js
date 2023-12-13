const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

async function fetchDogImage() {
    try {
        const response = await fetch(dogApiUrl);
        const data = await response.json();
        processDogImageData(data);
    } catch (error) {
        console.error('Error fetching dog image data:', error);
    }
}

function processDogImageData(data) {
    const imageUrl = data.message;
    const dogImageElement = document.getElementById('dogImage');
    dogImageElement.src = imageUrl;
}

// ISS Location API
const issApiUrl = "http://api.open-notify.org/iss-now.json";

async function fetchIssLocation() {
    try {
        const response = await fetch(issApiUrl);
        const data = await response.json();
        processIssLocationData(data);
    } catch (error) {
        console.error('Error fetching ISS location data:', error);
    }
}

function processIssLocationData(data) {
    const longitude = data.iss_position.longitude;
    const latitude = data.iss_position.latitude;

    // 経度と緯度をHTMLに表示する例
    const longitudeElement = document.getElementById('longitude');
    const latitudeElement = document.getElementById('latitude');

    longitudeElement.textContent = `Longitude: ${longitude}`;
    latitudeElement.textContent = `Latitude: ${latitude}`;
}

// ページの読み込みが完了したときにデータを取得する
document.addEventListener('DOMContentLoaded', () => {
    fetchDogImage();
    fetchIssLocation();
});