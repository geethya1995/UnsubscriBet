import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
// import { Link } from "react-router-dom";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    setEmail(value);
    setIsValid(emailRegex.test(value));
  };

  // TODO: Write in a separate service
  const handleSubscribe = () => {
    alert("User subscribed successfully!");
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

export default Subscribe;
