import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components'; 
import {register} from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import theme from 'styles/theme.js';
import GlobalStyles from 'styles/GlobalStyles.js';
import App from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
 
  </StrictMode>,
);
