import React, { Component } from 'react';

const withCounter = (OriginalComponent)=>{
    class FeaturedComonent extends Component {
        constructor(props){
            super(props)
            this.state={
                count:0,
            }
        }
        render() { 
            return (<OriginalComponent increase={()=>
               this.setState({count:this.state.count+1})
            }
            decrease={()=>this.setState({count:this.state.count-1})}
            count={this.state.count} />);
        }
    }
     return FeaturedComonent
    
}
export default withCounter;