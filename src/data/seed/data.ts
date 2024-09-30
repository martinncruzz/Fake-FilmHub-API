export const seedData = {
  users: [
    {
      fullname: "Charlotte Evans",
      email: "charlotte@outlook.com",
      password: "charlottePass998",
      avatar:
        "https://res.cloudinary.com/dhhxe6sif/image/upload/v1727556454/FilmHub-API-Images/Users/ydlfl6dajinxbzts9gsr.jpg",
    },
    {
      fullname: "John Doe",
      email: "john@mail.com",
      password: "johnD123!",
      avatar:
        "https://res.cloudinary.com/dhhxe6sif/image/upload/v1727556455/FilmHub-API-Images/Users/qkoztblmwb3bwr3r4nqq.jpg",
    },
    {
      fullname: "Jane Smith",
      email: "jane@yahoo.com.ar",
      password: "janeS2021*",
      avatar:
        "https://res.cloudinary.com/dhhxe6sif/image/upload/v1727555616/FilmHub-API-Images/Users/v793nmhksqzzvujwpkdw.jpg",
    },
  ],

  genres: [
    {
      name: "Drama",
      image:
        "https://res.cloudinary.com/dhhxe6sif/image/upload/v1708801194/FilmHub-API-Images/Genres/qop48liphehtjcwqwvus.jpg",
    },
    {
      name: "Action/Adventure",
      image:
        "https://res.cloudinary.com/dhhxe6sif/image/upload/v1708801185/FilmHub-API-Images/Genres/bmyrv4yltisupvso2ejs.jpg",
    },
    {
      name: "Science Fiction/Fantasy",
      image:
        "https://res.cloudinary.com/dhhxe6sif/image/upload/v1708801221/FilmHub-API-Images/Genres/wuwf7fyuhpntw27knzj5.jpg",
    },
    {
      name: "Comedy",
      image:
        "https://res.cloudinary.com/dhhxe6sif/image/upload/v1708801176/FilmHub-API-Images/Genres/oj3cw7uby6tdatt3c1ij.jpg",
    },
    {
      name: "Animation/Family",
      image:
        "https://res.cloudinary.com/dhhxe6sif/image/upload/v1708801159/FilmHub-API-Images/Genres/y8oemtwwq5vnjm3xitzq.jpg",
    },
  ],

  movies: [
    {
      title: "Casablanca",
      description: "American romantic drama film directed by Michael Curtiz",
      release_year: 1942,
      director: "Michael Curtiz",
      duration_minutes: 102,
      trailer_link: "https://www.youtube.com/watch?v=nqlROp1TIgo",
      poster_image_url:
        "https://i.pinimg.com/474x/dc/bb/5a/dcbb5ad4e37efb60165df227ae9465bf.jpg",
      genre_ids: [1],
    },
    {
      title: "Ben-Hur",
      description:
        "American epic historical drama film directed by William Wyler",
      release_year: 1959,
      director: "William Wyler",
      duration_minutes: 212,
      trailer_link: "https://www.youtube.com/watch?v=NR1ZHKw09n8",
      poster_image_url:
        "https://i.pinimg.com/originals/ea/f4/d6/eaf4d6f4223fb10fc47c91549f98b302.jpg",
      genre_ids: [1],
    },
    {
      title: "Rebel Without a Cause",
      description: "American drama film directed by Nicholas Ray",
      release_year: 1955,
      director: "Nicholas Ray",
      duration_minutes: 111,
      trailer_link: "https://www.youtube.com/watch?v=HWHH5TwEwtI",
      poster_image_url:
        "https://m.media-amazon.com/images/I/51S9l0ud0jL._AC_UF894,1000_QL80_.jpg",
      genre_ids: [1],
    },
    {
      title: "A Streetcar Named Desire",
      description:
        "American drama film, adapted from Tennessee Williams's Pulitzer Prize-winning 1947 play",
      release_year: 1951,
      director: "Elia Kazan",
      duration_minutes: 122,
      trailer_link: "https://www.youtube.com/watch?v=U3CXLHLFvyM",
      poster_image_url:
        "https://cdn.europosters.eu/image/1300/art-photo/a-streetcar-named-desire-i163820.jpg",
      genre_ids: [1],
    },
    {
      title: "On the Waterfront",
      description: "American crime drama film directed by Elia Kazan",
      release_year: 1954,
      director: "Elia Kazan",
      duration_minutes: 108,
      trailer_link: "https://www.youtube.com/watch?v=vOdYAXOfLMc",
      poster_image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/On_the_Waterfront_%281954_poster%29.jpg/665px-On_the_Waterfront_%281954_poster%29.jpg",
      genre_ids: [1],
    },
    {
      title: "West Side Story",
      description:
        "American musical romantic drama film directed by Robert Wise and Jerome Robbins",
      release_year: 1961,
      director: "Robert Wise, Jerome Robbins",
      duration_minutes: 152,
      trailer_link: "https://www.youtube.com/watch?v=NF1L3NorO3E",
      poster_image_url:
        "https://i.pinimg.com/originals/2a/07/ec/2a07ece7098643065869b65f7fbc6572.jpg",
      genre_ids: [1],
    },
    {
      title: "Sunset Boulevard",
      description: "American film noir directed and co-written by Billy Wilder",
      release_year: 1950,
      director: "Billy Wilder",
      duration_minutes: 110,
      trailer_link: "https://www.youtube.com/watch?v=_dY0SVxnHjQ",
      poster_image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sunset_Boulevard_%281950_poster%29.jpg/399px-Sunset_Boulevard_%281950_poster%29.jpg",
      genre_ids: [1],
    },
    {
      title: "Lawrence of Arabia",
      description:
        "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
      release_year: 1962,
      director: "David Lean",
      duration_minutes: 228,
      trailer_link: "https://www.youtube.com/watch?v=vOlRhGEhG7k",
      poster_image_url:
        "https://www.originalfilmart.com/cdn/shop/products/lawrence_of_arabia_1962_linen_camel_spanish_original_film_art.jpg?v=1583487002",
      genre_ids: [1],
    },
    {
      title: "The Graduate",
      description:
        "A disillusioned college graduate finds himself torn between his older lover and her daughter.",
      release_year: 1967,
      director: "Mike Nichols",
      duration_minutes: 106,
      trailer_link: "https://www.youtube.com/watch?v=6KnSucVko1s",
      poster_image_url:
        "https://www.originalfilmart.com/cdn/shop/products/the_graduate_1968_linen_original_film_art_f.jpg?v=1600258143",
      genre_ids: [1],
    },
    {
      title: "Bonnie and Clyde",
      description:
        "Bored waitress Bonnie Parker falls in love with an ex-con named Clyde Barrow and together they start a violent crime spree through the country, robbing cars and banks.",
      release_year: 1967,
      director: "Arthur Penn",
      duration_minutes: 111,
      trailer_link: "https://www.youtube.com/watch?v=hZpm1zj9510",
      poster_image_url:
        "https://www.originalfilmart.com/cdn/shop/products/bonnie_and_clyde_R70s_original_film_art_spo_5000x.jpg?v=1562544361",
      genre_ids: [1],
    },
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      release_year: 1972,
      director: "Francis Ford Coppola",
      duration_minutes: 175,
      trailer_link: "https://www.youtube.com/watch?v=1x0GpEZnwa8&t=89s",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      genre_ids: [1],
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      release_year: 1994,
      director: "Frank Darabont",
      duration_minutes: 142,
      trailer_link: "https://www.youtube.com/watch?v=PLl99DlL6b4",
      poster_image_url:
        "https://i.ebayimg.com/images/g/G0AAAOSwdnZaEzkx/s-l1600.jpg",
      genre_ids: [1],
    },
    {
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      release_year: 1993,
      director: "Steven Spielberg",
      duration_minutes: 195,
      trailer_link: "https://www.youtube.com/watch?v=gG22XNhtnoY",
      poster_image_url:
        "https://image.tmdb.org/t/p/original/igaAG1pI1rdCb62mg2eRcnpmqnI.jpg",
      genre_ids: [1],
    },
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      release_year: 2010,
      director: "Christopher Nolan",
      duration_minutes: 148,
      trailer_link: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      poster_image_url:
        "https://www.originalfilmart.com/cdn/shop/products/inception_2010_advance_original_film_art_f4801a23-edb3-4db0-b382-1e2aec1dc927_5000x.jpg?v=1626289428",
      genre_ids: [1, 3],
    },
    {
      title: "The Shining",
      description:
        "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
      release_year: 1980,
      director: "Stanley Kubrick",
      duration_minutes: 146,
      trailer_link: "https://www.youtube.com/watch?v=FZQvIJxG9Xs",
      poster_image_url:
        "https://http2.mlstatic.com/D_NQ_NP_961951-MLA27319041477_052018-O.webp",
      genre_ids: [1],
    },
    {
      title: "The Deer Hunter",
      description:
        "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.",
      release_year: 1978,
      director: "Michael Cimino",
      duration_minutes: 183,
      trailer_link: "https://www.youtube.com/watch?v=g7q1SjVdsNk",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BNDhmNTA0ZDMtYjhkNS00NzEzLWIzYTItOGNkMTVmYjE2YmI3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      genre_ids: [1],
    },
    {
      title: "Apocalypse Now",
      description:
        "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
      release_year: 1979,
      director: "Francis Ford Coppola",
      duration_minutes: 147,
      trailer_link: "https://www.youtube.com/watch?v=9l-ViOOFH-s",
      poster_image_url:
        "https://i.pinimg.com/736x/ec/a4/78/eca47892814546cf6d610ebfaa242e87.jpg",
      genre_ids: [1],
    },
    {
      title: "A Clockwork Orange",
      description:
        "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
      release_year: 1971,
      director: "Stanley Kubrick",
      duration_minutes: 136,
      trailer_link: "https://www.youtube.com/watch?v=T54uZPI4Z8A",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_.jpg",
      genre_ids: [1],
    },
    {
      title: "The French Connection",
      description:
        "A pair of NYC cops in the Narcotics Bureau stumble onto a drug smuggling job with a French connection.",
      release_year: 1971,
      director: "William Friedkin",
      duration_minutes: 104,
      trailer_link: "https://www.youtube.com/watch?v=ncWxtpXn3gA",
      poster_image_url:
        "https://m.media-amazon.com/images/I/61aoIHgQm3L._AC_UF894,1000_QL80_.jpg",
      genre_ids: [1],
    },
    {
      title: "American History X",
      description:
        "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
      release_year: 1998,
      director: "Tony Kaye",
      duration_minutes: 119,
      trailer_link: "https://www.youtube.com/watch?v=XfQYHqsiN5g",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_FMjpg_UX1000_.jpg",
      genre_ids: [1],
    },
    {
      title: "Citizen Kane",
      description: "Mystery drama film",
      release_year: 1941,
      director: "Orson Welles",
      duration_minutes: 119,
      trailer_link: "https://www.youtube.com/watch?v=8dxh3lwdOFw",
      poster_image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg/681px-Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg",
      genre_ids: [1],
    },
    {
      title: "The Usual Suspects",
      description:
        "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
      release_year: 1995,
      director: "Bryan Singer",
      duration_minutes: 106,
      trailer_link: "https://www.youtube.com/watch?v=oiXdPolca5w",
      poster_image_url:
        "https://www.originalfilmart.com/cdn/shop/products/usual_suspects_1995_original_film_art_ef9998dc-62be-47c0-92c5-d58632b646a4_5000x.jpg?v=1582620183",
      genre_ids: [1],
    },
    {
      title: "Se7en",
      description:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      release_year: 1995,
      director: "David Fincher",
      duration_minutes: 127,
      trailer_link: "https://www.youtube.com/watch?v=znmZoVkCjpI",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      genre_ids: [1],
    },
    {
      title: "Leon: The Professional",
      description:
        "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
      release_year: 1994,
      director: "Luc Besson",
      duration_minutes: 110,
      trailer_link: "https://www.youtube.com/watch?v=jawVxq1Iyl0",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
      genre_ids: [1],
    },
    {
      title: "Shutter Island",
      description:
        "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
      release_year: 2010,
      director: "Martin Scorsese",
      duration_minutes: 138,
      trailer_link: "https://www.youtube.com/watch?v=v8yrZSkKxTA",
      poster_image_url:
        "https://www.originalfilmart.com/cdn/shop/products/shutter_island_2010_advance_original_film_art_b22fec5b-6f57-4634-9529-30d9cbab8ba7_5000x.jpg?v=1612831529",
      genre_ids: [1],
    },
    {
      title: "The Fighter",
      description:
        'A look at the early years of boxer "Irish" Micky Ward and his brother who helped train him before going pro in the mid 1980s.',
      release_year: 2010,
      director: "David O. Russell",
      duration_minutes: 116,
      trailer_link: "https://www.youtube.com/watch?v=vNLbO7BaZm0",
      poster_image_url:
        "https://i.pinimg.com/474x/b9/b6/cd/b9b6cd0636f19edd811b687e27ad5bfe.jpg",
      genre_ids: [1],
    },
    {
      title: "True Grit",
      description:
        "A stubborn teenager enlists the help of a tough U.S. Marshal to track down her father's murderer.",
      release_year: 2010,
      director: "Ethan Coen, Joel Coen",
      duration_minutes: 110,
      trailer_link: "https://www.youtube.com/watch?v=CUiCu-zuAgM",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMTU5MjU3MTI4OF5BMl5BanBnXkFtZTcwMTQxOTAxNA@@._V1_.jpg",
      genre_ids: [1],
    },

    {
      title: "The Wolf of Wall Street",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      release_year: 2013,
      director: "Martin Scorsese",
      duration_minutes: 180,
      trailer_link: "https://www.youtube.com/watch?v=iszwuX1AK6A",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
      genre_ids: [1],
    },
    {
      title: "La La Land",
      description:
        "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      release_year: 2016,
      director: "Damien Chazelle",
      duration_minutes: 128,
      trailer_link: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
      poster_image_url:
        "https://http2.mlstatic.com/D_NQ_NP_954992-MLA54359334491_032023-O.webp",
      genre_ids: [1],
    },
    {
      title: "Get Out",
      description:
        "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
      release_year: 2017,
      director: "Jordan Peele",
      duration_minutes: 104,
      trailer_link: "https://www.youtube.com/watch?v=DzfpyUB60YY",
      poster_image_url:
        "https://i.pinimg.com/564x/ae/25/3a/ae253ae780447b0671d30a0a779a5050.jpg",
      genre_ids: [1],
    },
    {
      title: "Dunkirk",
      description:
        "Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.",
      release_year: 2017,
      director: "Christopher Nolan",
      duration_minutes: 106,
      trailer_link: "https://www.youtube.com/watch?v=T7O7BtBnsG4",
      poster_image_url:
        "https://i.pinimg.com/originals/9f/5a/d5/9f5ad54e874e937701838b2eded246ef.jpg",
      genre_ids: [1],
    },
    {
      title: "It",
      description:
        "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
      release_year: 2017,
      director: "Andy Muschietti",
      duration_minutes: 135,
      trailer_link: "https://www.youtube.com/watch?v=FnCdOQsX5kc",
      poster_image_url:
        "https://i.pinimg.com/736x/3d/d2/54/3dd2548a0d8cf7c0b2da488756f22ca7.jpg",
      genre_ids: [1],
    },
    {
      title: "The King's Speech",
      description:
        "The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.",
      release_year: 2010,
      director: "Tom Hooper",
      duration_minutes: 118,
      trailer_link: "https://www.youtube.com/watch?v=EcxBrTvLbBM",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMzU5MjEwMTg2Nl5BMl5BanBnXkFtZTcwNzM3MTYxNA@@._V1_.jpg",
      genre_ids: [1],
    },
    {
      title: "Titanic",
      description:
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      release_year: 1997,
      director: "James Cameron",
      duration_minutes: 194,
      trailer_link: "https://www.youtube.com/watch?v=2e-eXJ6HgkQ",
      poster_image_url:
        "https://images-cdn.ubuy.co.in/633cae2eb5f1fa3ed74f58ac-titanic-movie-poster-leonardo-dicaprio.jpg",
      genre_ids: [1],
    },
    {
      title: "Rocky",
      description:
        "Rocky Balboa, a small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.",
      release_year: 1976,
      director: "John G. Avildsen",
      duration_minutes: 120,
      trailer_link: "https://www.youtube.com/watch?v=7RYpJAUMo2M",
      poster_image_url:
        "https://i.pinimg.com/originals/3c/bb/0a/3cbb0a3cda907011820d75e23337c195.jpg",
      genre_ids: [1, 2],
    },
    {
      title: "Rocky II",
      description:
        "It's the rematch of the century as Rocky takes on Apollo Creed in this powerful follow-up to one of the most acclaimed movies in film history. After club fighter Rocky Balboa goes the distance with the world heavyweight champion, boxing fans clamor for a rematch.",
      release_year: 1979,
      director: "Sylvester Stallone",
      duration_minutes: 119,
      trailer_link: "https://www.youtube.com/watch?v=A2P9ATb9Qx8",
      poster_image_url:
        "https://i.pinimg.com/originals/5c/23/82/5c2382c10fe1795db2f7c566df3e715c.jpg",
      genre_ids: [1, 2],
    },
    {
      title: "Rocky III",
      description:
        "Rocky strives to regain the 'eye of the tiger' after a humiliating defeat in the ring at Lang's hands. With the help of an unlikely ally, Apollo Creed, Rocky trains for the most grueling rematch of his career!",
      release_year: 1982,
      director: "Sylvester Stallone",
      duration_minutes: 99,
      trailer_link: "https://www.youtube.com/watch?v=gbRDCWKqvEc",
      poster_image_url:
        "https://i.pinimg.com/564x/c8/54/71/c854715492b2bc35f002efb99a4cf3a4.jpg",
      genre_ids: [1, 2],
    },
    {
      title: "Rocky IV",
      description:
        "After reclaiming the boxing championship title, Rocky Balboa plans to retire and live with his wife, Adrian. However, during an exhibition match, Rocky's friend Apollo Creed (Carl Weathers) is mercilessly beaten to death by hulking Russian newcomer Ivan Drago.",
      release_year: 1985,
      director: "Sylvester Stallone",
      duration_minutes: 91,
      trailer_link: "https://www.youtube.com/watch?v=mIE5HYkzvV0",
      poster_image_url:
        "https://i.ebayimg.com/images/g/4aYAAOSwB4NWzKq1/s-l1600.jpg",
      genre_ids: [1, 2],
    },
    {
      title: "Forrest Gump",
      description:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
      release_year: 1994,
      director: "Robert Zemeckis",
      duration_minutes: 142,
      trailer_link: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      poster_image_url:
        "https://i.pinimg.com/736x/26/9d/5f/269d5f464587df6a90f8ab9069396943.jpg",
      genre_ids: [1, 4],
    },
    {
      title: "Psycho",
      description:
        "American psychological horror film directed and produced by Alfred Hitchcock",
      release_year: 1960,
      director: "Alfred Hitchcock",
      duration_minutes: 109,
      trailer_link: "https://www.youtube.com/watch?v=NG3-GlvKPcg",
      poster_image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/691px-Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg",
      genre_ids: [1, 2],
    },
    {
      title: "Vertigo",
      description:
        "American film noir psychological thriller film directed and produced by Alfred Hitchcock",
      release_year: 1958,
      director: "Alfred Hitchcock",
      duration_minutes: 128,
      trailer_link: "https://www.youtube.com/watch?v=Z5jvQwwHQNY",
      poster_image_url:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Vertigomovie_restoration.jpg",
      genre_ids: [1, 2],
    },
    {
      title: "The Fast and the Furious",
      description:
        "Los Angeles street racer Dominic Toretto falls under the suspicion of the LAPD as a string of high-speed electronics truck robberies rocks the area. Brian O'Connor, an officer of the LAPD, joins the ranks of Toretto's highly skilled racing crew undercover to convict Toretto. However, O'Connor finds himself both enamored with this new world and in love with Toretto's sister, Mia. As a rival racing crew gains strength, O'Connor must decide where his loyalty really lies.",
      release_year: 2001,
      director: "Rob Cohen",
      duration_minutes: 106,
      trailer_link: "https://www.youtube.com/watch?v=ZsJz2TJAPjw",
      poster_image_url:
        "https://i.pinimg.com/originals/74/22/83/7422839479b503cde8185e78ca31a60f.jpg",
      genre_ids: [1, 2],
    },
    {
      title: "2 Fast 2 Furious",
      description:
        "Former cop Brian O'Conner is called upon to bust a dangerous criminal and he recruits the help of a former childhood friend and street racer who has a chance to redeem himself.",
      release_year: 2003,
      director: "John Singleton",
      duration_minutes: 107,
      trailer_link: "https://www.youtube.com/watch?v=F_VIM03DXWI",
      poster_image_url:
        "https://i.pinimg.com/564x/6f/e5/a8/6fe5a8a0faeafa1a233aa29a6ac80267.jpg",
      genre_ids: [1, 2],
    },
    {
      title: "The Fast and the Furious: Tokyo Drift",
      description:
        "In order to avoid a jail sentence, Sean Boswell heads to Tokyo to live with his military father. In a low-rent section of the city, Shaun gets caught up in the underground world of drift racing.",
      release_year: 2006,
      director: "Justin Lin",
      duration_minutes: 104,
      trailer_link: "https://www.youtube.com/watch?v=xZ96tl5MrfU",
      poster_image_url:
        "https://musicart.xboxlive.com/7/73903f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      genre_ids: [1, 2],
    },
    {
      title: "Fast & Furious",
      description:
        "When a crime brings them back to L.A., fugitive ex-con Dom Toretto reignites his feud with agent Brian O'Conner. But as they are forced to confront a shared enemy, Dom and Brian must give in to an uncertain new trust if they hope to outmaneuver him.",
      release_year: 2009,
      director: "Justin Lin",
      duration_minutes: 107,
      trailer_link: "https://www.youtube.com/watch?v=k98tBkRsGl4",
      poster_image_url:
        "https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg",
      genre_ids: [1, 2],
    },
    {
      title: "Hacksaw Ridge",
      description:
        "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Medal of Honor.",
      release_year: 2016,
      director: "Mel Gibson",
      duration_minutes: 139,
      trailer_link: "https://www.youtube.com/watch?v=s2-1hz1juBI",
      poster_image_url:
        "https://lh3.googleusercontent.com/proxy/JD9z123L1ioNVJ3scKnah05eIil7QwcIaRcdkSbqWUZh8hBMsqB7m2gsUKrXRmkgFj1d3sruRc1lpVsJYLouf9HPlke9i_hmxGAcgDiqsO1qA_gMgIITtJk",
      genre_ids: [1, 2],
    },
    {
      title: "The Sixth Sense",
      description:
        "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
      release_year: 1999,
      director: "M. Night Shyamalan",
      duration_minutes: 107,
      trailer_link: "https://www.youtube.com/watch?v=VG9AGf66tXM",
      poster_image_url:
        "https://i.ebayimg.com/images/g/~rIAAOSwMJJg5rJL/s-l1600.jpg",
      genre_ids: [1, 2, 3],
    },
    {
      title: "North by Northwest",
      description: "American thriller film directed by Alfred Hitchcock",
      release_year: 1959,
      director: "Alfred Hitchcock",
      duration_minutes: 136,
      trailer_link: "https://www.youtube.com/watch?v=Fx0QuZJVTFE",
      poster_image_url:
        "https://i.pinimg.com/474x/51/4b/d9/514bd935d48ed8b7c0baddf297141eb8.jpg",
      genre_ids: [2],
    },
    {
      title: "Some Like It Hot",
      description:
        "American black-and-white romantic comedy film directed and produced by Billy Wilder",
      release_year: 1959,
      director: "Billy Wilder",
      duration_minutes: 121,
      trailer_link: "https://www.youtube.com/watch?v=rI_lUHOCcbc",
      poster_image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjDOtEyuFXq8XJ49P7rwqeORdw1syJAIvOtJplMoGbg&s",
      genre_ids: [2, 4],
    },
    {
      title: "Raiders of the Lost Ark",
      description:
        "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
      release_year: 1981,
      director: "Steven Spielberg",
      duration_minutes: 115,
      trailer_link: "https://www.youtube.com/watch?v=0xQSIdSRlAk",
      poster_image_url:
        "https://filmartgallery.com/cdn/shop/files/Raiders-of-the-Lost-Ark-Vintage-Movie-Poster-Original-40x60-8290.jpg?v=1707361877",
      genre_ids: [2],
    },
    {
      title: "Indiana Jones and the Temple of Doom",
      description:
        "In 1935, Indiana Jones arrives in India, still part of the British Empire, and is asked to find a mystical stone. He then stumbles upon a secret cult committing enslavement and human sacrifices in the catacombs of an ancient palace.",
      release_year: 1984,
      director: "Steven Spielberg",
      duration_minutes: 118,
      trailer_link: "https://www.youtube.com/watch?v=WBdyLyijZhU",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BYzgzMTIzNzctNmNiZC00ZDYyLWJjNzktMmQ2MDM2ZDkwZGVhXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg",
      genre_ids: [2],
    },
    {
      title: "Back to the Future",
      description:
        "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
      release_year: 1985,
      director: "Robert Zemeckis",
      duration_minutes: 116,
      trailer_link: "https://www.youtube.com/watch?v=qvsgGtivCgs",
      poster_image_url:
        "https://static.posters.cz/image/750/posters/back-to-the-future-i2795.jpg",
      genre_ids: [2],
    },
    {
      title: "Top Gun",
      description:
        "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
      release_year: 1986,
      director: "Tony Scott",
      duration_minutes: 110,
      trailer_link: "https://www.youtube.com/watch?v=xa_z57UatDY",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg",
      genre_ids: [2],
    },
    {
      title: "Die Hard",
      description:
        "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
      release_year: 1988,
      director: "John McTiernan",
      duration_minutes: 132,
      trailer_link: "https://www.youtube.com/watch?v=2TQ-pOvI6Xo",
      poster_image_url:
        "https://i.pinimg.com/736x/bb/0f/07/bb0f07cc7a67a624290ca4fc1f96cfad.jpg",
      genre_ids: [2],
    },
    {
      title: "Jurassic Park",
      description:
        "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      release_year: 1993,
      director: "Steven Spielberg",
      duration_minutes: 127,
      trailer_link: "https://www.youtube.com/watch?v=lc0UehYemQA",
      poster_image_url:
        "https://i.pinimg.com/originals/32/95/da/3295da84d565e97a72bccb9bc5399fc9.jpg",
      genre_ids: [2],
    },
    {
      title: "Gladiator",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      release_year: 2000,
      director: "Ridley Scott",
      duration_minutes: 155,
      trailer_link: "https://www.youtube.com/watch?v=owK1qxDselE",
      poster_image_url:
        "https://i.pinimg.com/736x/46/a3/39/46a339ce62f36d331d3484f6dff97630.jpg",
      genre_ids: [2],
    },
    {
      title: "The Hunger Games",
      description:
        "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
      release_year: 2012,
      director: "Gary Ross",
      duration_minutes: 142,
      trailer_link: "https://www.youtube.com/watch?v=mfmrPu43DF8",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg",
      genre_ids: [2],
    },
    {
      title: "Mission: Impossible - Ghost Protocol",
      description: "An American action spy film directed by Brad Bird.",
      release_year: 2011,
      director: "Brad Bird",
      duration_minutes: 133,
      trailer_link: "https://www.youtube.com/watch?v=EDGYVFZxsXQ",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_.jpg",
      genre_ids: [2],
    },
    {
      title: "Mission: Impossible - Rogue Nation",
      description:
        "An American action spy film directed by Christopher McQuarrie.",
      release_year: 2015,
      director: "Christopher McQuarrie",
      duration_minutes: 131,
      trailer_link: "https://www.youtube.com/watch?v=F-qBD17wwrQ",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_.jpg",
      genre_ids: [2],
    },
    {
      title: "Mission: Impossible - Fallout",
      description:
        "An American action spy film directed by Christopher McQuarrie.",
      release_year: 2018,
      director: "Christopher McQuarrie",
      duration_minutes: 147,
      trailer_link: "https://www.youtube.com/watch?v=wb49-oV0F78",
      poster_image_url:
        "https://m.media-amazon.com/images/I/A1M0qlxNo6L._AC_UF894,1000_QL80_.jpg",
      genre_ids: [2],
    },
    {
      title: "Taken",
      description:
        "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.",
      release_year: 2008,
      director: "Pierre Morel",
      duration_minutes: 93,
      trailer_link: "https://www.youtube.com/watch?v=uPJVJBm9TPA",
      poster_image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShD9B1BjsvwEUiaCIlzK0_DgykuezW0GoUVrpcBbvMLpPNIlKcsQHJYmL6dguTJR1ZOFk&usqp=CAU",
      genre_ids: [2],
    },
    {
      title: "Taken 2",
      description:
        "In Istanbul, retired CIA operative Bryan Mills and his wife are taken hostage by the father of a kidnapper Mills killed while rescuing his daughter.",
      release_year: 2012,
      director: "Olivier Megaton",
      duration_minutes: 92,
      trailer_link: "https://www.youtube.com/watch?v=U3T9PD5IGjI",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMTkwNTQ0ODExOV5BMl5BanBnXkFtZTcwNjU3NDQwOA@@._V1_.jpg",
      genre_ids: [2],
    },
    {
      title: "Taken 3",
      description:
        "Ex-government operative Bryan Mills is accused of a ruthless murder he never committed or witnessed. As he is tracked and pursued, Mills brings out his particular set of skills to find the true killer and clear his name.",
      release_year: 2014,
      director: "Olivier Megaton",
      duration_minutes: 109,
      trailer_link: "https://www.youtube.com/watch?v=JuU0M2xBasc",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BNjM5MDU3NTY0M15BMl5BanBnXkFtZTgwOTk2ODU2MzE@._V1_.jpg",
      genre_ids: [2],
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      description:
        "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry.",
      release_year: 2001,
      director: "Chris Columbus",
      duration_minutes: 152,
      trailer_link: "https://www.youtube.com/watch?v=VyHV0BRtdxo",
      poster_image_url: "https://m.media-amazon.com/images/I/71x1RHSaEhL.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      description:
        "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
      release_year: 2002,
      director: "Chris Columbus",
      duration_minutes: 161,
      trailer_link: "https://www.youtube.com/watch?v=1bq0qff4iF8",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      description:
        "Harry finds himself selected as an underaged competitor in a dangerous multi-wizardary school competition.",
      release_year: 2005,
      director: "Mike Newell",
      duration_minutes: 157,
      trailer_link: "https://www.youtube.com/watch?v=PFWAOnvMd1Q",
      poster_image_url: "https://m.media-amazon.com/images/I/71opdcUCGjL.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Harry Potter and the Order of the Phoenix",
      description:
        "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities.",
      release_year: 2007,
      director: "David Yates",
      duration_minutes: 138,
      trailer_link: "https://www.youtube.com/watch?v=y6ZW7KXaXYk",
      poster_image_url:
        "https://cdn.europosters.eu/image/1300/art-photo/harry-potter-order-of-the-phoenix-i115696.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Harry Potter and the Deathly Hallows: Part 1",
      description:
        "As Harry, Ron, and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
      release_year: 2010,
      director: "David Yates",
      duration_minutes: 146,
      trailer_link: "https://www.youtube.com/watch?v=MxqsmsA8y5k",
      poster_image_url:
        "https://i.pinimg.com/736x/cc/70/7e/cc707e0886186ea0fa8f68bd91bfae6d.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Harry Potter and the Deathly Hallows: Part 2",
      description:
        "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord.",
      release_year: 2011,
      director: "David Yates",
      duration_minutes: 130,
      trailer_link: "https://www.youtube.com/watch?v=mObK5XD8udk",
      poster_image_url:
        "https://m.media-amazon.com/images/I/71Uqy34noML._AC_UF894,1000_QL80_.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "The Terminator",
      description:
        "A human-looking indestructible cyborg is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.",
      release_year: 1984,
      director: "James Cameron",
      duration_minutes: 107,
      trailer_link: "https://www.youtube.com/watch?v=c4Jo8QoOTQ4",
      poster_image_url:
        "https://c8.alamy.com/compes/b3kr42/el-terminador-cartel-para-1984-orion-film-con-arnold-schwarzenegger-b3kr42.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Terminator 2: Judgment Day",
      description:
        "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
      release_year: 1991,
      director: "James Cameron",
      duration_minutes: 137,
      trailer_link: "https://www.youtube.com/watch?v=CRRlbK5w8AE",
      poster_image_url:
        "https://i.pinimg.com/originals/03/33/40/0333409a3e856d8be1ae7416cf8cb7ea.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Terminator 3: Rise of the Machines",
      description:
        "A cybernetic warrior from a post-apocalyptic future travels back in time to protect a 19-year old drifter and his future wife from a most advanced robotic assassin and to ensure they both survive a nuclear attack.",
      release_year: 2003,
      director: "Jonathan Mostow",
      duration_minutes: 109,
      trailer_link: "https://www.youtube.com/watch?v=5UgPJhyJmlM",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_FMjpg_UX1000_.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Terminator Salvation",
      description:
        "In 2018, a mysterious new weapon in the war against the machines, half-human and half-machine, comes to John Connor on the eve of a resistance attack on Skynet. But whose side is he on, and can he be trusted?",
      release_year: 2009,
      director: "McG",
      duration_minutes: 115,
      trailer_link: "https://www.youtube.com/watch?v=-Czz-TcWCkA",
      poster_image_url:
        "https://i.pinimg.com/originals/27/bd/ac/27bdac1e716ccfd7dfbf6c5d6d51b0a5.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Terminator Genisys",
      description:
        "When John Connor, leader of the human resistance, sends Sgt. Kyle Reese back to 1984 to protect Sarah Connor and safeguard the future, an unexpected turn of events creates a fractured timeline.",
      release_year: 2015,
      director: "Alan Taylor",
      duration_minutes: 126,
      trailer_link: "https://www.youtube.com/watch?v=FqbOFjl7ZWE",
      poster_image_url:
        "https://m.media-amazon.com/images/I/71ZTFTcPTRS._AC_UF894,1000_QL80_.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Terminator: Dark Fate",
      description:
        "Sarah Connor and a hybrid cyborg human must protect a young girl from a newly modified liquid Terminator from the future.",
      release_year: 2019,
      director: "Tim Miller",
      duration_minutes: 128,
      trailer_link: "https://www.youtube.com/watch?v=jCyEX6u-Yhs",
      poster_image_url:
        "https://m.media-amazon.com/images/I/71SH-iUtjYL._AC_UF894,1000_QL80_.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Batman: The Dark Knight",
      description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      release_year: 2008,
      director: "Christopher Nolan",
      duration_minutes: 152,
      trailer_link: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Batman: The Dark Knight Rises",
      description:
        "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
      release_year: 2012,
      director: "Christopher Nolan",
      duration_minutes: 164,
      trailer_link: "https://www.youtube.com/watch?v=g8evyE9TuYk",
      poster_image_url:
        "https://rukminim2.flixcart.com/image/850/1000/kmmcrrk0/poster/a/d/7/medium-the-dark-knight-rises-wall-decor-paper-12-18-rolled-print-original-imagfha3hqghbder.jpeg?q=90&crop=false",
      genre_ids: [2, 3],
    },
    {
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      description:
        "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
      release_year: 2003,
      director: "Gore Verbinski",
      duration_minutes: 143,
      trailer_link: "https://www.youtube.com/watch?v=naQr0uTrH_s",
      poster_image_url:
        "https://i.ebayimg.com/images/g/7a0AAOSwGqZgdFsY/s-l1600.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Pirates of the Caribbean: Dead Man's Chest",
      description:
        "Captain Jack Sparrow works his way out of a blood debt with the ghostly Davey Jones, he also attempts to avoid eternal damnation.",
      release_year: 2006,
      director: "Gore Verbinski",
      duration_minutes: 151,
      trailer_link: "https://www.youtube.com/watch?v=ozk0-RHXtFw",
      poster_image_url: "https://m.media-amazon.com/images/I/71leEAIbMNL.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Pirates of the Caribbean: At World's End",
      description:
        "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.",
      release_year: 2007,
      director: "Gore Verbinski",
      duration_minutes: 169,
      trailer_link: "https://www.youtube.com/watch?v=HKSZtp_OGHY",
      poster_image_url: "https://m.media-amazon.com/images/I/61yMK0xQ4YL.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Pirates of the Caribbean: On Stranger Tides",
      description:
        "Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too.",
      release_year: 2011,
      director: "Rob Marshall",
      duration_minutes: 136,
      trailer_link: "https://www.youtube.com/watch?v=0BXCVe8Yww4",
      poster_image_url: "https://m.media-amazon.com/images/I/81gClmZnKoL.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "The Avengers",
      description:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      release_year: 2012,
      director: "Joss Whedon",
      duration_minutes: 143,
      trailer_link: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
      poster_image_url:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2b/The_Avengers_Poster.png/revision/latest/scale-to-width-down/1200?cb=20150610135853&path-prefix=es",
      genre_ids: [2, 3],
    },
    {
      title: "Avengers: Age of Ultron",
      description:
        "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      release_year: 2015,
      director: "Joss Whedon",
      duration_minutes: 141,
      trailer_link: "https://www.youtube.com/watch?v=tmeOjFno6Do",
      poster_image_url:
        "https://i.ebayimg.com/images/g/2iMAAOSwClBgm8j9/s-l1600.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Avengers: Infinity War",
      description:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      release_year: 2018,
      director: "Anthony Russo, Joe Russo",
      duration_minutes: 149,
      trailer_link: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
      poster_image_url: "https://m.media-amazon.com/images/I/A1eJrOEwtoL.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Avengers: Endgame",
      description:
        "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      release_year: 2019,
      director: "Anthony Russo, Joe Russo",
      duration_minutes: 181,
      trailer_link: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      poster_image_url:
        "https://http2.mlstatic.com/D_NQ_NP_614424-MLA52735656162_122022-O.webp",
      genre_ids: [2, 3],
    },
    {
      title: "Jurassic World: Fallen Kingdom",
      description:
        "When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.",
      release_year: 2018,
      director: "J.A. Bayona",
      duration_minutes: 128,
      trailer_link: "https://www.youtube.com/watch?v=vn9mMeWcgoM",
      poster_image_url:
        "https://i.pinimg.com/736x/7e/34/aa/7e34aa6cf6c25847750f33d3bc43a5f6.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "The Batman",
      description:
        "A reboot of the Batman film franchise, the film follows a younger Bruce Wayne as he becomes Batman and faces off against the Riddler.",
      release_year: 2022,
      director: "Matt Reeves",
      duration_minutes: 170,
      trailer_link: "https://www.youtube.com/watch?v=fWQrd6cwJ0A",
      poster_image_url:
        "https://www.hometheaterseattle.com/cdn-cgi/image/quality%3D85/assets/images/the-batman-2022.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "2001: A Space Odyssey",
      description:
        "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
      release_year: 1968,
      director: "Stanley Kubrick",
      duration_minutes: 149,
      trailer_link: "https://www.youtube.com/watch?v=Z2UWOeBcsJI",
      poster_image_url:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/2001-a-space-odyssey-alternative-movie-poster-movie-poster-boy.jpg",
      genre_ids: [3],
    },
    {
      title: "Star Wars: Episode I - The Phantom Menace",
      description:
        "Two Jedi Knights escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
      release_year: 1999,
      director: "George Lucas",
      duration_minutes: 136,
      trailer_link: "https://www.youtube.com/watch?v=bD7bpG-zDJQ",
      poster_image_url:
        "https://postercity.com.ar/wp-content/uploads/2017/08/Episode1.jpg",
      genre_ids: [3],
    },
    {
      title: "Star Wars: Episode II - Attack of the Clones",
      description:
        "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.",
      release_year: 2002,
      director: "George Lucas",
      duration_minutes: 142,
      trailer_link: "https://www.youtube.com/watch?v=gYbW1F_c9eM",
      poster_image_url:
        "https://m.media-amazon.com/images/I/61nFfWio-sL._AC_UF894,1000_QL80_.jpg",
      genre_ids: [3],
    },
    {
      title: "Star Wars: Episode III - Revenge of the Sith",
      description:
        "During the near end of the clone wars, Darth Sidious has revealed himself and is ready to execute the last part of his plan to rule the galaxy. Sidious is ready for his new apprentice, Darth Vader, to step into action and kill the remaining Jedi. Vader, however, struggles to choose the dark side and save his wife or remain loyal to the Jedi order.",
      release_year: 2005,
      director: "George Lucas",
      duration_minutes: 140,
      trailer_link: "https://www.youtube.com/watch?v=5UnjrG_N8hU",
      poster_image_url:
        "https://m.media-amazon.com/images/I/61jCCwfO6HL._AC_UF894,1000_QL80_.jpg",
      genre_ids: [3],
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      description:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      release_year: 1977,
      director: "George Lucas",
      duration_minutes: 121,
      trailer_link: "https://www.youtube.com/watch?v=1g3_CFmnU7k",
      poster_image_url: "https://m.media-amazon.com/images/I/A1wnJQFI82L.jpg",
      genre_ids: [3],
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      description:
        "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
      release_year: 1980,
      director: "Irvin Kershner",
      duration_minutes: 124,
      trailer_link: "https://www.youtube.com/watch?v=JNwNXF9Y6kY",
      poster_image_url: "https://m.media-amazon.com/images/I/71TRwzW9k4L.jpg",
      genre_ids: [3],
    },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      description:
        "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
      release_year: 1983,
      director: "Richard Marquand",
      duration_minutes: 131,
      trailer_link: "https://www.youtube.com/watch?v=7L8p7_SLzvU",
      poster_image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyWvn6Z499ZG7XiFrnmi0MHo66e5VMtAG6ldMGDLjMg&s",
      genre_ids: [3],
    },
    {
      title: "Star Wars: Episode VII - The Force Awakens",
      description:
        "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
      release_year: 2015,
      director: "J.J. Abrams",
      duration_minutes: 138,
      trailer_link: "https://www.youtube.com/watch?v=sGbxmsDFVnE",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg",
      genre_ids: [3],
    },
    {
      title: "Star Wars: Episode VIII - The Last Jedi",
      description:
        "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
      release_year: 2017,
      director: "Rian Johnson",
      duration_minutes: 152,
      trailer_link: "https://www.youtube.com/watch?v=Q0CbN8sfihY",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_.jpg",
      genre_ids: [3],
    },
    {
      title: "E.T. the Extra-Terrestrial",
      description:
        "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
      release_year: 1982,
      director: "Steven Spielberg",
      duration_minutes: 115,
      trailer_link: "https://www.youtube.com/watch?v=qYAETtIIClk",
      poster_image_url:
        "https://i.pinimg.com/564x/a5/20/16/a52016b0a76bfd2b39a5df21de828e03.jpg",
      genre_ids: [3, 5],
    },
    {
      title: "The Matrix",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      release_year: 1999,
      director: "Lana Wachowski",
      duration_minutes: 136,
      trailer_link: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
      poster_image_url:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71PfZFFz9yL._AC_SL1000_.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "The Matrix Reloaded",
      description:
        "Neo and his allies race against time before the machines discover the city of Zion and destroy it. While seeking the truth about the Matrix, Neo must save Trinity from a dark fate within his dreams.",
      release_year: 2003,
      director: "Lana Wachowski, Lilly Wachowski",
      duration_minutes: 138,
      trailer_link: "https://www.youtube.com/watch?v=kYzz0FSgpSU",
      poster_image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzjQ8lT0q0RbIOYfRk-HbKrHr5hS1c8XME_Os9Iu-lw&s",
      genre_ids: [2, 3],
    },
    {
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      release_year: 2014,
      director: "Christopher Nolan",
      duration_minutes: 169,
      trailer_link: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      poster_image_url:
        "https://www.originalfilmart.com/cdn/shop/products/interstellar_2014_advance_original_film_art_a_6b147259-e4ec-4f33-b4f1-ff675c6fb87e_600x.jpg?v=1574284010",
      genre_ids: [3],
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      release_year: 2003,
      director: "Peter Jackson",
      duration_minutes: 201,
      trailer_link: "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
      poster_image_url:
        "https://i.pinimg.com/474x/11/6a/82/116a821eb7f832afc6eae4db7399dfb8.jpg",
      genre_ids: [3],
    },
    {
      title: "The Hobbit: An Unexpected Journey",
      description:
        "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
      release_year: 2012,
      director: "Peter Jackson",
      duration_minutes: 169,
      trailer_link: "https://www.youtube.com/watch?v=SDnYMbYB-nU",
      poster_image_url:
        "https://i.pinimg.com/736x/76/9f/51/769f51d079c66c1a9317b6f5df4859b5.jpg",
      genre_ids: [3],
    },
    {
      title: "The Hobbit: The Desolation of Smaug",
      description:
        "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
      release_year: 2013,
      director: "Peter Jackson",
      duration_minutes: 161,
      trailer_link: "https://www.youtube.com/watch?v=OPVWy1tFXuc",
      poster_image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrKhwCkbrL8b5O_HfvH8bjp1gWaR3LOzdW-UxV4p2cQ&s",
      genre_ids: [3],
    },
    {
      title: "Avatar",
      description:
        "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      release_year: 2009,
      director: "James Cameron",
      duration_minutes: 162,
      trailer_link: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
      poster_image_url:
        "https://i.pinimg.com/736x/8b/2f/a6/8b2fa6fb94810cd0d335b479896f7fc8.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Avatar 2",
      description:
        "A sequel to Avatar, the film continues the story of the Na'vi and their struggle against human exploitation of Pandora.",
      release_year: 2022,
      director: "James Cameron",
      duration_minutes: 180,
      trailer_link: "https://www.youtube.com/watch?v=S4R0bW9DMRs",
      poster_image_url:
        "https://i.pinimg.com/originals/dd/1f/7e/dd1f7ee95fb89f5718deb363dc16a462.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "The Martian",
      description:
        "An astronaut becomes stranded on Mars after his team assume him dead and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
      release_year: 2015,
      director: "Ridley Scott",
      duration_minutes: 144,
      trailer_link: "https://www.youtube.com/watch?v=ej3ioOneTy8",
      poster_image_url:
        "https://i.pinimg.com/originals/24/ba/f9/24baf9465e5033e258a40bdac6f46d82.jpg",
      genre_ids: [3],
    },
    {
      title: "Doctor Strange",
      description:
        "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
      release_year: 2016,
      director: "Scott Derrickson",
      duration_minutes: 115,
      trailer_link: "https://www.youtube.com/watch?v=HSzx-zryEgM",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Guardians of the Galaxy",
      description:
        "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.",
      release_year: 2014,
      director: "James Gunn",
      duration_minutes: 121,
      trailer_link: "https://www.youtube.com/watch?v=d96cjJhvlMA",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Guardians of the Galaxy Vol. 2",
      description:
        "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      release_year: 2017,
      director: "James Gunn",
      duration_minutes: 136,
      trailer_link: "https://www.youtube.com/watch?v=dW1BIid8Osg",
      poster_image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9-0WSQjzq5W0mDUKE0LZkyV0ixfASgfNSQF3Xgaoxw&s",
      genre_ids: [2, 3],
    },
    {
      title: "Spider-Man",
      description:
        "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
      release_year: 2002,
      director: "Sam Raimi",
      duration_minutes: 121,
      trailer_link: "https://www.youtube.com/watch?v=O7zvehDxttM",
      poster_image_url:
        "https://http2.mlstatic.com/D_NQ_NP_652969-MLA42972734780_082020-O.webp",
      genre_ids: [1, 2, 3],
    },
    {
      title: "Spider-Man 2",
      description:
        "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.",
      release_year: 2004,
      director: "Sam Raimi",
      duration_minutes: 127,
      trailer_link: "https://www.youtube.com/watch?v=1s9Yln0YwCw",
      poster_image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hycW3Z0Mf08tCBrpvTrZx6SEVAdXMJF7UDwdi6-EeQ&s",
      genre_ids: [1, 2, 3],
    },
    {
      title: "Spider-Man 3",
      description:
        "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.",
      release_year: 2007,
      director: "Sam Raimi",
      duration_minutes: 139,
      trailer_link: "https://www.youtube.com/watch?v=wPosLpgMtTY",
      poster_image_url:
        "https://image.tmdb.org/t/p/original/9BWVD70pofOapudGVdu7Wf90MKC.jpg",
      genre_ids: [1, 2, 3],
    },
    {
      title: "Spider-Man: Homecoming",
      description:
        "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
      release_year: 2017,
      director: "Jon Watts",
      duration_minutes: 133,
      trailer_link: "https://www.youtube.com/watch?v=U0D3AOldjMU",
      poster_image_url:
        "https://i.pinimg.com/736x/dc/6a/85/dc6a85db156a83145fda0f5b5333a792.jpg",
      genre_ids: [1, 2, 3],
    },
    {
      title: "Spider-Man: Far From Home",
      description:
        "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
      release_year: 2019,
      director: "Jon Watts",
      duration_minutes: 129,
      trailer_link: "https://www.youtube.com/watch?v=DYYtuKyMtY8",
      poster_image_url:
        "https://http2.mlstatic.com/D_NQ_NP_840029-MLA32215948434_092019-O.webp",
      genre_ids: [1, 2, 3],
    },
    {
      title: "Spider-Man: No Way Home",
      description:
        "A sequel to Spider-Man: Far From Home, the film follows Peter Parker as he tries to reverse the damage caused by the revelation of his secret identity and deal with multiversal threats.",
      release_year: 2021,
      director: "Jon Watts",
      duration_minutes: 150,
      trailer_link: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
      poster_image_url:
        "https://postercity.com.ar/wp-content/uploads/2022/03/Spiderman-No-way-home-60x90-1.jpg",
      genre_ids: [1, 2, 3],
    },
    {
      title: "Thor",
      description:
        "As the son of Odin, king of the Norse gods, Thor soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty.",
      release_year: 2011,
      director: "Kenneth Branagh",
      duration_minutes: 115,
      trailer_link: "https://www.youtube.com/watch?v=JOddp-nlNvQ",
      poster_image_url:
        "https://i.pinimg.com/474x/5b/da/c7/5bdac7e55bbe77d5de08118c4e5dd059.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Thor: Ragnarok",
      description:
        "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarok, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
      release_year: 2017,
      director: "Taika Waititi",
      duration_minutes: 130,
      trailer_link: "https://www.youtube.com/watch?v=ue80QwXMRHg",
      poster_image_url:
        "https://i.pinimg.com/originals/69/59/3a/69593a800f1a6429df644f97206b4ae6.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Dune",
      description:
        "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
      release_year: 2021,
      director: "Denis Villeneuve",
      duration_minutes: 155,
      trailer_link: "https://www.youtube.com/watch?v=n9xhJrPXop4",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      genre_ids: [3],
    },
    {
      title: "Black Panther",
      description:
        "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
      release_year: 2018,
      director: "Ryan Coogler",
      duration_minutes: 134,
      trailer_link: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
      poster_image_url:
        "https://filmartgallery.com/cdn/shop/products/Black-Panther-Vintage-Movie-Poster-Original-1-Sheet-27x41_2816d64e-02f4-4621-a854-54063accb2b5.jpg?v=1664249294",
      genre_ids: [2, 3],
    },
    {
      title: "Black Panther: Wakanda Forever",
      description:
        "A sequel to Black Panther, the film explores the future of Wakanda and its new protector.",
      release_year: 2022,
      director: "Ryan Coogler",
      duration_minutes: 160,
      trailer_link: "https://www.youtube.com/watch?v=_Z3QKkl1WyM",
      poster_image_url: "https://pbs.twimg.com/media/FeJZBNhXwAAA-0v.jpg",
      genre_ids: [2, 3],
    },
    {
      title: "Jurassic World: Dominion",
      description:
        "The third film in the Jurassic World trilogy, the film brings back characters from the original Jurassic Park and explores the coexistence of dinosaurs and humans.",
      release_year: 2022,
      director: "Colin Trevorrow",
      duration_minutes: 180,
      trailer_link: "https://www.youtube.com/watch?v=fb5ELWi-ekk",
      poster_image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdCoMnihpIYHTPxzIUFwktdJiTmiaQzbqC8oJTBOZcg&s",
      genre_ids: [2, 3],
    },
    {
      title: "Fantastic Beasts: The Secrets of Dumbledore",
      description:
        "The third film in the Fantastic Beasts series, the film follows Newt Scamander as he teams up with Albus Dumbledore to take on Gellert Grindelwald.",
      release_year: 2022,
      director: "David Yates",
      duration_minutes: 160,
      trailer_link: "https://www.youtube.com/watch?v=Y9dr2zw-TXQ",
      poster_image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzKGRzr_13NR4YbLnyJggciyUEOb5C5Ejid1zo99fBgA&s",
      genre_ids: [3],
    },
    {
      title: "Singin' in the Rain",
      description:
        "American musical-romantic comedy film directed and choreographed by Gene Kelly and Stanley Donen",
      release_year: 1952,
      director: "Gene Kelly, Stanley Donen",
      duration_minutes: 103,
      trailer_link: "https://www.youtube.com/watch?v=5_EVHeNEIJY",
      poster_image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Singin%27_in_the_Rain_%281952_poster%29.jpg/675px-Singin%27_in_the_Rain_%281952_poster%29.jpg",
      genre_ids: [4],
    },
    {
      title: "An American in Paris",
      description:
        "American musical comedy film inspired by the 1928 orchestral composition by George Gershwin",
      release_year: 1951,
      director: "Vincente Minnelli",
      duration_minutes: 113,
      trailer_link: "https://www.youtube.com/watch?v=o2WAMZRCbpU",
      poster_image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/An_American_in_Paris_%281951_film_poster%29.jpg/682px-An_American_in_Paris_%281951_film_poster%29.jpg",
      genre_ids: [4, 5],
    },
    {
      title: "The Rocky Horror Picture Show",
      description:
        "A newly engaged couple have a breakdown in an isolated area and must seek shelter at the bizarre residence of Dr. Frank-n-Furter.",
      release_year: 1975,
      director: "Jim Sharman",
      duration_minutes: 100,
      trailer_link: "https://www.youtube.com/watch?v=4plqh6obZW4",
      poster_image_url:
        "https://i.pinimg.com/originals/f8/a6/19/f8a6199ad671d387251bfb53301d260d.jpg",
      genre_ids: [4],
    },
    {
      title: "Annie Hall",
      description:
        "Neurotic New York comedian Alvy Singer falls in love with the ditzy Annie Hall.",
      release_year: 1977,
      director: "Woody Allen",
      duration_minutes: 93,
      trailer_link: "https://www.youtube.com/watch?v=TBzHphcc2Jw",
      poster_image_url:
        "https://i.pinimg.com/originals/24/ca/1a/24ca1a5cc6b5c23c6a78fbe3587b878f.jpg",
      genre_ids: [4],
    },
    {
      title: "Ghostbusters",
      description:
        "Three former parapsychology professors set up shop as a unique ghost removal service.",
      release_year: 1984,
      director: "Ivan Reitman",
      duration_minutes: 105,
      trailer_link: "https://www.youtube.com/watch?v=6hDkhw5Wkas",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_.jpg",
      genre_ids: [4],
    },
    {
      title: "Ghostbusters: Afterlife",
      description:
        "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
      release_year: 2020,
      director: "Jason Reitman",
      duration_minutes: 124,
      trailer_link: "https://www.youtube.com/watch?v=ahZFCF--uRY",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BNDRhNmUwMDktZGZjZS00NWY4LWIyNWItYmZmNWJiMDBiNDQzXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_FMjpg_UX1000_.jpg",
      genre_ids: [4],
    },
    {
      title: "Beverly Hills Cop",
      description:
        "A freewheeling Detroit cop pursuing a murder investigation finds himself dealing with the very different culture of Beverly Hills.",
      release_year: 1984,
      director: "Martin Brest",
      duration_minutes: 105,
      trailer_link: "https://www.youtube.com/watch?v=oc3sPICXZLs",
      poster_image_url:
        "https://filmartgallery.com/cdn/shop/products/Beverly-Hills-Cop-Vintage-Movie-Poster-Original-1-Sheet-27x41-7316.jpg?v=1682283619",
      genre_ids: [4],
    },
    {
      title: "Deadpool",
      description:
        "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
      release_year: 2016,
      director: "Tim Miller",
      duration_minutes: 108,
      trailer_link: "https://www.youtube.com/watch?v=9vN6DHB6bJc",
      poster_image_url:
        "https://i.pinimg.com/originals/4b/d8/76/4bd87689a2c886078721db5a4126427e.jpg",
      genre_ids: [2, 3, 4],
    },
    {
      title: "Deadpool 2",
      description:
        "Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg Cable.",
      release_year: 2018,
      director: "David Leitch",
      duration_minutes: 119,
      trailer_link: "https://www.youtube.com/watch?v=D86RtevtfrA",
      poster_image_url:
        "https://i.pinimg.com/originals/d7/b1/b2/d7b1b22d777268ef710c5f5ac3607884.jpg",
      genre_ids: [2, 3, 4],
    },
    {
      title: "The Lego Movie",
      description:
        "An ordinary LEGO construction worker, thought to be the prophesied as 'special', is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis.",
      release_year: 2014,
      director: "Phil Lord, Christopher Miller",
      duration_minutes: 100,
      trailer_link: "https://www.youtube.com/watch?v=fZ_JOBCLF-I",
      poster_image_url:
        "https://i.ebayimg.com/images/g/FTwAAOSw2U1iaCEn/s-l500.jpg",
      genre_ids: [4, 5],
    },
    {
      title: "Zootopia",
      description:
        "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
      release_year: 2016,
      director: "Byron Howard, Rich Moore",
      duration_minutes: 108,
      trailer_link: "https://www.youtube.com/watch?v=jWM0ct-OLsM",
      poster_image_url:
        "https://i.pinimg.com/originals/b7/24/d9/b724d968025c6cda0580ccfa1541a89a.png",
      genre_ids: [4, 5],
    },
    {
      title: "Gigi",
      description:
        "American musical-romantic comedy film directed by Vincente Minnelli",
      release_year: 1958,
      director: "Vincente Minnelli",
      duration_minutes: 116,
      trailer_link: "https://www.youtube.com/watch?v=rH8aVaeHqq4",
      poster_image_url:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Gigi_%281958_poster%29.jpg",
      genre_ids: [4, 5],
    },
    {
      title: "The Sound of Music",
      description:
        "A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.",
      release_year: 1965,
      director: "Robert Wise",
      duration_minutes: 172,
      trailer_link: "https://www.youtube.com/watch?v=UY6uw3WpPzY",
      poster_image_url:
        "https://m.media-amazon.com/images/I/81pj7Qi5bdL._AC_UF894,1000_QL80_.jpg",
      genre_ids: [5],
    },
    {
      title: "Toy Story",
      description:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
      release_year: 1995,
      director: "John Lasseter",
      duration_minutes: 81,
      trailer_link: "https://www.youtube.com/watch?v=v-PjgYDrg70",
      poster_image_url:
        "https://http2.mlstatic.com/D_NQ_NP_911000-MLA52841797512_122022-O.webp",
      genre_ids: [4, 5],
    },
    {
      title: "Toy Story 3",
      description:
        "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
      release_year: 2010,
      director: "Lee Unkrich",
      duration_minutes: 103,
      trailer_link: "https://www.youtube.com/watch?v=JcpWXaA2qeg",
      poster_image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhYl2aJikxNLTa6HItdanGEX3WVkdSvps8aTMa7GXdA&s",
      genre_ids: [4, 5],
    },
    {
      title: "Toy Story 4",
      description:
        'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.',
      release_year: 2019,
      director: "Josh Cooley",
      duration_minutes: 100,
      trailer_link: "https://www.youtube.com/watch?v=wmiIUN-7qhE",
      poster_image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVjJZHCprwViFK90HvJvxAKSprsmjBNwXuqWflmjoNQ&s",
      genre_ids: [4, 5],
    },
    {
      title: "Finding Nemo",
      description:
        "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
      release_year: 2003,
      director: "Andrew Stanton, Lee Unkrich",
      duration_minutes: 100,
      trailer_link: "https://www.youtube.com/watch?v=SPHfeNgogVs",
      poster_image_url:
        "https://i.pinimg.com/736x/3b/d3/84/3bd3841c04be3ba825164a3f2d6cf715.jpg",
      genre_ids: [5],
    },
    {
      title: "The Incredibles",
      description:
        "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
      release_year: 2004,
      director: "Brad Bird",
      duration_minutes: 115,
      trailer_link: "https://www.youtube.com/watch?v=-UaGUdNJdRQ",
      poster_image_url:
        "https://m.media-amazon.com/images/I/71kod5t-q9L._AC_UF894,1000_QL80_.jpg",
      genre_ids: [4, 5],
    },
    {
      title: "Incredibles 2",
      description:
        "The Incredibles family takes on a new mission which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
      release_year: 2018,
      director: "Brad Bird",
      duration_minutes: 118,
      trailer_link: "https://www.youtube.com/watch?v=i5qOzqD9Rms",
      poster_image_url:
        "https://i.pinimg.com/564x/e8/dc/0d/e8dc0d75be4255dfe6e5e8cad2700850.jpg",
      genre_ids: [4, 5],
    },
    {
      title: "Shrek the Third",
      description:
        "When his new father-in-law, King Harold falls ill, Shrek is looked at as the heir to the land of Far, Far Away. Not one to give up his beloved swamp, Shrek recruits his friends Donkey and Puss in Boots to install the rebellious Artie as the new king. Princess Fiona, however, rallies a band of royal girlfriends to fend off a coup d'etat by the jilted Prince Charming.",
      release_year: 2007,
      director: "Chris Miller, Raman Hui",
      duration_minutes: 93,
      trailer_link: "https://www.youtube.com/watch?v=_MoIr7811Bs",
      poster_image_url:
        "https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_.jpg",
      genre_ids: [4, 5],
    },
    {
      title: "Shrek 2",
      description:
        "Princess Fiona's parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres.",
      release_year: 2004,
      director: "Andrew Adamson, Kelly Asbury, Conrad Vernon",
      duration_minutes: 93,
      trailer_link: "https://www.youtube.com/watch?v=xBgSfhp5Fxo",
      poster_image_url:
        "https://i.pinimg.com/474x/75/d9/c7/75d9c786193fffa115dd89d0658b38ea.jpg",
      genre_ids: [4, 5],
    },
    {
      title: "Up",
      description:
        "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
      release_year: 2009,
      director: "Pete Docter",
      duration_minutes: 96,
      trailer_link: "https://www.youtube.com/watch?v=pkqzFUhGPJg",
      poster_image_url:
        "https://i.pinimg.com/originals/f5/74/17/f57417c4b6cb43e9c9c79fe7e1e55741.jpg",
      genre_ids: [4, 5],
    },
    {
      title: "Moana",
      description:
        "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
      release_year: 2016,
      director: "Ron Clements, John Musker",
      duration_minutes: 107,
      trailer_link: "https://www.youtube.com/watch?v=LKFuXETZUsI",
      poster_image_url:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/A1JOaV3B6fL._AC_SL1500_.jpg",
      genre_ids: [4, 5],
    },
    {
      title: "Frozen",
      description:
        "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
      release_year: 2013,
      director: "Chris Buck, Jennifer Lee",
      duration_minutes: 102,
      trailer_link: "https://www.youtube.com/watch?v=TbQm5doF_Uc",
      poster_image_url:
        "https://m.media-amazon.com/images/I/91ymcTcADKL._AC_UF1000,1000_QL80_.jpg",
      genre_ids: [4, 5],
    },
    {
      title: "Frozen II",
      description:
        "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
      release_year: 2019,
      director: "Chris Buck, Jennifer Lee",
      duration_minutes: 103,
      trailer_link: "https://www.youtube.com/watch?v=bwzLiQZDw2I",
      poster_image_url:
        "https://i.pinimg.com/originals/dc/46/b3/dc46b3be802331907d0e6b92fe6cf9b1.png",
      genre_ids: [4, 5],
    },
    {
      title: "Coco",
      description:
        "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
      release_year: 2017,
      director: "Lee Unkrich",
      duration_minutes: 105,
      trailer_link: "https://www.youtube.com/watch?v=xlnPHQ3TLX8",
      poster_image_url:
        "https://http2.mlstatic.com/D_NQ_NP_915189-MLA27017444936_032018-O.webp",
      genre_ids: [4, 5],
    },
    {
      title: "The Lion King",
      description:
        "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      release_year: 1994,
      director: "Roger Allers",
      duration_minutes: 88,
      trailer_link: "https://www.youtube.com/watch?v=4sj1MT05lAA",
      poster_image_url:
        "https://i.pinimg.com/736x/3d/dc/52/3ddc52d611c79b17e1b91cc41c07079d.jpg",
      genre_ids: [4, 5],
    },
    {
      title: "Inside Out",
      description:
        "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust, and Sadness - conflict on how to navigate a new city, house, and school.",
      release_year: 2015,
      director: "Pete Docter",
      duration_minutes: 95,
      trailer_link: "https://www.youtube.com/watch?v=seMwpP0yeu4",
      poster_image_url:
        "https://filmartgallery.com/cdn/shop/products/Inside-Out-Vintage-Movie-Poster-Original-1-Sheet-27x41.webp?v=1673039121",
      genre_ids: [4, 5],
    },
  ],
};
