
import './../App.css';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

const AlreadyHaveWallet = () => {
    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate('/');
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

    const [password, setPassword] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [firstMnemonic, setFirstMnemonic] = useState('');
    const [secondMnemonic, setSecondMnemonic] = useState('');
    const [thirdMnemonic, setThirdMnemonic] = useState('');
    const [fourthMnemonic, setFourthMnemonic] = useState('');

    function connectToWallet(){
        if(password != passwordValidation){
            setSnackSeverity('error');
            setSnackMessage('password does not match');
            setSnackOpen(true);
        }

        navigate('/walletAddresses/200');

        axios.post('/connectToWallet', {
            password,
            passwordValidation,
            mnemonics: [firstMnemonic, secondMnemonic, thirdMnemonic, fourthMnemonic]
          })
          .then(function (response) {
            
          })
          .catch(function (error) {
            
          });
    }


  return (
    <div class="center">
      <h1>Wallet creation</h1>
        <Paper elevation={3} variant="elevation" className='center-panel'>
          <div class="margin-5">
            <div class="margin-5">
                <TextField id="password" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class="margin-5">
                <TextField id="password-validation" label="Password" variant="outlined" type="password" value={passwordValidation} onChange={(e) => setPasswordValidation(e.target.value)}/>
            </div>
            <div class="margin-5">
                <TextField id="first-menemonic" label="First menemonic" variant="outlined" value={firstMnemonic} onChange={(e) => setFirstMnemonic(e.target.value)}/>
            </div>
            <div class="margin-5">
                <TextField id="second-menemonic" label="Second menemonic" variant="outlined" value={secondMnemonic} onChange={(e) => setSecondMnemonic(e.target.value)}/>
            </div>
            <div class="margin-5">
                <TextField id="third-menemonic" label="Third menemonic" variant="outlined" value={thirdMnemonic} onChange={(e) => setThirdMnemonic(e.target.value)}/>
            </div>
            <div class="margin-5">
                <TextField id="fourth-menemonic" label="Fourth menemonic" variant="outlined" value={fourthMnemonic} onChange={(e) => setFourthMnemonic(e.target.value)}/>
            </div>
            
                <div className="right-aligned-buttons">
                    <span class="margin-5">
                    <Button variant="outlined" onClick={goToMainPage}>Cancel</Button>
                    </span>
                    <span class="margin-5">
                    <Button variant="contained" className="Button" onClick={connectToWallet}>Connect</Button>
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

export default AlreadyHaveWallet;
