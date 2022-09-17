import React from 'react';
import Header from "../Header/Header";
import ResultContainer from "../ResultContainer/ResultContainer";
import SearchBox from "../SearchBox/SearchBox";
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      headerText: 'MedSync',
      headerExpanded: true,
      suggestedMeds: [],
    }
  }

  handleInputChange = (inputText) => {

    this.setState({
      headerExpanded: !inputText,
      suggestedMeds: SearchBox(inputText)
    });
  }

  render() {
    return (
      <div>
        <Header headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText} />
        <SearchBox OnInputChange={this.handleInputChange} />
        <ResultContainer suggestedMeds={this.state.suggestedMeds} />
      </div>
    )
  }
}


export default App;