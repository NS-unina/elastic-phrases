import React from "react";

// https://codepen.io/ghozt12/pen/LVaxLM
import phrases from './phrases.json';
console.log(phrases)
class TableData extends React.Component {


    render() {
        return (
            <p> {this.props.data} </p>
        );
    }
}
// Table Element
class TableTitle extends React.Component {
    render() {
        return (
            <div>
                <h2> {this.props.title}</h2>
            </div>
        );
    }
}

class SearchMatch extends React.Component {

    render() {
        return (
            <div>
                <p> Match: {this.props.match}</p>
            </div>
        );
    }
}

// Table
class Table extends React.Component {

    render() {

        // We need to get each row and store it in an array
        var rowsTitle = [];
        var search = [];
        var searchterm = this.props.searchTerm; // need this or it doesnt work
        var key = '';
        this.props.data.forEach(function (row) {
            if (row.title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1 &&
                row.tags.toLowerCase().indexOf(searchterm.toLowerCase()) === -1
            )
                return;

            // need to grab the correct match
            if (row.title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1) {
                var m = row.tags.toLowerCase().split(' ');
                for (var i in m)
                    if (m[i].indexOf(searchterm.toLowerCase()) !== -1)
                        key = m[i];
            } else {
                key = row.title.toLowerCase();
            }



            rowsTitle.push(<TableTitle key={row.title} title={row.title} />);
            if (searchterm != '')
                rowsTitle.push(<SearchMatch match={key} />);
            rowsTitle.push(<TableData key={row.content} data={row.content} />);


        });

        // Then render all. Render using childs. Send them prop.title and prop.data
        return (
            <div>
                {rowsTitle}
            </div>
        );
    }
}

// Search
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.filterList = this.filterList.bind(this)
    }


    filterList(event) {
        console.log(this)
        this.props.userInput(event.target.value);
    }

    render() {
        console.log(this.props.searchTerm)
        return (
            <input key={this.props.searchTerm} type="text"
                placeholder="Start Typing"
                value={this.props.searchTerm}
                onChange={this.filterList} autoFocus>
            </input>
        );
    }
}

// App

// JSON
var DATA = [{
    "title": "Binding",
    "tags": "Binding Hiding Miding Sliding SAVE",
    "content": "This is the binding content area where information about binding is shown"
}, {
    "title": "Constant",
    "tags": "Math bath slather calf save",
    "content": "This is the Constant content area where information about Constant is shown"
}, {
    "title": "Numbers",
    "tags": "Happy birthday sir and maam",
    "content": "This is the Numbers content area where information about Numbers is shown"
}];





class Json extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            filterText2: ''
        }

    }

    handleUserInput = (filter) => {
        this.setState({
            filterText: filter
        })
    }

    render() {

        return (
            <div>
                <Search searchTerm={this.state.filterText} userInput={this.handleUserInput.bind(this)} />
                <Table searchTerm={this.state.filterText} data={DATA} />
            </div>
        );
    }

}
export default Json;