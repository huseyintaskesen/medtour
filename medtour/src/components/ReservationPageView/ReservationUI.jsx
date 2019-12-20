
import room1 from "../hotel_assets/images/details-1.jpeg";
import room2 from "../hotel_assets/images/details-2.jpeg";
import room3 from "../hotel_assets/images/details-3.jpeg";
import room4 from "../hotel_assets/images/details-4.jpeg";
import img1 from "../hotel_assets/images/room-1.jpeg";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState, useEffect, Component } from "react";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Box from '@material-ui/core/Box';



const hotelData = [{
  sys: {
    id: "1"
  },
  fields: {
    name: "Büyük Hotel",
    slug: "single-economy",
    type: "single",
    price: 100,
    size: 200,
    capacity: 1,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    extras: [
      "Plush pillows and breathable bed linens",
      "Soft, oversized bath towels",
      "Full-sized, pH-balanced toiletries",
      "Complimentary refreshments",
      "Adequate safety/security",
      "Internet",
      "Comfortable beds"
    ],
    images: [
      {
        fields: {
          file: {
            url: img1
          }
        }
      },
      {
        fields: {
          file: {
            url: room2
          }
        }
      },
      {
        fields: {
          file: {
            url: room3
          }
        }
      },
      {
        fields: {
          file: {
            url: room4
          }
        }
      }
    ]
  }
}]


  export default function ReservationUI(){

  

    const [treatment, setTreatmentValue] = React.useState('');
    const [expanded, setExpanded] = React.useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const treatments = [
        {
          value: '$199 ',
          label: 'TREATMENT 1',
        },
        {
          value: '$205',
          label: 'TREATMENT 2',
        },
        {
          value: '$399',
          label: 'TREATMENT 3',
        },
        {
          value: '$299',
          label: 'TREATMENT 4',
        },
      ];
      
      const useStyles = makeStyles(theme => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
          },
        },
      }));

      const useStyles2 = makeStyles(theme => ({
        card: {
          maxWidth: 345,
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: red[500],
        },
      }));

    
      const classes = useStyles();
      const classes2 = useStyles2();
    
      const handleChange = event => {
        setTreatmentValue(event.target.value);
      };
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      const handleFavoriteClick  = id => {
        console.log(id)
      }

    return(
      <div style={{marginLeft: '15px'}}>
        <div>
          <div style={{marginBottom: '30px'}}>
          <Box component="span" m={1}>
            <p>
            <b>Pick your date for the reservation</b>

            </p>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          </Box>
            
          </div>
          
          <form className={classes.root} noValidate autoComplete="off">
        <div>
          
        <TextField
          id="outlined-select-currency-native"
          select
          label="Select treatment"
          value={treatment}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {treatments.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="filled-multiline-flexible"
          label="Price for treatment chosen"
          multiline
          rowsMax="4"
          value={treatment}
          variant="filled"
        />
          </div>
        </form>
        </div>
        <div>
          <b>Pick your hotel to stay during your trip:</b>
          <div style={{marginTop: '25px'}}>
            
                <Card className={classes2.card} style = {{float: 'left', marginRight: '10px'}}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes2.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              className={classes2.media}
              image = {img1}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon onClick={handleFavoriteClick(1)} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes2.expand, {
                  [classes2.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          </div>
        <div style = {{float: 'left'}}>
        <Card className={classes2.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes2.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes2.media}
        image = {img1}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes2.expand, {
            [classes2.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
        </div>
       </div>
          
       
          
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       <div>
         Flights

          

  
       </div>



        </div>

      

      




    
        )
    }
