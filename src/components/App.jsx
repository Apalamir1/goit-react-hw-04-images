import { useState, useEffect } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import css from '../components/App.module.css';
import Searchbar from './SearchBar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import getImages from 'services-api/Services-api';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export default function App() {
  const [images, setImages] = useState([]);
  const [largeImage, setLargeImage] = useState({});
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);

    getImages(query, page)
      .then(response => {
        console.log(response);
        setImages(prev => [...prev, ...response.data.hits]);
      })
      .catch(error => Report.failure('Notiflix Failure', `${error}`, 'Okay'))
      .finally(setLoading(false));
  }, [page, query]);

  const onSubmitBtn = dataQuery => {
    setQuery(dataQuery);
    setPage(1);
    setImages([]);
  };

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };
  const onImageClick = data => {
    setLargeImage(data);
    toggleModal();
  };
  const onLoadMoreBtn = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSubmitBtn} />
      {images.length !== 0 && (
        <ImageGallery images={images} onClick={onImageClick} />
      )}
      {images.length < 12 ? null : <Button onClick={onLoadMoreBtn} />}

      {loading && <Loader />}
      {isModalOpen && <Modal image={largeImage} onToggle={toggleModal} />}
    </div>
  );
}
