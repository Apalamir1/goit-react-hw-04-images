import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <>
        {this.props.searchResult.hits.map(item => (
          <li className="ImageGalleryItem" key={item.id}>
            <img
              className="ImageGalleryItem-image"
              alt={item.id}
              src={item.webformatURL}
            />
          </li>
        ))}
      </>
    );
  }
}
