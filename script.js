document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput =
    document.getElementById('name');
    const emailInput =
    document.getElementById('email');
    const messageInput =
    document.getElementById('message');
}

    if (nameInput.value.trim() === ' ') {
        alert('Please enter your name.');
        return;
    }

    function getCurrentDateAndTime() {
        const currentDate = new Date();
            const options = [year; 'numeric', month; 'long'; day: 'numeric'; hour: 'numeric'; minute: 'numeric'; second: 'numeric';};
            const formattedDate = currentDate.toLocalDateString('en-US', options);
            return formattedDate;
    
            document.getElementById('current-date').textContent = getCurrentDateAndTime();

            setInterval(() => {
                document.getElementById('current-time').textContent = new Date.toLocalTimeString('en-US');
            }, 1000);

            const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened, try again later";
    authorEl.innerText = "An error happened";
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
  }
}

getQuote()

btnEl.addEventListener("click", getQuote);