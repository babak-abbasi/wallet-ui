
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
import TornadoIcon from '@mui/icons-material/Tornado';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const WalletDetail = () => {
  const { addressId } = useParams();

    const navigate = useNavigate();
    const goToWalletTransactions = () => {
        navigate('/walletAddresses/100');
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

    const [addressBalance, setAddressBalance] = useState(5005600);
    const [transactions, setTransactions] = useState([]);

    function send(){
        navigate('/sendTransaction/101');
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            // const response = await axios.get('https://api.example.com/data');
            const response = '[{"id": 1,"amount": 30000000, "isReceive": true},{"id": 2, "amount":4000000000, "isReceive": false},{"id": 3,"amount": 604545454500, "isReceive": true},{"id": 20, "amount":4000000000},{"id": 30,"amount": 604545454500, "isReceive": false}]';
            setTransactions(JSON.parse(response));
          } catch (err) {
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className="center">
      <h1>$Balance: {addressBalance}</h1>
        <Paper elevation={3} variant="elevation" className="center-panel">
        <div>
            <h1>Wallet addresses</h1>
            <div>
                <span className="margin-5">
                    <Button variant="outlined" onClick={goToWalletTransactions}>Back</Button>
                </span>
                <span className="margin-5">
                    <Button variant="contained" className="Button" onClick={send}>Send</Button>
                </span>
            </div>
            <div>
            <List className="addresses">
              {transactions.map((item) => (
                <ListItem key={item.id} className="list-item">
                <ListItemIcon>
                  <CurrencyExchangeIcon />
                </ListItemIcon>

                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '8px' }}>
                  <Typography variant="body1" component="span" sx={{ fontWeight: 500, fontSize: '20px' }}>
                    {item.id}
                  </Typography>
                  <Typography variant="body2" component="span" color="text.secondary" sx={{ fontSize: '18px' }}>
                    ${item.amount.toLocaleString()}
                  </Typography>
                  
                  {item.isReceive ? (
                    <CallMadeIcon  sx={{ color: "green" }}/>
                    ) : (
                    <CallReceivedIcon sx={{ color: "red" }} />
                    )}
                </Box>
              </ListItem>
              ))}
            </List>
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

export default WalletDetail;
