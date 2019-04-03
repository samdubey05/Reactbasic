import React, { Component } from 'react';
export default class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {
            select: 'React',
        }
        this.options = props.options;
    }
    handleSelect = (event) => {
        this.setState({
            select: event.target.value
        })
        
        this.props.selectClick(event.target.value);
        // eventtargetvalue iss component ki property bnn gyi jo selectclick function me stored hai
    }
    render() {
        return (

            <div>
                <select value={this.state.select} onChange={this.handleSelect}>
                    {/* {this.props.children} */}
                    {this.options.map( (option, index)=>{
                        return (<option>{option}</option>)
                    })
                    }
                </select>

            </div>

        )
    }
}


