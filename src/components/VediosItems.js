import React from 'react';
import './VediosItems.css';
 

const VediosItems = ({ vedio ,onVedioSelect}) =>{
  return(
    <div  onClick= {() => onVedioSelect(vedio)}className ='vedio-item item'>
      <img className ="ui image" src ={vedio.snippet.thumbnails.medium.url} alt=""/>
      <div className="content">
        <div className="header">
      {vedio.snippet.title}
      </div>
      </div>
    </div>
  )
} 

export default VediosItems;