import ReactDOM from "react-dom";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles({
    progressValue: {
      strokeDasharray: '94.2',
      fill:"none",
      stroke:"#f77a52",
      strokeWidth:"4"
      // strokeDashoffset: '37.68',
    },
    inactive: {
      fill:"none" ,
      stroke:"none",
      strokeWidth:"4",
    }
});

const App = () => {
  const classes = useStyles();
  const [active, setActive] = useState(0)
  const onWheel = e => {
    const { deltaY } = e;

    if (deltaY > 0) {
      // active >= 0 ? setActive(active+5): setActive(0);
      setActive(active - 5)
    } else {
      setActive(active + 5);
    }
  }
  return (
      <Box bgcolor="#000" height="100vh" display="flex"
        justifyContent="center" alignItems="center" flexDirection="column"
        onWheel={onWheel}
      >
        <svg viewBox="0 0 100 100" 
        style={{transform:"rotate(180deg)"}}
        >
            <circle
              cx="60"
              cy="60"
              r="15"
              className={classes.inactive} 
            />
            <circle 
              className={classes.progressValue} 
              cx="60" 
              cy="60" 
              r="15"  
              strokeDashoffset={active}
            />
        </svg>
      </Box>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
