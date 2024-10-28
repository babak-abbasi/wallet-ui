
import './../App.css';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import TextField from '@mui/material/TextField';

const SendTransaction = () => {
  const { addressId } = useParams();

    const navigate = useNavigate();
    const goToWalletDetail = () => {
        navigate('/walletDetail/101');
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

    const [addressBalance, setAddressBalance] = useState(4564);
    const [address, setAddress] = useState("adad4564");
    const [amount, setAmount] = useState(100);

    function send(){

        // axios.post('/sendTransaction', {
        //     walletId,
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }

  return (
    <div className="center">
      <h1>$Balance: {addressBalance}</h1>
        <Paper elevation={3} variant="elevation" className="center-panel">
        <div>
            <h1>Make a transaction</h1>
            <div className="margin-15">
              <TextField id="amount" label="Amount" variant="outlined" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <div className="margin-15">
              <TextField id="address" label="Address" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div className='right-aligned-buttons'>
                <span className="margin-5">
                    <Button variant="outlined" onClick={goToWalletDetail}>Back</Button>
                </span>
                <span className="margin-5">
                    <Button variant="contained" className="Button" onClick={send}>Send</Button>
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

export default SendTransaction;
