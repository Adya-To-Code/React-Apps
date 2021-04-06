import React from 'react';
import SearchBar from './SearchBar';
import Youtube from './Youtube';
import VedioList from './VedioList';
import VedioDetails from './VedioDetails';


class App extends React.Component{
  state ={ vedios: [] ,selectedVedio: null};
  componentDidMount(){
    this.onTermSubmit('buildings');
  }
  onTermSubmit = async(term) =>{
 
  const response = await Youtube.get('/search' ,{
     params:{
       q:term
     }
   }
   )
   this.setState({ vedios: response.data.items , selectedVedio:response.data.items[0] });
  }

  onVedioSelect =(vedio) =>{
    this.setState({ selectedVedio: vedio})
    
  }

  render(){
    return(
   <div className ='ui container'>
     
     <SearchBar onTermSubmit ={this.onTermSubmit} />
     <div className ="ui grid">
       <div className='ui row'>
         <div className ="eleven wide column">
     <VedioDetails vedio ={this.state.selectedVedio}/></div>
      <div className ="five wide column">

  <VedioList onVedioSelect ={this.onVedioSelect} vedios ={this.state.vedios}/>
  </div>
  </div>
     </div>
     </div>
    )
    


  }
} 

export default App;