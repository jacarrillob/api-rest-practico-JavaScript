const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 1000,
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    params: {
        'api_key': API_KEY
    }
  });

async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/week')

    const movies = data.results
    movies.forEach(movie => {
    const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')

        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)
        movieImg.setAttribute('alt', movie.title )

        movieContainer.appendChild(movieImg)

        trendingPreviewMoviesContainer.appendChild(movieContainer)
    });
}

async function getCategoriesPreview() {
    const { data } = await api('genre/movie/list')

    const categories = data.genres
    categories.forEach(category => {
    const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')

        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const categoryttle = document.createElement('h3')
        categoryttle.classList.add('category-title')
        categoryttle.setAttribute('id', 'id'+category.id)
        categoryttle.innerText = category.name

        categoryContainer.appendChild(categoryttle)

        previewCategoriesContainer.appendChild(categoryContainer)
    });
}

getTrendingMoviesPreview()
getCategoriesPreview()