import { useDispatch } from 'react-redux';
import { ADMIN } from './constants/actionTypes';
// routes
import Router from './routes';

// theme
import ThemeProvider from './admin/theme';
// components
import ScrollToTop from './admin/components/scroll-to-top';
import { StyledChart } from './admin/components/chart';
import Notify from './admin/utils/Notify';
import { getProducts } from './actions/products';

// ----------------------------------------------------------------------

export default function App() {
  const dispatch=useDispatch();
  dispatch({type:ADMIN})
  dispatch(getProducts())
  return (
    <ThemeProvider>
      <Notify/>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
  );
}
