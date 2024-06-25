document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        { title: 'Some Like It Hot', year: 1959, rating: 8.2 },
        { title: 'Dr. Strangelove', year: 1964, rating: 8.4 },
        { title: 'Monty Python and the Holy Grail', year: 1975, rating: 8.2 },
        { title: 'The Big Lebowski', year: 1998, rating: 8.1 },
        { title: 'Anchorman: The Legend of Ron Burgundy', year: 2004, rating: 7.2 },
        { title: 'Superbad', year: 2007, rating: 7.6 },
        { title: 'The Hangover', year: 2009, rating: 7.7 },
        { title: 'Bridesmaids', year: 2011, rating: 6.8 },
        { title: '21 Jump Street', year: 2012, rating: 7.2 },
        { title: 'The Grand Budapest Hotel', year: 2014, rating: 8.1 }
    ];

    const movieTitles = movies.map(movie => movie.title);
    const movieRatings = movies.map(movie => movie.rating);

    const ctx = document.getElementById('ratingsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: movieTitles,
            datasets: [{
                label: 'Movie Ratings',
                data: movieRatings,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});