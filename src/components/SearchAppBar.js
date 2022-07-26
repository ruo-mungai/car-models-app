import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button'


export default function SearchAppBar({images,classes,setSearch}) {

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <h2 style={{textAlign:"center" ,fontSize:"40px"}}>React Car App</h2>
        <Toolbar>
        <NavLink style={{ marginLeft: "50px",  marginRight:"20px"}} to="/">
        <Button variant="contained" color="secondary" > Home</Button >
      </NavLink>
      <NavLink style={{ marginLeft: "10px" }} to="/form">
       <Button variant="contained" color="secondary" > Add Car</Button >
      </NavLink>
          <div className={classes.search} style={{ marginLeft: "100px" }}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
             />
          </div>
            <img src={images} style={{width:"300px", alighnitem:"center"}} alt="car Pic"/>
            
        </Toolbar>
      </AppBar>
      
    </div>
    </>
  );
}