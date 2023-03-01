import '../css/ToggleColor.css';
import React from 'react';

export default class ToggleColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: 'party'
        }
    }
    handleOnChange(event) {
        this.props.syncColor(event.target.value);
        this.setState({
            selectedColor: event.target.value
        });
    }
    render() {
        return (
            <div id='togglecolor-container'>
                <span>Selected Display Type: </span>
                <select onChange={(event) => this.handleOnChange(event)} value={this.props.color}>
                    <option value='none'>None</option>
                    <option value='party'>Party</option>
                    <option value='safe'>Safe</option>
                    <option value='incumbent'>Incumbent</option>
                </select><br/>
                {this.state.selectedColor === 'party' && <div>
                    <div className='box' style={{backgroundColor: '#3498DB'}}></div><span className='legend'>Democrat</span>
                    <div className='box' style={{backgroundColor: '#E74C3C'}}></div><span className='legend'>Republican</span>
                </div>}
                {this.state.selectedColor === 'safe' && <div>
                    <div className='box' style={{backgroundColor: '#9b59b6'}}></div><span className='legend'>Safe</span>
                    <div className='box' style={{backgroundColor: '#f1c40f'}}></div><span className='legend'>Non-Safe</span>
                </div>}
                {this.state.selectedColor === 'incumbent' && <div>
                    <div className='box' style={{backgroundColor: '#FFFFFF'}}></div><span className='legend'>Incumbent</span>
                    <div className='box' style={{backgroundColor: '#000000'}}></div><span className='legend'>No Incumbent</span>
                </div>}
            </div>
        )
    }
}