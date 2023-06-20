import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import IconBtn from 'components/IconBtn/IconBtn';
import { ReactComponent as SearchIcon } from '../icons/image_search.svg';

import './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    searchValue: '',
  };
  handleSearchChange = event => {
    this.setState({ searchValue: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchValue.trim() === '') {
      toast.error('the search field cannot be empty!', {
        autoClose: 3000,
        theme: 'colored',
      });

      return;
    }
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <IconBtn type="submit">
            <SearchIcon />
          </IconBtn>

          <input
            className="SearchForm-input"
            type="text"
            name="searchValue"
            value={this.state.searchValue}
            onChange={this.handleSearchChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
