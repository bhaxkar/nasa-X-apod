document.getElementById('fetch-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    fetchImage();
});

async function fetchImage(){
    const dateInput = document.getElementById('datepicker');
    const date = dateInput.value;

    if(!date){
        alert("Please select a date");
        return;
    }

    try{
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${config.API_KEY}&date=${date}`);
        if(!response.ok){
            throw new Error(`HTTP error! status : ${response.status}`);
        }
        const data = await response.json();

        if(data){
            updateUI(data);
        }

    }
    catch(error){
        console.error('Error fetching image:', error);
        alert('Error fetching image. Please try again later.');
    }
}

function updateUI(data) {
    const elements = {
        container: createElement('div', 'image-container', '#fetchedItem'),
        title: createElement('h4', 'image-title-nasa', '.image-container'),
        image: createElement('img', 'fetched-image', '.image-container'),
        explanation: createElement('div', 'exp-container', '#fetchedItem')
    };

    elements.title.textContent = data.title;
    elements.image.src = data.url;
    elements.image.alt = data.title;
    elements.image.style.display = 'block';
    elements.explanation.textContent = data.explanation;
}

function createElement(tagName, className, parentSelector){
    let element = document.querySelector(`.${className}`);
    if(!element){
        element = document.createElement(`${tagName}`);
        element.setAttribute('class', `${className}`);
        document.querySelector(`${parentSelector}`).appendChild(element);
    }
    return element;
}


const shareButton = document.querySelector('.share-button');
shareButton?.addEventListener('click', () => shareContent());

async function shareContent(){

    const shareData = {
        title: 'APOD - Astronomy Picture of the Day',
        text: 'Check out the astronomy picture!',
        url: window.location.href
    };

    try{
        if(navigator.share){
            navigator.share(shareData);
            console.log('Successfully shared');
        }else{
            copyToClipboard(window.location.href);
            alert('Sharing not supported. Link copied to clipboard!');
        }
    }catch(error){
        console.error('Error sharing:', error);
        alert('Failed to share content');
    }

}
