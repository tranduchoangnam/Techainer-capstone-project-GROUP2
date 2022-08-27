import './App.css';
import Header from './components/Header'
import Content from './components/Content'


function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center' style={{ backgroundImage: "url(/img/bg.png)"}}>
      <Header/> 
      <Content/>
    </div>
  );
}

export default App;
