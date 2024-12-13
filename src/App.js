import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TreeView from './components/TreeView';


const App = () => {  
  const [isExpandedView, setIsExpandedView] = useState(true);  

  return (  
    <div className="App">  
      <button onClick={() => setIsExpandedView(!isExpandedView)}>  
        Toggle View  
      </button>  
      <TreeView isExpandedView={isExpandedView} />  
      <div style={{ margin: '20px' }}>  
        <h4>Different State Background Colors</h4>  
        <div style={{ backgroundColor: '#D9D9D9', padding: '5px' }}>  
          Hovered State (#D9D9D9)  
        </div>  
        <div style={{ backgroundColor: '#EDF8E6', padding: '5px' }}>  
          Active Parent (#EDF8E6)  
        </div>  
        <div style={{ backgroundColor: '#4F2FFF', padding: '5px', color: 'white' }}>  
          Active Nav Item (#4F2FFF)  
        </div>  
      </div>  
    </div>
  );  
}; 

export default App;
