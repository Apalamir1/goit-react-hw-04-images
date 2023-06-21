import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={css.ImageGallery}>
      {images.map(el => (
        <ImageGalleryItem key={el.id} el={el} onClick={onClick} />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
