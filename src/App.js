import './App.css';
import * as React from 'react';
import WalletOutlined from '@mui/icons-material/WalletOutlined';
import axios from 'axios';

import '@fontsource/roboto/300.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title">
          Wallet
          <WalletOutlined color="success" fontSize="larger"></WalletOutlined>
          <Button variant="contained" onClick={() => {alert('get');}}>Contained</Button>
        </div>
      </header>
    </div>
  );
}

function get(){
  axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

export default App;
