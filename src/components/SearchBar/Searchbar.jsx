import { useState } from 'react';
import IconBtn from 'components/IconBtn/IconBtn';
import { ReactComponent as SearchIcon } from '../icons/image_search.svg';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    const { value } = event.currentTarget;

    setQuery(value);
  };
  const handleInputSubmit = event => {
    event.preventDefault();

    onSubmit(query.toLowerCase().trim());
    setQuery('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleInputSubmit}>
        <IconBtn type="submit" className={css.SearchFormButton}>
          <SearchIcon className={css.svgIcon} />
          <span className={css.SearchFormButtonLabel}></span>
        </IconBtn>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
          value={query}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
