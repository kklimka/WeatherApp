import {
    Box,    
  } from "@mui/material";
  import videoBackground from "../../assets/videos/videoBackground.webm";
function Background(){
    return(
        <Box
        className="box"
        sx={{
          background: `linear-gradient(
        rgba(2,16,68,0.9), rgba(0, 43, 24,0.9)
        )`,
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -10,
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3,
          }}
        >
          <source src={videoBackground} type="video/webm" />
        </video>
      </Box>
    )
}
export default Background;