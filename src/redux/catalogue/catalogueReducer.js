/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to the product list.
 *
 * @format
 */

import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  OPEN_PRODUCT_INFO,
} from './catalogueActions';

export default (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        appState: {
          ...state.appState,
          isProductsLoadingFinished: true,
        },
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        appState: {
          ...state.appState,
          isProductsLoadingFinished: true,
        },
        domainData: { ...state.domainData, products: action.products },
      };

    case OPEN_PRODUCT_INFO:
      return {
        ...state,
        appState: {
          ...state.appState,
          selectedProduct: action.id,
        },
      };

    default:
      return state;
  }
};
