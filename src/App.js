import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero--banner">
        <div className="overlay">
        <h1 className="hero--title">Porter Airlines</h1>
        </div>
      </div>
      <div className="main--container container-fluid">
        <div className="row"> 
        <div className="col-xs-12 info--panel">
          <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel sapien non metus commodo rutrum. Maecenas eget sapien leo. Integer justo ipsum, efficitur quis sollicitudin sagittis, fringilla eu nulla. Nam sit amet pulvinar libero, vel aliquam ligula. Ut commodo tincidunt egestas. 
          </h2>
          </div>
        </div>
        <div className="product--section">
        <div className="row">
        <div className="col-4">
        <div className="product product--a">
          <h2>Product1</h2>
        </div>
        </div>
        <div className="col-4">
        <div className="product product--b">
        <h2>Product2</h2>
        </div>
        </div>
        <div className="col-4">
        <div className="product product--c">
        <h2>Product3</h2>
        </div>
        </div>
        </div>
          
        </div>
      <div className="section--container section--a">
        <h2 className="title">Dummy Titile</h2>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate feugiat enim. Nullam eget magna aliquet, sollicitudin nibh in, sodales mi. </p>
        
      </div>
      <div className="section--container section--b">
      <h2 className="title">Dummy Titile</h2>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate feugiat enim. Nullam eget magna aliquet, sollicitudin nibh in, sodales mi. </p>
        
      </div>
      <div className="section--container section--c">
      <h2 className="title">Dummy Titile</h2>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate feugiat enim. Nullam eget magna aliquet, sollicitudin nibh in, sodales mi. </p>
        
      </div>
      <div className="section--container section--d">
      <h2 className="title">Dummy Titile</h2>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate feugiat enim. Nullam eget magna aliquet, sollicitudin nibh in, sodales mi. </p>
      </div>
     
      </div>
    </div>
  );
}

export default App;
