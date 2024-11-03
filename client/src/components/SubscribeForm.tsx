import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import SubscribeService from "../services/SubscribeService";
import Alert from "@mui/material/Alert";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    setEmail(value);
    setIsValid(emailRegex.test(value));
  };

  // Enable 'Subscribe; button only if the email, name fields are filled correctly
  const isFormValid = isValid && name ? true : false;

  const handleSubscribe = async () => {
    const response = await SubscribeService(email, name);
    if (response.status === 200) {
      if (response.data.message == "User is already subscribed.") {
        setSuccessMessage("You are already subscribed to our Newsletter!");
      } else {
        setSuccessMessage(
          "Welcome back " +
            name +
            "! You successfully subscribed to our Newsletter."
        );
      }
    } else if (response.status === 201) {
      setSuccessMessage(
        "Welcome " + name + "! You successfully subscribed to our Newsletter."
      );
    } else {
      setErrorMessage("Error occurred while subscribing. Please try again!");
    }
  };

  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {successMessage && (
            <Alert severity="success" sx={{ width: "100%", mb: 2 }}>
              {successMessage}
            </Alert>
          )}
          {errorMessage && (
            <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
              {errorMessage}
            </Alert>
          )}

          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <ArticleRoundedIcon />
          </Avatar>
          <Typography variant="h2" align="center">
            Subscribe to our Newsletter!
          </Typography>
          <Typography variant="body2" align="center">
            Enter your details below to recieve the latest exciting news about
            the sporting world.
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              label="Name"
              type="name"
              autoComplete="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <TextField
              required
              label="Email"
              value={email}
              onChange={handleEmailChange}
              variant="outlined"
              autoComplete="email"
              error={!isValid}
              helperText={!isValid ? "Please enter a valid email address" : ""}
              fullWidth
              slotProps={{
                input: {
                  type: "email",
                },
                formHelperText: {
                  style: {
                    color: isValid ? "inherit" : "red",
                  },
                },
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isFormValid}
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SubscribeForm;
