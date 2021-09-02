
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img className='image' src='images/lep.png' alt="" />
      </div>
      <div className="box">
        <ul className="minbox" >
          <li style={{
            backgroundImage: `url("images/minbox.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/minbox.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/minbox.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/minbox.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/minbox.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/minbox.jpg")`,
          }}></li>
        </ul>
        <ol className="maxbox">
          <li style={{
            backgroundImage: `url("images/background.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/background.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/background.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/background.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/background.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/background.jpg")`,
          }}></li>
        </ol>
      </div>
      <img className='image1' src='images/heart.png' />
    </div>
  );
}

export default App;
