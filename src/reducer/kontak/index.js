import { GET_LIST_BENGKEL, ADD_BENGKEL, DELET_BENGKEL, DETAIL_BENGKEL, UPDATE_BENGKEL } from '../../action/kontak';

const initialState = {
  getlistBengkelResult: false,
  getlistBengkelLoading: false,
  getlistBengkelError: false,

  addBengkelResult: false,
  addBengkelLoading: false,
  addBengkelError: false,

  deletBengkelResult: false,
  deletBengkelLoading: false,
  deletBengkelError: false,

  detailBengkelResult: false,

  updateBengkelResult: false,
  updateBengkelLoading: false,
  updateBengkelError: false,
};

const Kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_BENGKEL:
      return {
        ...state,
        getlistBengkelResult: action.payload.data,
        getlistBengkelLoading: action.payload.loading,
        getlistBengkelError: action.payload.errorMessage,
      };

    case ADD_BENGKEL:
      return {
        ...state,
        addBengkelResult: action.payload.data,
        addBengkelLoading: action.payload.loading,
        addBengkelError: action.payload.errorMessage,
      };
    case DELET_BENGKEL:
      return {
        ...state,
        deletBengkelResult: action.payload.data,
        deletBengkelLoading: action.payload.loading,
        deletBengkelError: action.payload.errorMessage,
      };
    case DETAIL_BENGKEL:
      return {
        ...state,
        detailBengkelResult: action.payload.data,
      };
    case UPDATE_BENGKEL:
      return {
        ...state,
        updateBengkelResult: action.payload.data,
        updateBengkelLoading: action.payload.loading,
        updateBengkelError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default Kontak;
