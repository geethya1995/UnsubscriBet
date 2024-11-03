import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import { Link } from "react-router-dom";

const reasonsList = [
  "Privacy concerns",
  "Too many emails",
  "Content not relevant",
  "Found a better service",
  "No longer interested in SportsBet",
  "Other",
];

const UnsubscribeForm = () => {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [otherReason, setOtherReason] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    setEmail(value);
    setIsValidEmail(emailRegex.test(value));
  };

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reason = event.target.name;
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  const handleOtherReasonChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOtherReason(event.target.value);
  };

  // Enable 'Subscribe; button only if the email, name fields are filled correctly
  const isValidForm = () => {
    const hasSelectedReasons = selectedReasons.length > 0;
    const otherReasonRequired = selectedReasons.includes("Other")
      ? otherReason.trim() !== ""
      : true;
    return isValidEmail && hasSelectedReasons && otherReasonRequired;
  };

  // TODO: Handle Submit as a separate service
  const handleSubmit = async () => {
    const unsubscribeData = {
      email: email,
      reasons: [...selectedReasons, otherReason].filter(Boolean),
    };
    console.log(unsubscribeData);
    alert("User unsubscribed successfully!");
  };

  return (
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
        <Typography variant="h2" align="center" sx={{ mb: 2 }}>
          Unsubscribe from our Newsletter!
        </Typography>
        <TextField
          required
          label="Email"
          value={email}
          onChange={handleEmailChange}
          variant="outlined"
          error={!isValidEmail}
          helperText={!isValidEmail ? "Please enter a valid email address" : ""}
          fullWidth
          slotProps={{
            input: {
              type: "email",
            },
            formHelperText: {
              style: {
                color: isValidEmail ? "inherit" : "red",
              },
            },
          }}
        />
        <Typography variant="body2" align="center" sx={{ mt: 4, mb: 1 }}>
          If you have a moment, please let us know why you decided to
          unsubscribe:
        </Typography>
        <FormGroup>
          {reasonsList.map((reason) => (
            <FormControlLabel
              control={
                <Checkbox
                  name={reason}
                  checked={selectedReasons.includes(reason)}
                  onChange={handleReasonChange}
                />
              }
              label={reason}
              key={reason}
            />
          ))}
          {selectedReasons.includes("Other") && (
            <TextField
              required
              label="Please specify"
              value={otherReason}
              onChange={handleOtherReasonChange}
            />
          )}
        </FormGroup>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={!isValidForm()}
          onClick={handleSubmit}
        >
          Unsubscribe
        </Button>
      </Box>
    </Container>
  );
};

export default UnsubscribeForm;
