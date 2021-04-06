import React from 'react';
 import VedioItem from './VediosItems';

const VedioList = ({ vedios ,onVedioSelect }) =>{
   const renderList = vedios.map(vedio =>{
    return <VedioItem key ={vedio.id.vedioId} onVedioSelect={onVedioSelect} vedio ={vedio} />;
     });
  
  return(
    <div className ='ui relaxed divided list'>{renderList } 
    </div>
  )
} 

export default VedioList;