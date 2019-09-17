import React, {Component} from 'react';
import './App.css';
import HeadTitle from './headsection/HeadTitle'
import ResultsList from './ResultsList/ResultsList'

const api = 'AIzaSyDg4U1Wh2YXdO8BV9UJdFiZ3ndTFaMJTPI'

class App extends Component {
  constructor(props){
    super(props)
  this.state = {
      query: 'Enter Book here',
      filter:'ebooks',
      printType: 'all',
      jsonObject: {}, 
  }
}

  bookSearch =() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&filter=${this.state.filter}&printType=${this.state.printType}&orderBy=relevance&key=${api}`)
    .then(response => response.json())
    .then(responseJson =>{  
         
      const transferThis = responseJson
      this.setState({jsonObject: transferThis})
      console.log(responseJson)
    })    
}

    handleSearchQuery(event){
      console.log(this.state.query)
      event.preventDefault()
      this.setState({query: event.target.value})
    }

    handleFilter = (bookType) => {
      this.setState({filter: bookType})
    }

    handlePrintType = (printType) => {

    }




  render (){
    const searchValue = this.state.query

      return(
      <div className='app'>
        <HeadTitle
        userQuery={event => this.handleSearchQuery(event)}
        searchValue={searchValue}
        clickHandler={this.bookSearch}
        filterHandler={this.handleFilter}
        bookType={this.state.filter}/>        
        <ResultsList />
      </div>
        
  )}
}
export default App;
