import {extendTheme} from 'native-base';

// Define the config
const config = {
  useSystemColorMode: true,
};

// extend the theme
const customTheme = extendTheme({config});

export default customTheme;
