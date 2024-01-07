import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Model.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: ["1px 2px 8px rgba(0, 0, 0, 0.8)"],
  p: 4,
  borderRadius: "5px",
};

const Model = ({ certificateName, image1, image2 }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="btnWrapper">
        <button
          onClick={() => handleOpen(image1)}
          className="button EduBtn"
        >
          View Certificate
        </button>
        {image2 && (
          <button
            onClick={() => handleOpen(image2)}
            className="button trancBtn"
          >
            View Transcript
          </button>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{
              fontSize: "1rem",
              display: "flex",
              justifyContent: "center",
              color: "var(--gray)",
            }}
          >
            {certificateName}
          </Typography>
          <Typography sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <img className="imgCeti" src={selectedImage} alt="" />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Model;
