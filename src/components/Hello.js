import { useEffect, useState } from "react";

const Hello = () => {
  const [angka, setAngka] = useState(0);
  const [nama, setNama] = useState('')

  useEffect(() => {
    document.title = angka;

  }, [angka]);

  return (
    <div>
      <p>Nilai: {angka}</p>
      <button onClick={() => setAngka(angka + 1)}>Add</button>
      <p>Nama : {nama}</p>
      <button onClick={() => setNama('Naufal')}>Nama</button>
    </div>
  );
};

export default Hello;
