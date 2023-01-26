import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getlistBengkel, deletBengkel, detailBengkel } from '../../action/kontak';

function ListBengkel() {
  const { getlistBengkelResult, getlistBengkelLoading, getlistBengkelError, deletBengkelResult } = useSelector((state) => state.kontakReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //panggil acction getlist
    dispatch(getlistBengkel());
  }, [dispatch]);

  useEffect(() => {
    if (deletBengkelResult) {
      dispatch(getlistBengkel());
    }
  }, [deletBengkelResult, dispatch]);

  return (
    <div>
      <h1>list barang</h1>
      <thead>
        <tr>
          <td>No</td>
          <td>Nama Barang</td>
          <td>Harga Barang</td>
        </tr>
      </thead>
      <tbody>
        {getlistBengkelResult ? (
          getlistBengkelResult.map((bengkel) => {
            return (
              <div>
                <tr key={bengkel.id}>
                  <th>{bengkel.id}</th>
                  <th>{bengkel.nama}</th>
                  <th>{bengkel.harga}</th>

                  <button onClick={() => dispatch(deletBengkel(bengkel.id))}>Hapus</button>
                  <button onClick={() => dispatch(detailBengkel(bengkel))}>Edit</button>
                </tr>
              </div>
            );
          })
        ) : getlistBengkelLoading ? (
          <p> LOADING ....</p>
        ) : (
          <p>{getlistBengkelError ? getlistBengkelError : 'data kosong'}</p>
        )}
      </tbody>
    </div>
  );
}

export default ListBengkel;
