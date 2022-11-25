import Index from 'components/page/Index';
import  { Helmet, HelmetProvider } from 'react-helmet-async';
import GlobalStyles from 'styles/globalStyles';

function App() {
  return (
    <>
    <GlobalStyles/>
    <HelmetProvider>
      <Helmet>
          <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'/>
      </Helmet>
    </HelmetProvider>
      <Index />
    </>
  );
}

export default App;