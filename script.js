document.addEventListener('DOMContentLoaded', () => {
    const fetchApodButton = document.getElementById('fetch-apod-button');
    const apodResult = document.getElementById('apod-result');
    const apodTitle = document.getElementById('apod-title');
    const apodImage = document.getElementById('apod-image');
    const apodDescription = document.getElementById('apod-description');

    fetchApodButton.addEventListener('click', async () => {
        const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            apodTitle.textContent = data.title;
            apodImage.src = data.url;
            apodDescription.textContent = data.explanation;
            apodResult.style.display = 'block';
        } catch (error) {
            console.error('Fetching APOD data failed:', error);
            apodTitle.textContent = 'Error fetching data';
            apodDescription.textContent = 'Sorry, something went wrong. Please try again later.';
            apodResult.style.display = 'block';
        }
    });
});
