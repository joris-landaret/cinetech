// Somme URL
const fr_url = 'language=fr-FR';
const base_url = ' https://api.themoviedb.org/3/';
const tv_url = 'tv/popular';
const page_url = 'page=';
const imageBase_url ='https://image.tmdb.org/t/p/w500';
const search_url = 'https://api.themoviedb.org/3/search/tv?'
const key = 'api_key=b788cc72df375c80e5b1d9b0483059ac'

// select element
const main = document.querySelector('#main');
const form = document.querySelector("#form");
const search = document.querySelector("#search");

// somme function
async function getTv(url) {
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
            <h3>${movie.name}</h3>
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

//
getTv(base_url+tv_url+'?'+page_url+'1&'+fr_url+'&'+key);

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if(!search.value) {
		console.log('non');
		geTtv(base_url+tv_url+'?'+page_url+'1&'+fr_url);
	}
	else {
		getTv(search_url+'query='+search.value)
	console.log(search.value);
	}
});