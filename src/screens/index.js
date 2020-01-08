import React from 'react';
import { connect } from 'react-redux';
import { addPerson, removePerson } from '../actions/personAction';
// import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', };
  }

  addPerson() {
    if (this.state.inputValue === '') return;
    this.props.dispatchAddPerson({
      name: this.state.inputValue,
    });
    this.setState({ inputValue: '' });
  }
  deletePerson(person) {
    console.log('person', person)
    this.props.dispatchDeletePerson(person)
  }

  updateInput(e) {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    return (
      <div className='main-container'>
        <div className='title'>People</div>
        <input
          onChange={text => this.updateInput(text)}
          value={this.state.inputValue}
          placeholder="Name"
          className='input-name'
        />
        <div
          className='btn-add'
          onClick={() => this.addPerson()}
        >
          <div className='txt-button-add'>Add Person</div>
        </div>
        {
          this.props.people.map((person, index) => (
            <div key={index} className='person-details'>
              <div>Name: {person.name}</div>
              <div onClick={() => this.deletePerson(person)}
                className='btn-delete'>
                Delete Person
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    people: state.people.people
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddPerson: (person) => dispatch(addPerson(person)),
    dispatchDeletePerson: (person) => dispatch(removePerson(person))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)