const inputField = document.querySelector('.inputField');
const card = document.querySelector('.card');
const cardText = document.querySelector('.cardText');

const fetchData = async (e) => {
    const date = inputField.value;
    if(date != '') {
        const response = await fetch('http://numbersapi.com/' + date);
        const data = await response.text();
        cardText.innerText = data;
        card.style.display = 'block';
    }
}

inputField.addEventListener('input', fetchData);