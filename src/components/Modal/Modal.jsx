import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseEscape);
  }
  onCloseEscape = e => {
    if (e.code === 'Escape') {
      this.props.onToggle();
      console.log(e.code);
    }
  };
  onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onToggle();
    }
  };
  render() {
    const { largeImageURL, tags } = this.props.image;

    return (
      <div className={css.Overlay} onClick={this.onBackdropClick}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
};
