import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function InputData({ tambahPasien }) {
  const [noRM, setNoRM] = useState('');
  const [nama, setNama] = useState('');
  const [poli, setPoli] = useState('');
  const [pasienStatus, setPasienStatus] = useState('Baru');

  const handleSubmit = (e) => {
    e.preventDefault();
    const pasien = {
      noRM,
      nama,
      poli,
      pasienStatus
    };
    tambahPasien(pasien);
    setNoRM('');
    setNama('');
    setPoli('');
    setPasienStatus('Baru');
  };

  return (
    <div>
      <h1>Input Data Pasien</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="noRM">No RM:</label>
        <input type="text" id="noRM" value={noRM} onChange={(e) => setNoRM(e.target.value)} />
        <label htmlFor="nama">Nama:</label>
        <input type="text" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
        <label htmlFor="poli">Poli:</label>
        <input type="text" id="poli" value={poli} onChange={(e) => setPoli(e.target.value)} />
        <label htmlFor="pasienStatus">Pasien Baru/Lama:</label>
        <select id="pasienStatus" value={pasienStatus} onChange={(e) => setPasienStatus(e.target.value)}>
          <option value="Baru">Baru</option>
          <option value="Lama">Lama</option>
        </select>
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}
//////////////////
function OutputData({ dataPasien }) {
  return (
    <div>
      <h1>Data Pasien</h1>
      {dataPasien.length > 0 ? (
        <table style={{borderCollapse: 'collapse', width: '100%'}}>
          <thead>
            <tr>
              <th style={{backgroundColor: '#4CAF50', color: 'white', padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>No RM</th>
              <th style={{backgroundColor: '#4CAF50', color: 'white', padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Nama</th>
              <th style={{backgroundColor: '#4CAF50', color: 'white', padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Poli</th>
              <th style={{backgroundColor: '#4CAF50', color: 'white', padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Pasien Baru/Lama</th>
            </tr>
          </thead>
          <tbody>
            {dataPasien.map((pasien, index) => (
              <tr key={index}>
                <td style={{padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>{pasien.noRM}</td>
                <td style={{padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>{pasien.nama}</td>
                <td style={{padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>{pasien.poli}</td>
                <td style={{padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>{pasien.pasienStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Tidak ada data pasien.</p>
      )}
    </div>
  );
}

function App() {
  const [dataPasien, setDataPasien] = useState([]);

  const tambahPasien = (pasien) => {
    setDataPasien((prevData) => [...prevData, pasien]);
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Input Data</Tab>
          <Tab>Output Data</Tab>
        </TabList>

        <TabPanel>
          <InputData tambahPasien={tambahPasien} />
        </TabPanel>
        <TabPanel>
          <OutputData dataPasien={dataPasien} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
