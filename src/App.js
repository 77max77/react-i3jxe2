//
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';
//상품정보
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//별점
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
//드롭박스
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 30, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function App(){
  return(
    <div>
      <Container fixed>
        <ButtonAppBar></ButtonAppBar>
      </Container>
      <Grid container>
        <Grid item>
          <Playground></Playground>
        </Grid>
        <Grid item xs>
        <MediaCard></MediaCard>
        </Grid>
        
     </Grid> 
    
    </div>
  );
}

function ButtonAppBar() {  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            title
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button color="inherit">inquiry</Button>
          <Button color="inherit">review</Button>
          <Button color="inherit">download</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function MediaCard() {
 return(
   <div>
     <Button size="small">name</Button>
  <Card sx={{ display:'flex', maxWidth: 1000 }}>
      <CardMedia
        sx={{ height: 400 }}
        image=""
        //title=
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          name
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      <TextRating></TextRating>
      </CardContent>
      <CardActions>
        <Button size="small">review</Button>
      </CardActions>
      
    </Card>
    이제품의 효과
    <Card sx={{ display:'flex', maxWidth: 1000 }}>
      <CardMedia
        sx={{ height: 200 }}
        image=""
        //title=
      />
      <CardContent>
      </CardContent>
      <CardActions>
        주요기능
        <Button size="small">간건강</Button>
        보조기능
        <Button size="small">담즙</Button>
      </CardActions>
      
    </Card>
    </div>
 );
}


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function TextRating() {
  const value = 3.5;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}


function Playground() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };
  const flatProps = {
    options: top100Films.map((option) => option.title),
  };
  const [value, setValue] = React.useState(null);

  return (
    <Stack spacing={1} sx={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField {...params} label="disableCloseOnSelect" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="clearOnEscape" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-clearable"
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="disableClearable" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="include-input-in-list"
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="includeInputInList" variant="standard" />
        )}
      />
      <Autocomplete
        {...flatProps}
        id="flat-demo"
        renderInput={(params) => (
          <TextField {...params} label="flat" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="controlled-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="controlled" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="autoComplete" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-list-wrap"
        disableListWrap
        renderInput={(params) => (
          <TextField {...params} label="disableListWrap" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="open-on-focus"
        openOnFocus
        renderInput={(params) => (
          <TextField {...params} label="openOnFocus" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-highlight"
        autoHighlight
        renderInput={(params) => (
          <TextField {...params} label="autoHighlight" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-select"
        autoSelect
        renderInput={(params) => (
          <TextField {...params} label="autoSelect" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disabled"
        disabled
        renderInput={(params) => (
          <TextField {...params} label="disabled" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-portal"
        disablePortal
        renderInput={(params) => (
          <TextField {...params} label="disablePortal" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="blur-on-select"
        blurOnSelect
        renderInput={(params) => (
          <TextField {...params} label="blurOnSelect" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="clear-on-blur"
        clearOnBlur
        renderInput={(params) => (
          <TextField {...params} label="clearOnBlur" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="select-on-focus"
        selectOnFocus
        renderInput={(params) => (
          <TextField {...params} label="selectOnFocus" variant="standard" />
        )}
      />
      <Autocomplete
        {...flatProps}
        id="readOnly"
        readOnly
        defaultValue={flatProps.options[13]}
        renderInput={(params) => (
          <TextField {...params} label="readOnly" variant="standard" />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];