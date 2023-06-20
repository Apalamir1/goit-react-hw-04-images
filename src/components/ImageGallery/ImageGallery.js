import { Component } from 'react';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';

import './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    searchResult: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchValue;
    const newSearch = this.props.searchValue;
    if (prevSearch !== newSearch) {
      this.setState({ status: 'pending' });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${newSearch}&page=1&key=33612656-05dca074429c1b844fadcbf1e&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error(`Cannot find ${newSearch}`);
          })
          .then(data => {
            if (data.hits.length > 0) {
              this.setState({ searchResult: data, status: 'resolved' });
            } else {
              throw new Error(`No images found for ${newSearch}`);
            }
          })
          .catch(error => {
            this.setState({ error, status: 'rejected' });
            toast.error(error.message, {
              autoClose: 3000,
              theme: 'colored',
            });
          });
      }, 1000);
    }
  }

  render() {
    const { status } = this.state;

    if (status === 'idle') {
      return;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return;
    }
    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          <ImageGalleryItem searchResult={this.state.searchResult} />
          {this.state.searchResult.length < 12 ? null : (
            <Button onClick={this.getData} />
          )}
        </ul>
      );
    }
  }
}
