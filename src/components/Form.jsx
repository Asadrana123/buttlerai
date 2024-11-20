import React, { useState } from "react";
import { Modal, Box, TextField, Slider, Typography, Button } from "@mui/material";
import {db} from "../../firebase"
import { collection, addDoc } from "firebase/firestore";
const Form = ({ openModal, onOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sliders: {
      art: 50,
      social: 50,
      concert: 50,
      travel: 50,
    },
  });

  const handleSliderChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      sliders: {
        ...prev.sliders,
        [field]: value,
      },
    }));
  };
  const formatFormData = () => {
    return {
      name: formData.name,
      email: formData.email,
      sliders: {
        art: sliderText(formData.sliders.art),
        social: sliderText(formData.sliders.social),
        concert: sliderText(formData.sliders.concert),
        travel: sliderText(formData.sliders.travel),
      },
    };
  };
  const sliderText = (value) => {
    if (value < 25) return "Rarely";
    if (value < 50) return "Sometimes";
    if (value < 75) return "Only when relevant";
    return "Always";
  };
  const handleSubmit = async () => {
    try {
      const formattedData = formatFormData();
      await addDoc(collection(db, "formData"), formattedData);
      console.log("Data successfully stored!");
    } catch (error) {
      console.error("Error storing data: ", error);
    } finally {
      onClose();
    }
  };
  return (
    <div>
      <Modal open={openModal} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <Typography variant="body1" gutterBottom sx={{ color: "text.primary" }}>
            Art opportunities: <strong>{sliderText(formData.sliders.art)}</strong>
          </Typography>
          <Slider
            value={formData.sliders.art}
            onChange={(e, value) => handleSliderChange("art", value)}
          />

          <Typography variant="body1" gutterBottom sx={{ color: "text.primary" }}>
            Social opportunities: <strong>{sliderText(formData.sliders.social)}</strong>
          </Typography>
          <Slider
            value={formData.sliders.social}
            onChange={(e, value) => handleSliderChange("social", value)}
          />

          <Typography variant="body1" gutterBottom sx={{ color: "text.primary" }}>
            Concert opportunities: <strong>{sliderText(formData.sliders.concert)}</strong>
          </Typography>
          <Slider
            value={formData.sliders.concert}
            onChange={(e, value) => handleSliderChange("concert", value)}
          />

          <Typography variant="body1" gutterBottom sx={{ color: "text.primary" }}>
            Travel opportunities: <strong>{sliderText(formData.sliders.travel)}</strong>
          </Typography>
          <Slider
            value={formData.sliders.travel}
            onChange={(e, value) => handleSliderChange("travel", value)}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Form;
