import Products from './pages/Products';
import GlobalStyle from './config/GlobalStyle';

function App() {
  return (
    <>
      <Products    isDarkTheme={false}/>
      <GlobalStyle isDarkTheme={false}/>
    </>);
}

export default App;