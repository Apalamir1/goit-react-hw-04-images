import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../components/SearchBar/SearchBar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import '../styles.css';

export default class App extends Component {
  state = {
    searchValue: '',
  };
  handelFormSubmit = searchValue => {
    this.setState({ searchValue });
  };
  render() {
    return (
      <>
        <SearchBar onSubmit={this.handelFormSubmit} />
        <ImageGallery searchValue={this.state.searchValue} />
        <ToastContainer />
      </>
    );
  }
}