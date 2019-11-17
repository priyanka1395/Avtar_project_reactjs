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
                name : "Subscribe To my Website"
 
            }

            )
        }
        render(){

            const avatarlistarray = [
                {
                    id:1,
                    name:"priyanka",
                    work:"web developer"
                },
                {
                    id:2,
                    name:"priti",
                    work:"Teacher"
                },
                {
                    id:3,
                    name:"Amol",
                    work:"anylist"
                },
                {
                    id:4,
                    name:"Aakash",
                    work:"ui developer"
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