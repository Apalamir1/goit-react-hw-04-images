import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ el, onClick }) {
  const { webformatURL, tags, largeImageURL } = el;
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => onClick({ tags, largeImageURL })}
    >
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  el: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
