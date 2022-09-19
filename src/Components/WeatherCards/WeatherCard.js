import {Clear, Update } from "@mui/icons-material";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Fab,
  
} from "@mui/material";
import { useState } from "react";
import icon from "../../assets/icons/01d.svg";
import TodayWeatherModal from "../Modal/TodayWeatherModal";
import './WeatherCard.css'


function WeatherCard({ city, removeTask }){
  const [modalActive, setModalActive] = useState(false);
    return(
      <div >
        <div onClick={()=> setModalActive(true)}
        key={city.id}
        >

        
        <Card
        className="weatherCard"
  
        sx={{
            marginBottom: `2rem`,
            cursor: `pointer`,
          backgroundColor: `rgba(21, 21, 21, 0.89)`,
          height: `13rem`,
          width: `18rem`,
          boxShadow: `rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;`,
          "&:hover" :{
            backgroundColor: `rgba(33, 29, 29, 0.68)`
          }
        }}
      >
        <CardMedia
          sx={{
            height: `64px`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "5px",
          }}
        >
          <img alt="weather icon" src={icon} height="64px" />
        </CardMedia>
        <CardContent>
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2}>
          <Typography noWrap gutterBottom variant='h4' component='h3' color='white'>
          {city.task}
          </Typography>
          <Typography variant='h4' color='rgb(255, 239, 37)'>
            15&#176;C
          </Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2} paddingTop='1rem'>
          <Box>
            <Typography variant='body1' color='white' fontSize='1.5rem'>
              Sunny
            </Typography>
            
          </Box>
          <Stack direction='row' justifyContent='end' alignItems='center' spacing={2}>
            <Fab
              data-testid='deleteCityButton'
              sx={{ background: 'grey', zIndex: `1` }}
              size='small'
              aria-label='delete'
              onClick={(e) => {
                e.stopPropagation();
                return(removeTask(city.id));
              }}
            >
              <Clear />
            </Fab>
            <Fab
              data-testid='updateCityButton'
              
              
              size='small'
              aria-label='update'
              sx={{ 
                background: 'rgb(255, 239, 37)',
                zIndex: `1`,
                "&:hover" :{
                    backgroundColor: `rgb(178 167 25)`
                  }
            }}
              
              
            >
              <Update />
            </Fab>
          </Stack>
        </Stack>

        </CardContent>
      </Card> 
      </div>
      <TodayWeatherModal active={modalActive} setActive={setModalActive} city={city.task}/>
      </div>
    )
}
export default WeatherCard;