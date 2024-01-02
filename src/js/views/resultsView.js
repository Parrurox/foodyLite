import View from './View.js';
import previewView from './previewView.js';
// import icons from 'url:../../img/icons.svg'; // Parcel 2
//had to do this because parcel was adding a random string to the end of the url
import iconsUrl from 'url:../../img/icons.svg';
const [icons] = iconsUrl.split('?');
// what the F was that parcel??

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
