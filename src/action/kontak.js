import axios from 'axios';

export const GET_LIST_BENGKEL = 'GET_LIST_BENGKEL';
export const ADD_BENGKEL = 'ADD_BENGKEL';
export const DELET_BENGKEL = 'DELET_BENGKEL';
export const DETAIL_BENGKEL = 'DETAIL_BENGKEL';
export const UPDATE_BENGKEL = 'UPDATE_BENGKEL';

export const getlistBengkel = () => {
  return (dispatch) => {
    //loading

    dispatch({
      type: GET_LIST_BENGKEL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get Api

    axios({
      method: 'GET',
      url: 'https://fluffy-intelligent-carpenter.glitch.me/Bengkel',
    })
      .then((response) => {
        //berhasil get api
        dispatch({
          type: GET_LIST_BENGKEL,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        dispatch({
          type: GET_LIST_BENGKEL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.Message,
          },
        });
      });
  };
};

export const addBengkel = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_BENGKEL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get Api

    axios({
      method: 'POST',
      url: 'https://fluffy-intelligent-carpenter.glitch.me/Bengkel/bengkel',
      data: data,
    })
      .then((response) => {
        //berhasil get api
        dispatch({
          type: ADD_BENGKEL,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        dispatch({
          type: ADD_BENGKEL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.Message,
          },
        });
      });
  };
};

export const deletBengkel = (id) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: DELET_BENGKEL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get Api

    axios({
      method: 'DELETE',
      url: `https://fluffy-intelligent-carpenter.glitch.me/Bengkel/${id}`,
    })
      .then((response) => {
        //berhasil get api
        dispatch({
          type: DELET_BENGKEL,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        dispatch({
          type: DELET_BENGKEL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.Message,
          },
        });
      });
  };
};

export const detailBengkel = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_BENGKEL,
      payload: {
        data: data,
      },
    });
  };
};

export const updateBengkel = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: UPDATE_BENGKEL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get Api

    axios({
      method: 'PUT',
      url: `https://fluffy-intelligent-carpenter.glitch.me/Bengkel/${data.id}`,
      data: data,
    })
      .then((response) => {
        //berhasil get api
        dispatch({
          type: UPDATE_BENGKEL,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        dispatch({
          type: UPDATE_BENGKEL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.Message,
          },
        });
      });
  };
};
