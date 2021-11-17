import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leaderList : [
                {
                    id      : 1,
                    name    : "Emma",
                    point   : 0,
                },
                {
                    id      : 2,
                    name    : "Noah",
                    point   : 0,
                },
                {
                    id      : 3,
                    name    : "James",
                    point   : 0,
                },
                {
                    id      : 4,
                    name    : "William",
                    point   : 0,
                },
                {
                    id      : 5,
                    name    : "Olivia",
                    point   : 0,
                },
                
            ]
        }
    }

    incPoint(id){
        var tempList = this.state.leaderList;
        var index    = tempList.findIndex(e => e.id === id)
        if(index > -1){
            tempList[index].point = tempList[index].point + 1
            this.setState({leaderList : tempList})
        }
    }

    decPoint(id){
        var tempList = this.state.leaderList;
        var index    = tempList.findIndex(e => e.id === id)
        if(index > -1){
            tempList[index].point = tempList[index].point - 1
            this.setState({leaderList : tempList})
        }
    }
    
    render() {
        const myData = [].concat(this.state.leaderList)
                        .sort((a, b) => a.point < b.point ? 1 : -1)
                        .map((leader, i) => 
                            <div key={i} className="leaderDiv"> 
                                    <span className="textPro">{leader.name}</span>
                                    <button className="buttonClass" onClick={()=>{this.incPoint(leader.id)}}>+</button>
                                    <button className="buttonClass" onClick={()=>{this.decPoint(leader.id)}}>-</button>
                                    <span className="textPro">{leader.point} Point</span>
                            </div>
                        );

        return (
            <div className="container-fluid">
                <h1>Leaderboard</h1>
                <div className="outerBorder">
                    {
                        myData
                    }
                </div>
            </div>
        );
    }
}


export default Leaderboard;