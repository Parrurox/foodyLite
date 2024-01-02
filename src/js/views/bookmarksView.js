import View from './View.js';
import previewView from './previewView.js';
// import icons from 'url:../../img/icons.svg'; // Parcel 2
//had to do this because parcel was adding a random string to the end of the url
import iconsUrl from 'url:../../img/icons.svg';
const [icons] = iconsUrl.split('?');
// what the F was that parcel??

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
