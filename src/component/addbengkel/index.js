import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBengkel, getlistBengkel, updateBengkel } from '../../action/kontak';

function AddBengkel() {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [id, setId] = useState('');

  const { addBengkelResult, detailBengkelResult, updateBengkelResult } = useSelector((state) => state.kontakReducer);
  const dispacth = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (id) {
      //update isi
      dispacth(updateBengkel({ id: id, nama: nama, harga: harga }));
    } else {
      //add isi
      dispacth(addBengkel({ nama: nama, harga: harga }));
    }
  };

  useEffect(() => {
    if (addBengkelResult) {
      dispacth(getlistBengkel());
      setNama('');
      setHarga('');
    }
  }, [addBengkelResult, dispacth]);

  useEffect(() => {
    if (detailBengkelResult) {
      setNama(detailBengkelResult.nama);
      setHarga(detailBengkelResult.harga);
      setId(detailBengkelResult.id);
    }
  }, [detailBengkelResult, dispacth]);

  useEffect(() => {
    if (updateBengkelResult) {
      dispacth(getlistBengkel());
      setNama('');
      setHarga('');
    }
  }, [updateBengkelResult, dispacth]);

  return (
    <div>
      <h4>{id ? ' UPDATE LIST' : 'ADD LIST'}</h4>
      <form onSubmit={(e) => handelSubmit(e)}>
        <input type="text" name="nama" placeholder="nama barang ...." value={nama} onChange={(e) => setNama(e.target.value)} />

        <input type="text" name="harga" placeholder="harga barang ...." value={harga} onChange={(e) => setHarga(e.target.value)} />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default AddBengkel;
