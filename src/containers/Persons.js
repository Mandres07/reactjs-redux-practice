import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { ADD, DELETE } from '../store/actions/persons';

class Persons extends Component {
   render() {
      return (
         <div>
            <AddPerson personAdded={this.props.onAddedPerson} />
            {this.props.persons.map(person => (
               <Person
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  clicked={() => this.props.onDeletedPerson(person.id)} />
            ))}
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      persons: state.persons
   };
}

const mapDispatchToProps = dispatch => {
   return {
      onAddedPerson: (name, age) => dispatch({ type: ADD, payload: { name: name, age: age } }),
      onDeletedPerson: (id) => dispatch({ type: DELETE, personId: id })
   };
}


export default connect(mapStateToProps, mapDispatchToProps)(Persons);