
import './../App.css';
import React, { useEffect, useState } from 'react';
import './../Wallet/CreateMenemonics.css';
import axios from 'axios';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Tornado from '@mui/icons-material/Tornado';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

const CreateMenemonics = () => {
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/');
  };
  const goToCreateWallet = () => {
    navigate('/createWallet');
  };

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackSeverity, setSnackSeverity] = useState('success');
  const handleSnackClose = () => {
      setSnackOpen(false);
  };
  const action = (
      <React.Fragment>
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );

  const [walletName, setWalletName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');
  const [menemonic, setMenemonic] = useState('');
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function createMenemonic(){
    if(password != passwordValidation){
      setSnackSeverity('error');
      setSnackMessage('password does not match');
      setSnackOpen(true);

      return;
    }

    axios.post('https://localhost:7227/api/Wallet/create?walletName='+ walletName +'&password='+ password +''
        // , {
        //   walletName,
        //   password
        // }
        )
        .then(function (response) {
          setMenemonic(response.data.mnemonic);
        })
        .catch(function (error) {
          setSnackSeverity('error');
          setSnackMessage('Server is down');
          setSnackOpen(true);
        });
  }

  return (
    <div className="center">
      <h1>CreateWallet-StepOne</h1>
      <Paper elevation={3} variant="elevation" className='center-panel'>
        <div className="margin-5">
          <div className="margin-5">
              <TextField id="wallet-name" label="Wallet name" variant="outlined" value={walletName} onChange={(e) => setWalletName(e.target.value)}/>
          </div>
          <div className="margin-5">
              <TextField id="password" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="margin-5">
              <TextField id="password-validation" label="Password" variant="outlined" type="password" value={passwordValidation} onChange={(e) => setPasswordValidation(e.target.value)}/>
          </div>
          <Typography variant="body1" component="span" sx={{ fontWeight: 500, fontSize: '20px' }}>
          <div>
            menemonic:
          </div>
          <div className="margin-5">
            {menemonic}
          </div>
          </Typography>
              <div className="right-aligned-buttons">
                  <span className="margin-5">
                  <Button variant="outlined" onClick={goToMainPage}>Cancel</Button>
                  </span>
                  <span className="margin-5">
                    <Button variant="contained" className="Button" onClick={createMenemonic}>Create menemonic</Button>
                  </span>
                  <span className="margin-5">
                    <Button variant="contained" className="Button" onClick={goToCreateWallet}>Go to second step</Button>
                  </span>
              </div>
        </div>
      </Paper>

      <Snackbar open={snackOpen} autoHideDuration={3000} onClose={handleSnackClose} action={action}>
        <Alert onClose={handleSnackClose} severity={snackSeverity} variant="filled" sx={{ width: '100%' }}>
            {snackMessage}
        </Alert>
        </Snackbar>
    </div>
  );
};

export default CreateMenemonics;
