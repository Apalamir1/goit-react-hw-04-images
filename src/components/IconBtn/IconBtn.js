import React from 'react';
import PropTypes from 'prop-types';
import './IconBtn.module.css';

const IconBtn = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    className="SearchForm-button"
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);
IconBtn.defaultProps = {
  onClick: () => null,
  children: null,
};
IconBtn.protoType = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
export default IconBtn;
