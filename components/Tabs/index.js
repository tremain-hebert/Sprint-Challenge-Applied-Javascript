// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios
.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((res) => {
        console.log(`Here is the data:`, res);
    })
    .catch((err) => {
        console.log(`There was an error:`, err);
    });

function buildTab(topic) {
    //Create Element
    let tab = document.createElement('div');

    //Styling
    tab.classList.add('tab');

    //Content
    tab.textContent = `${topic}`;

    return tab;
}

let topics = document.querySelector('.topics');

axios
.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((res) => {
        console.log('Here are the topics:', res);
        res.data.topics.forEach((topic) => {
            topics.appendChild(buildTab(topic));
        });
    })
    .catch((err) => {
        console.log(`There was an error: `, err)
    });