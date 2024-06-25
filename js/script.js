document.addEventListener('DOMContentLoaded', () => {
  const movies = [
      { title: 'Some Like It Hot', year: 1959, rating: '8.2/10', mainCast: 'Marilyn Monroe, Tony Curtis, Jack Lemmon' },
      { title: 'Dr. Strangelove', year: 1964, rating: '8.4/10', mainCast: 'Peter Sellers, George C. Scott, Sterling Hayden' },
      { title: 'Blazing Saddles', year: 1974, rating: '7.7/10', mainCast: 'Cleavon Little, Gene Wilder, Slim Pickens' },
      { title: 'Animal House', year: 1978, rating: '7.4/10', mainCast: 'John Belushi, Karen Allen, Tom Hulce' },
      { title: 'Airplane!', year: 1980, rating: '7.7/10', mainCast: 'Robert Hays, Julie Hagerty, Leslie Nielsen' },
      { title: 'Caddyshack', year: 1980, rating: '7.2/10', mainCast: 'Chevy Chase, Rodney Dangerfield, Bill Murray' },
      { title: 'Ghostbusters', year: 1984, rating: '7.8/10', mainCast: 'Bill Murray, Dan Aykroyd, Sigourney Weaver' },
      { title: 'Ferris Bueller\'s Day Off', year: 1986, rating: '7.8/10', mainCast: 'Matthew Broderick, Alan Ruck, Mia Sara' },
      { title: 'The Breakfast Club', year: 1985, rating: '7.8/10', mainCast: 'Emilio Estevez, Judd Nelson, Molly Ringwald' },
      { title: 'Coming to America', year: 1988, rating: '7.1/10', mainCast: 'Eddie Murphy, Arsenio Hall, James Earl Jones' },
      { title: 'Home Alone', year: 1990, rating: '7.6/10', mainCast: 'Macaulay Culkin, Joe Pesci, Daniel Stern' },
      { title: 'Dumb and Dumber', year: 1994, rating: '7.3/10', mainCast: 'Jim Carrey, Jeff Daniels, Lauren Holly' },
      { title: 'The Mask', year: 1994, rating: '6.9/10', mainCast: 'Jim Carrey, Cameron Diaz, Peter Riegert' },
      { title: 'Groundhog Day', year: 1993, rating: '8.1/10', mainCast: 'Bill Murray, Andie MacDowell, Chris Elliott' },
      { title: 'There\'s Something About Mary', year: 1998, rating: '7.1/10', mainCast: 'Cameron Diaz, Matt Dillon, Ben Stiller' },
      { title: 'Anchorman: The Legend of Ron Burgundy', year: 2004, rating: '7.2/10', mainCast: 'Will Ferrell, Christina Applegate, Steve Carell' },
      { title: 'The 40-Year-Old Virgin', year: 2005, rating: '7.1/10', mainCast: 'Steve Carell, Catherine Keener, Paul Rudd' },
      { title: 'Superbad', year: 2007, rating: '7.6/10', mainCast: 'Jonah Hill, Michael Cera, Christopher Mintz-Plasse' },
      { title: 'Step Brothers', year: 2008, rating: '6.9/10', mainCast: 'Will Ferrell, John C. Reilly, Mary Steenburgen' },
      { title: 'The Hangover', year: 2009, rating: '7.7/10', mainCast: 'Bradley Cooper, Zach Galifianakis, Ed Helms' },
      { title: 'Bridesmaids', year: 2011, rating: '6.8/10', mainCast: 'Kristen Wiig, Maya Rudolph, Rose Byrne' },
      { title: '21 Jump Street', year: 2012, rating: '7.2/10', mainCast: 'Jonah Hill, Channing Tatum, Ice Cube' },
      { title: 'The Grand Budapest Hotel', year: 2014, rating: '8.1/10', mainCast: 'Ralph Fiennes, F. Murray Abraham, Mathieu Amalric' },
      { title: 'Deadpool', year: 2016, rating: '8.0/10', mainCast: 'Ryan Reynolds, Morena Baccarin, T.J. Miller' },
      { title: 'Crazy Rich Asians', year: 2018, rating: '6.9/10', mainCast: 'Constance Wu, Henry Golding, Michelle Yeoh' },
      { title: 'Borat Subsequent Moviefilm', year: 2020, rating: '6.6/10', mainCast: 'Sacha Baron Cohen, Maria Bakalova, Tom Hanks' },
      { title: 'Palm Springs', year: 2020, rating: '7.4/10', mainCast: 'Andy Samberg, Cristin Milioti, J.K. Simmons' },
      { title: 'The King of Staten Island', year: 2020, rating: '7.1/10', mainCast: 'Pete Davidson, Marisa Tomei, Bill Burr' },
      { title: 'Coming 2 America', year: 2021, rating: '5.3/10', mainCast: 'Eddie Murphy, Arsenio Hall, Jermaine Fowler' },
  ];

  const movieTableBody = document.querySelector('#movieTable tbody');
    const movieForm = document.getElementById('movieForm');

    const renderMovies = () => {
        movieTableBody.innerHTML = '';
        movies.forEach((movie, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.year}</td>
                <td>${movie.rating}</td>
                <td>${movie.mainCast}</td>
                <td>
                    <button onclick="editMovie(${index})">Edit</button>
                    <button onclick="deleteMovie(${index})">Delete</button>
                </td>
            `;
            movieTableBody.appendChild(row);
        });
    };

    const addMovie = (event) => {
        event.preventDefault();
        const newMovie = {
            title: movieForm.title.value,
            year: movieForm.year.value,
            rating: movieForm.rating.value,
            mainCast: movieForm.mainCast.value,
        };
        movies.push(newMovie);
        renderMovies();
        movieForm.reset();
    };

    window.editMovie = (index) => {
        const movie = movies[index];
        movieForm.title.value = movie.title;
        movieForm.year.value = movie.year;
        movieForm.rating.value = movie.rating;
        movieForm.mainCast.value = movie.mainCast;
        movieForm.onsubmit = (event) => {
            event.preventDefault();
            movie.title = movieForm.title.value;
            movie.year = movieForm.year.value;
            movie.rating = movieForm.rating.value;
            movie.mainCast = movieForm.mainCast.value;
            renderMovies();
            movieForm.reset();
            movieForm.onsubmit = addMovie;
        };
    };

    window.deleteMovie = (index) => {
        movies.splice(index, 1);
        renderMovies();
    };

    movieForm.onsubmit = addMovie;
    renderMovies();
});
