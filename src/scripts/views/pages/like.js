/* eslint-disable no-new */
import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import FavoriteMovieSearchView from './liked-movie/favorite-movie-search-view';
import FavoriteMovieSearchPresenter from './liked-movie/favorite-movie-search-presenter';
import FavoriteMovieShowPresenter from './liked-movie/favorite-movie-show-presenter';

const view = new FavoriteMovieSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb });
    new FavoriteMovieSearchPresenter({ view, favoriteMovies: FavoriteMovieIdb });
  },
};

export default Like;
