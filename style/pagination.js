// pagination
let pagination = document.createElement("div");
pagination.setAttribute("id", "pagination");
document.body.append(pagination);

// previous
pagination = document.getElementById('pagination');
const previous = document.createElement("div");
previous.setAttribute("id", "previous");
pagination.append(previous);

//-10
const lessTen = document.createElement("div");
lessTen.setAttribute("id", "lessTen");
pagination.append(lessTen);

//-100
const lessHundred = document.createElement("div");
lessHundred.setAttribute("id", "lessHundred");
pagination.append(lessHundred);

//+10
const moreTen = document.createElement("div");
moreTen.setAttribute("id", "moreTen");
pagination.append(moreTen);

//+100
const moreHundred = document.createElement("div");
moreHundred.setAttribute("id", "moreHundred");
pagination.append(moreHundred);

// suivant
const next = document.createElement("div");
next.setAttribute("id", "next");
pagination.append(next);

//
function displayPage(nbPage) {
    
    for (let i = 1; i <= nbPage; i++) {
        
        const button = document.createElement("button");
        button.setAttribute("id", `button${i}`);
        button.setAttribute("class", "button");
        button.innerHTML = i;
        document.body.append(button);

        button.addEventListener("click", () => {

            const fr_url = 'language=fr-FR';
            const base_url = ' https://api.themoviedb.org/3/';
            const movies_url = 'movie/popular';
            const page_url = 'page=';
            const imageBase_url ='https://image.tmdb.org/t/p/w500';
            const key = 'api_key=b788cc72df375c80e5b1d9b0483059ac'

            // select element
            const main = document.querySelector('#main');
            const form = document.querySelector("#form");
            const search = document.querySelector("#search");

            // somme function
            async function getMovies(url) {

                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzg4Y2M3MmRmMzc1YzgwZTViMWQ5YjA0ODMwNTlhYyIsInN1YiI6IjY0NjFmNjBhNmUwZDcyMDBmZjRjMzYyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y3SC3KH3xrkxqQ0h7HzJAE5nsPW1fMQbVPmhZ_9isZk'
                    }
                };
                
                const request = await fetch(url, options);
                const data = await request.json();
                console.log(request);
                console.log(data);
                results = data.results;
                console.log(results);

                main.innerHTML = '';
                
                results.forEach(movie => {
                
                    const div = document.createElement('div');
                    div.setAttribute('class', 'movie');
                    div.innerHTML = `<div class="image">
                    <img src="${imageBase_url+movie.backdrop_path}" alt="image">
                    </div>

                    <div class="movie-info">
                        <h3>${movie.title}</h3>
                        <span class="${getColor(movie.vote_average)}">${movie.vote_average}</span>
                    </div>

                    <div class="overview">

                        <h3>Description</h3>
                        ${movie.overview}
                    </div>`;

                    main.appendChild(div);
                });
                
            }

            function getColor(vote) {
                if(vote >= 8){
                    return 'green';
                }
                else if(vote >= 5) {
                    return 'orange';
                }
                else {
                    return 'red'
                }
            }

            getMovies(base_url+movies_url+'?'+page_url+i+'&'+fr_url+'&'+key);
        });
    }

}

displayPage(10);