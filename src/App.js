import React from 'react';
import './App.css'
import Icon from './reddit1.png'
import Nav from './components/Nav'

const search2 = (props) => {
    return (
        <div>
        <Nav/>
        </div>
    )
}
class App extends React.Component {
    state = {
        search: [          
        ],
        showPersons: false,
        text:""
    }
    switchNameHandler = (newName) => {
        this.setState(
            {
                
            }
        )
    }
    switchNameHandler=(newSearch)=>{
        this.setState(
            {
                search:[
                    ...this.state.search1,
                    
                ]
            }
        )
    }
    togglePersonsHandler = () => {
        let show = this.state.showSearch;
        this.setState({showSearch: !show})
        //console.log(show)
    }
    render(){
        
        let searchesDetail = (
            <div>
             </div>
         )
        const searcheDetail= this.state.search.map((search1, i)=>{
            return<search2 key={i} name={search1.name}/>
        })
        return(
            <div className= "iconface">
                <img src={Icon} />
                <input type="text" onChange={(e) => {this.switchInput(e)}} />
                
                {this.state.showSearch ? <div>{searchesDetail}</div> : null}
            </div>
        )
    } 
}
export default App;