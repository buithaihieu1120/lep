
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="box">
        <ul className="minbox" >
          <li style={{
            backgroundImage: `url("images/minbox1.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/minbox2.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/minbox3.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/minbox4.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/minbox5.jpg")`,
          }}></li>
          <li style={{
            backgroundImage: `url("images/minbox6.jpg")`,
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
    </div>
  );
}

export default App;
