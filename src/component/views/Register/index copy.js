import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Grid } from '@mui/material';
import { AccountCircle, Email, Phone, Flag } from '@mui/icons-material';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    nationality: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log(formData);
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <AccountCircle color="primary" />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                  
                }}
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                variant="outlined"
                value={formData.phoneNumber}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <Phone color="primary" />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nationality"
                name="nationality"
                variant="outlined"
                value={formData.nationality}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <Flag color="primary" />
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default RegistrationForm;
