import Clock from './components/Clock';
import Themes from './components/Themes';
import { useSelector } from 'react-redux';

function App() {

  const theme = useSelector(state => state.theme);


  return (
    <div className="App">
      <div className={theme}>
      <h1 className='neonText'>What happens if you click ?</h1>
      </div>
      <div id='wrapper' className={theme}>
        <Clock />
        <Themes />
      </div>
    </div>
  );
}

export default App;
