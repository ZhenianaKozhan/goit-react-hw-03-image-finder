import { Component } from 'react';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';

export class App extends Component {
  state = {
    searchText: '',
  };

  handleSubmit = ({ name }, { resetForm }) => {
    this.setState({ searchText: name });
    resetForm();
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchText={this.state.searchText} />
      </div>
    );
  }
}
