import ReactDOM from "react-dom";
import React, { useState } from "react";
import { makeStyles, darken } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles({
    progressValue: {
      strokeDasharray: '284',
      fill:"none",
      stroke:"#31BCB1",
      strokeWidth:"12",
      strokeLinecap: 'round'
    },
    inactive: {
      fill:"none" ,
      stroke:"none",
      strokeLinecap: 'round',
      strokeWidth:"12",
    },
    circleIn: {
      fill:"url(#gradient)" ,
      stroke:"#31BCB1",
      strokeLinecap: 'round',
      strokeWidth:"0.4",
    },
});

const App = () => {
  const classes = useStyles();
  const [active, setActive] = useState(0)
  const onWheel = e => {
    const { deltaY } = e;

    if (deltaY > 0) {
      active < 284 ? setActive(active + 5): setActive(284);
    } else {
      active > -284 ? setActive(active - 5): setActive(284);
    }
  }
  return (
      <Box bgcolor="#000" height="100vh" display="flex"
        justifyContent="center" alignItems="center" flexDirection="column"
        onWheel={onWheel}
      >
        <Box color="#fff" fontSize={20}>Faite tourner la roue de la souris</Box>
        <svg viewBox="0 0 115 115" height="100" width="100"
        style={{transform:"rotate(180deg)"}}
        >
            {/* <svg 
              viewBox="0 0 5 30"
              style={{transform: 'translate(10, 10)'}}
              height="15"
              widht="15"
            transform="translate(60, 60)">
                <path fill="#fff" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"/>
            </svg> */}
            <circle 
              className={classes.progressValue} 
              cx="60" 
              cy="60" 
              r="45"  
              strokeDashoffset={active}
            />            
            <circle
              cx="60"
              cy="60"
              r="45"
              className={classes.inactive} 
            />

             { active >= 284 && 
             <g>
               <defs>
                <radialGradient id="gradient" cx="50%" cy="50%" r="55%">
                    <stop stopColor="transparent" offset="0%" />
                    <stop stopColor="#31BCB1" offset="20%" />
                    <stop stopColor={`${darken('#31BCB1', 0.6)}`} offset="90%" />
                    <stop stopColor={`${darken('#31BCB1', 0.1)}`} offset="100%" />
                </radialGradient>
               </defs>

              <circle 
                    className={classes.circleIn} 
                    cx="60" 
                    cy="60" 
                    r="44"  
                  >
                    <animate
                      attributeName="r" 
                      dur="1s" 
                      from="44"
                      to="45" 
                      repeatCount="indefinite" />
                  </circle>
              </g>
              }
        </svg>
      </Box>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
