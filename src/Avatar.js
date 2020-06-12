import React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

    class Avatar extends Component{
        constructor(){
            super();
            this.state = {
                name : "Welcome To My Website"

            }
        }
        
        namechange(){
            this.setState({
                name : "Subscribe To my movie channel"
 
            }

            )
        }
        render(){

            const avatarlistarray = [
                {
                    id:1,
                    name:"priyanka chopra",
                    work:"Actors"
                },
                {
                    id:2,
                    name:"priti chinta",
                    work:"Actors"
                },
                {
                    id:3,
                    name:"alya",
                    work:"Actors"
                },
                {
                    id:4,
                    name:"ranvir kapoor",
                    work:"Actor"
                }
            ]
        
            const avatarlistcard = avatarlistarray.map( (avatarcard, i) => {
                return <Avatarlist key ={i} id={avatarlistarray[i].name}
                name={avatarlistarray[i].name}
                work={avatarlistarray[i].work} />
            }
        
            )
            return ( 
                <div className="mainpage">
                 <h1> {this.state.name}</h1>
                    {avatarlistcard}
                    <button onClick= { () => this.namechange() }> Subcribe</button>
                    </div>
                )

        }

    }

export default Avatar;