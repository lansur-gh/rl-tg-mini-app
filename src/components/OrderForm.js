import { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const defaultState = {
  name: "",
  email: "",
  phone: "",
  age: "",
};

export const OrderForm = () => {
  const [form, setForm] = useState(defaultState);

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      width={"100%"}
      maxWidth={"400px"}
      py={4}
      height={"100%"}
      alignItems={"center"}
      display={"flex"}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" display={"flex"} justifyContent={"center"}>
            Personal Info Form
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={form.name}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={form.email}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            name="Phone"
            value={form.phone}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            name="Age"
            value={form.age}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained" fullWidth>Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
