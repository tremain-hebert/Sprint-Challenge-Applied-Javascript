// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((res) => {
        console.log(`Here is the res:`, res)
        for (let articles in res.data) {
            cardsContainer.appendChild(articles);
        }
    })
    .catch((err) => {
        console.log(`There was and error:`, err)
    });

let cardsContainer = document.querySelector('.cards-container');

function CardBuilder(article) {
    //Create Elements
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let authorDiv = document.createElement('div');
    let imgContainer = document.createElement('div');
    let image = document.createElement('img');
    let authorName = document.createElement('span');

    //Styling
    card.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');
    image.setAttribute('src', `${article.data.articles}`)

    //Content
    headline.textContent = `${article.data.articles}`

    //Append
    card.appendChild(headline);
    card.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(image);
    authorDiv.appendChild(authorName);

    return card;
}

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((res) => {
        console.log(`These are the articles: `, res);

    })
    .catch((err) => {
        console.log(`There was an error: `, err);
    });