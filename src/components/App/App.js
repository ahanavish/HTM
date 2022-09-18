import React from 'react';
import Header from "../Header/Header";
import ResultContainer from "../ResultContainer/ResultContainer";
import SearchBox from "../SearchBox/SearchBox";
import './App.css';
import { collection, getDocs } from "firebase/firestore"
import { db } from '../../firebase'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      headerText: 'MedSync',
      headerExpanded: true,
      suggestedMeds: [],
    }
  }

  async componentDidMount() {
    const querySnapshot = await getDocs(collection(db, 'medicines'))
    const medicines = querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    }))

    this.setState({
      suggestedMeds: medicines
    });

  }

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText
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