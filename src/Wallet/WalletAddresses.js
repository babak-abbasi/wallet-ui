
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
import Tornado from '@mui/icons-material/Tornado';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import TornadoIcon from '@mui/icons-material/Tornado';

const WalletAddresses = () => {
  const { walletId } = useParams();

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

    const [walletName, setWalletName] = useState('Test wallet');
    const [addresses, setAddresses] = useState([]);

    function addressCreation(){
      var address = {"id": 1,"balance": 3000};
      setAddresses([...addresses, address]);

        // axios.post('/addressCreation', {
        //     walletId,
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }

    function walletDetail(){
      navigate('/walletDetail/1');
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            // const response = await axios.get('https://api.example.com/data');
            const response = '[{"id": 1,"balance": 30000000},{"id": 2, "balance":4000000000},{"id": 3,"balance": 604545454500},{"id": 20, "balance":4000000000},{"id": 30,"balance": 604545454500}]';
            setAddresses(JSON.parse(response));
          } catch (err) {
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className="center">
      <h1>{walletName}</h1>
        <Paper elevation={3} variant="elevation" className="center-panel">
        <div>
            <h1>Wallet transactions</h1>
            <div>
                <span className="margin-5">
                    <Button variant="outlined" onClick={goToMainPage}>Log out</Button>
                </span>
                <span className="margin-5">
                    <Button variant="contained" className="Button" onClick={addressCreation}>Add new address</Button>
                </span>
            </div>
            <div>
            <List className="addresses">
              {addresses.map((item) => (
                <ListItem key={item.id} sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',padding: '8px 16px',borderBottom: '1px solid #ddd', borderRadius: '8px', margin: '4px 0'}}>
                <ListItemIcon>
                  <TornadoIcon />
                </ListItemIcon>

                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '8px' }}>
                  <Typography variant="body1" component="span" sx={{ fontWeight: 500, fontSize: '20px' }}>
                    {item.id}
                  </Typography>
                  <Typography variant="body2" component="span" color="text.secondary" sx={{ fontSize: '18px' }}>
                    ${item.balance.toLocaleString()}
                  </Typography>
                </Box>

              <Button variant="outlined" className="Button" onClick={walletDetail}>Detail</Button>
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

export default WalletAddresses;
