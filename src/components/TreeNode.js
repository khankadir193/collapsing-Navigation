import { useState } from "react";
import '../App.css';

const TreeNode = ({ item, level, expandNode }) => {  
  const [isExpanded, setIsExpanded] = useState(false);  

  const handleToggle = () => {  
    setIsExpanded(!isExpanded);  
  };  

  return (  
    <div style={{ marginLeft: level * 20 }}>  
      <div  
        onClick={handleToggle}  
        style={{  
          cursor: 'pointer',  
          padding: '5px',  
          backgroundColor: isExpanded ? '#EDF8E6' : 'transparent',  
        }}  
      >  
        {item.children.length > 0 && (  
          <span>{isExpanded ? '-' : '+'}</span>  
        )}  
        {item.title}  
      </div>  
      {isExpanded && item.children.map((child, index) => (  
        <TreeNode key={index} item={child} level={level + 1} />  
      ))}  
    </div>  
  );  
}


export default TreeNode;