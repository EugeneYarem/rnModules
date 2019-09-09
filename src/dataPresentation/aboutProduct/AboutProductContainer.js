/**
 * This container contains all the functions and data to dispatch them to the AboutProductScreen.
 *
 * @format
 */

import React from 'react';

import AboutProductScreen from './AboutProductScreen';

// Screen requires fetchProductComments, goTo, isProductLoadingFinished, product
export default props => <AboutProductScreen {...props} />;
