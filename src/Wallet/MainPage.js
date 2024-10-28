import './../App.css';
import './../Wallet/MainPage.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import '@fontsource/roboto/300.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();
    const goToCreateMenemonics = () => {
      navigate('/createMenemonics');
    };
    const goToAlreadyHaveWallet = () => {
      navigate('/alreadyHaveWallet');
    };
  
  return (
    <div className="main-page">
        <Paper elevation={3} variant="elevation">
            <CardContent>
            <div>
              <h3>
                Join us now
              </h3>
            </div>
            <span class="margin-5">
            <Button variant="outlined" className="Button" onClick={goToAlreadyHaveWallet}>Already have a wallet</Button>
            </span>
            <span class="margin-5">
              <Button variant="contained" className="Button" onClick={goToCreateMenemonics}>Create a new wallet</Button>
            </span>
            </CardContent>
        </Paper>
    </div>
  );
}

export default MainPage;
