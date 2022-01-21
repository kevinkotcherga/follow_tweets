import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const searchMovies = (query) => {
      fetch(`https://api.twitter.com/2/tweets/${query}/recent\?query\=from%3Atwitterdev%20new%20-is%3Aretweet\&max_results\=10 -H "Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAOsoYQEAAAAAmZvHYANFajSKKnEu9ohdzQlDaK8%3DJXs4rDAbIbq0AG94gxrRsRDCDnAdpl0GUKhtnwcoeevVJTp0XU"`)
        .then(response => response.json())
        .then((data) => {
          data.Search.forEach((result) => {
            const movie =
            `<li class="list-inline-item">
                <div class="card" style="width: 18rem; height: 500px; padding: 10px; margin: 10px;">
                <img src="${users.read}"style="height: 400px;" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">${tweet.read}</p>
                  </div>
                </div>
            </li>`;
            results.insertAdjacentHTML("beforeend", movie);
          });
        });
    };

    const form = document.querySelector('#search-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // <-- to prevent <form>'s native behaviour
      const input = event.currentTarget.querySelector('.form-control');
      results.innerHTML = '';
      searchMovies(input.value);
    });
  }
}
