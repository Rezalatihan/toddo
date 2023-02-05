import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getlistBengkel, deletBengkel, detailBengkel } from '../../action/kontak';
import Table from 'react-bootstrap/Table';

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
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Harga Barang</th>
          </tr>
        </thead>
        {getlistBengkelResult ? (
          getlistBengkelResult.map((bengkel) => {
            return (
              <tbody>
                <tr key={bengkel.id}>
                  <td>{bengkel.id}</td>
                  <td>{bengkel.nama}</td>
                  <td>{bengkel.harga}</td>
                  <button onClick={() => dispatch(deletBengkel(bengkel.id))}>Hapus</button>
                  <button onClick={() => dispatch(detailBengkel(bengkel))}>Edit</button>
                </tr>
              </tbody>
            );
          })
        ) : getlistBengkelLoading ? (
          <p> LOADING ....</p>
        ) : (
          <p>{getlistBengkelError ? getlistBengkelError : 'data kosong'}</p>
        )}
      </Table>
    </div>
  );
}

export default ListBengkel;
