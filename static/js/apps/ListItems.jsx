import React, { Component } from 'react';
// import Items from './Items';

class ListItems extends Component {
  constructor(props) {
    super(props);
    // Estado inicial
    this.state = {
      data: null,
      wait: true
    }
  }

  componentWillMount() {
    let items = []; // Array de items
    // Llamar a la data
    fetch('items').then(item => {
      return item.json();
    }).then(item => {
      items = item.catalog;
      // console.log(items);
    }).then(() => {
      // Poner estado
      this.setState({
        data: items,
        wait: false    
      })
    }).catch(error => {
      console.log('error: ' + error);
    })
  }
  
  // Renderizar
  render() {
    return (
      <ul>
        {/* Operador ternario */}
        {this.state.wait ? <p>Wait a moment...</p> :
          this.state.data.map(element => 
            <li key={element.id}>
              <img src={element.imageURL} alt={element.name} key={element.id}/>
              <p key={element.name}>{element.name}</p>
              <p><span>{element.currency}</span>{element.price}</p>
            </li>
          )
        }
      </ul>
    );
  }
}

export default ListItems;