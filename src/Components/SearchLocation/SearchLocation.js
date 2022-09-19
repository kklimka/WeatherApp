import { Search, LocationOn, } from "@mui/icons-material";
import {
  Paper,
  InputBase,
  IconButton, 
} from "@mui/material";
import  "./SearchLocation.css";
import { useState } from 'react'
function SearchLocation( { addTask }){
  const [userInput, setUserInput] = useState('')
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput("")
}

const handleKeyPress = (e) => {
    if(e.key === "Enter") {
        handleSubmit(e)
    }
}
    return(

        <header className='locationBox'>
        <Paper
        onSubmit={handleSubmit}
          className='locationInput'
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(33, 29, 29, 0.68)",
          }}
        >
          <IconButton
            sx={{ p: "10px", color: "rgba(255, 255, 255, 0.7)" }}
            aria-label="menu"
          >
            <LocationOn />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "rgba(255, 255, 255, 0.7)" }}
            placeholder="Search location"
            inputProps={{ "aria-label": "search google maps" }}
            value={userInput}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
          <IconButton
            type="submit"
            sx={{ p: "10px", color: "rgba(255, 255, 255, 0.7)" }}
            aria-label="search"
          >
            <Search />
          </IconButton>
        </Paper>
      </header>
    )
}
export default SearchLocation;