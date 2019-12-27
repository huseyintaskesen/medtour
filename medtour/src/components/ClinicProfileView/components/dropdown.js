import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  //For later use
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [clinic_name, setClinicName] = React.useState('')
  const open = Boolean(anchorEl);

  var clinic_id = localStorage.getItem('clinicID');

    useEffect(() =>{
    fetch("http://localhost:3001/api/clinics/"+clinic_id, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },}).then(response =>{
      response.json().then(resp => {
       setClinicName(resp.clinics.name)
      }
      )
    })

    }, []);


  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSettings = () =>{
    setAnchorEl(null);
    console.log('handle close clicked')
    props.changeView('settings')
    // window.open('http://localhost:3000/clinic-settings', "_self");
  };

  const handleMessages = () => {
    setAnchorEl(null);
    props.changeView('messages');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleSettings}>Account Settings</MenuItem>
                <MenuItem onClick={handleMessages}>Messages</MenuItem>
              </Menu>
        </div>
          <Typography variant="h6" className={classes.title}>
           Clinic name is: {clinic_name}
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}