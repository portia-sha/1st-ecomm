import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// WithSpinner, a HOC that takes component we wanna wrap and return a spinner component, that will render component we pass in when loading is false ( after first arrow),
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    ); // When loading is true, the page will run Spinner animation to wait to get data, as long as loading is false, which mwans finish get data, we will render the component that passed in and other components except loading to next component
  };
  return Spinner;
};
export default WithSpinner;
