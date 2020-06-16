import Search from 'react-search';
// import ReactDOM from 'react-dom'
import React, {Component} from 'react'

class TestComponent extends Component {
    handleItemsChange(items) {
        console.log(items)
    }

    constructor(props) {
        super(props)
        this.state = {
            repos: []
        }
    }

    getItemsAsync(searchValue, cb) {
        fetch("json/voices2.json").then((response) => {
            return response.json();
        }).then((results) => {
            if (results.voices !== undefined) {
                let voices = results.voices.map((res, i) => {
                    return {id: i, value: res.name}
                })
                this.setState({repos: voices})
                cb(searchValue)
            }
        });
    }

    render() {

        return (
            <div>

                <Search items={this.state.repos}
                        multiple={true}
                        getItemsAsync={this.getItemsAsync.bind(this)}
                        onItemsChanged={this.handleItemsChange.bind(this)}/>
            </div>
        )
    }
}

export {TestComponent}