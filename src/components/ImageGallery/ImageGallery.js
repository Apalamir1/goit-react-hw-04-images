import { Component } from 'react';
import './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    searchResault: null,
    error: null,
    status: 'idel',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.imageGallery;
    const newSearch = this.props.imageGallery;
    if (prevSearch !== newSearch) {
      this.setState({ status: 'pending' });
      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${newSearch}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(new Error(`Cannot find ${newSearch}`));
          })
          .then(searchResault =>
            this.setState({ searchResault, status: 'resolved' })
          )
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 1000);
    }
  }

  render() {
    const { searchResault, error, status } = this.state;

    if (status === 'idel') {
      return <div></div>;
    }
    if (status === 'pending') {
      return <div> Loading ... </div>;
    }
    if (status === 'rejected') {
      return <div>{error.message}</div>;
    }
    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          console.log();
          {searchResault && (
            <li class="gallery-item">
              <img
                alt={searchResault.name}
                src={
                  searchResault.sprites.other['oficial-artwork'].front_default
                }
                width="240"
              />
            </li>
          )}
        </ul>
      );
    }
  }
}
