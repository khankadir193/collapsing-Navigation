// src/TreeView.js  
import React, { useState } from 'react';  
import '../App.css';
import TreeNode from './TreeNode';

const data = [  
  {  
    title: 'Office Map',  
    children: [],  
  },  
  {  
    title: 'New Employee Onboarding',  
    children: [  
      { title: 'Onboarding Materials', children: [] },  
      {  
        title: 'Training',  
        children: [],  
      },  
    ],  
  },  
  {  
    title: 'Office Events',  
    children: [  
      {  
        title: '2018',  
        children: [  
          { title: 'Summer Picnic', children: [] },  
          { title: "Valentine's Day Party", children: [] },  
          { title: "New Year's Party", children: [] },  
        ],  
      },  
      {  
        title: '2017',  
        children: [{ title: 'Company Anniversary Celebration', children: [] }],  
      },  
    ],  
  },  
  { title: 'Public Holidays', children: [] },  
  { title: 'Vacations and Sick Leaves', children: [] },  
];  


const TreeView = ({ isExpandedView }) => {  
  return (  
    <div style={{ margin: '20px' }}>  
      <h2>{isExpandedView ? 'Expanded View' : 'Collapsed View'}</h2>  
      <div>  
        {data.map((item, index) => (  
          (isExpandedView || item.children.length) && (  
            <TreeNode key={index} item={item} level={0} />  
          )  
        ))}  
      </div>  
    </div>  
  );  
};  

export default TreeView;
 
