import { createMuiTheme } from 'material-ui/styles';

export default createMuiTheme({
  "direction": "ltr",
  "palette": {
    "common": {
      "transparent": "rgba(0, 0, 0, 0)",
      "blush": "#FF93B4",
      "aqua": "#8CE7EA",
      "dark": "#4C4C4C"
    },
  },
  "spacing": {
    "unit": 8
  },
  "typography": {
    "headline": {
      "fontSize": "20vw",
      "fontWeight": 400,
      "color": "#4c4c4c",
      '@media (min-width: 426px)': {
        "fontSize": "16vw",
      }
    },
    "title": {
      "fontSize": "13vw",
      "color": "#4c4c4c",
      '@media (min-width: 426px)': {
        "fontSize": "9vw",
      }
    },
    "subheading": {
      "fontSize": "5vw",
      "color": "#4c4c4c",
      "lineHeight": 1,
      '@media (min-width: 426px)': {
        "fontSize": "3.5vw",
      }
    },
    "body2": {
      "fontSize": "6.5vw",
      "color": "#4c4c4c",
      "lineHeight": 1.2,
      '@media (min-width: 426px)': {
        "fontSize": "2.5vw",
      }
    },
    "body1": {
      "fontSize": "14vw",
      "fontWeight": 500,
      "lineHeight": 1.4,
      "color": "#4c4c4c",
      '@media (min-width: 426px)': {
        "fontSize": "7vw",
      }
    },
    "button": {
      "fontSize": "2.5vw",
      "textTransform": "uppercase",
      "fontWeight": 700,
      "letterSpacing": "1px",
      "marginTop": 20,
      "marginBottom": 20,
      '@media (min-width: 426px)': {
        "fontSize": "1.5vw",
      }
    },
    "display1": {
      "fontSize": "10vw",
      "fontFamily": 'Lovers Quarrel, cursive',
      "fontWeight": 500,
      "color": "#4c4c4c",
      '@media (min-width: 426px)': {
        "fontSize": "4vw",
      }
    },
    "display2": {
      "fontSize": "7.6vw",
      "fontWeight": 500,
      "color": "#4c4c4c",
      '@media (min-width: 426px)': {
        "fontSize": "3vw",
      }
    },
  },
  "custom": {
    "font":{
      "LoverFont": 'Lovers Quarrel, cursive',
      "BilboFont": 'Bilbo, cursive'
    },
    "size":{
      "normal": {
        "fontSize": "2em"
      }
    }
  },
  overrides: {
    MuiButton: {
      root: {
        "padding": "1.2vh 3vw"
      }
    },
    MuiFormControl: {
      marginNormal: {
        "marginBottom": "30px",
        "marginTop": "10px"
      }
    },
    MuiInput: {
      root: {
        "fontFamily": 'Bilbo, cursive',
        "fontSize": "8vw",
        "fontWeight": 500,
        "color": "#4c4c4c",
        '@media (min-width: 426px)': {
          "fontSize": "3vw",
        }
      }
    }
  }
});