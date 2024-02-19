# MOVIX APP
Movix is an immersive entertainment-based website that seamlessly integrates with The Movie Database (TMDb) API as its primary data source. Leveraging the vast repository of movie information provided by TMDb, Movix dynamically fetches and displays comprehensive details about a wide range of movies. Additionally, Movix enhances the user experience by incorporating YouTube functionality to enable users to watch trailers directly on the platform. This integration not only streamlines the process of exploring movie information but also offers a convenient way for users to preview trailers without leaving the Movix website. The combination of TMDb API and YouTube integration ensures that Movix provides users with a rich and engaging movie-browsing experience. For more information on how to use Movix and its features, refer to the documentation below.

### Technology used:
1. reactjs + vite to create and handle all extensions and making process.
2. use of SCSS to set all styles on a structure and also developers can handle the CSS easily.
3. use of TMBD website and its api to get all datas and use here.

### Dependencies used:
1. **axios**: used to fetch all the datas using api of tmdb api.
2. **dayjs**: used to format date structure of released date of movies.
3. **react-circular-progressbar**: used to making of progressbar of rating view of the movie.
4. **react-icons**: used to get all icons like- search, cross, menu, etc...
5. **react-infinite-scroll-component**: used to get infinite movie on the search content mainly more movies.
6. **react-player**: used to play trailer of movie.
7. **react-router-dom**: it is used basically routing process to view on another page like- when click on a movie go to movie detail page.
8. **react-select**: it is used to select filter the one or more than genres here.
9. **react-lazy-load-image-component**: it used on basically loading of images when data is on pending state.
10. **@reduxjs/toolkit**: to centerlized the state data and used to components.
11. **react-redux**: use of redux actions and states on the components
12. **sass**: it gives some flexability on the css to use like mixins use here for responsive.


### TMDB API used

**Base-url**: [https://api.themoviedb.org/3](https://api.themoviedb.org/3)
1. Homepage<br>
Getting Banner data: (Base-url/movie/upcoming)<br>
Getting Popular movies data: (Base-url/--endPoint--/popular)<-endpoints: movie or tv<br>
Getting Banner data: (Base-url/movie/upcoming)<br>