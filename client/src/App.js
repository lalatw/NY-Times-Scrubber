import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import { Input, TextArea, FormBtn } from "./components/Form";
import { Container }  from "./components/Grid";
import { List, ListItem } from "./components/Results";
import SaveBtn from "./components/SaveBtn";
import API from "./utils/API"

class App extends Component {
  state = {
    topic: "123",
    startYear: 35,
    endYear: 2018,
    article: "the article"
  };

componentDidMount(){
  API.getArticles().then(data => {
    console.log(data)
  })
}

  render() {

    return (
      <div>
        <Jumbotron>
          <h1>
            New York Times Article Scrubber
      </h1>
          <h4>
            Search for and annotate articles of interest
      </h4>
        </Jumbotron>
        <Container>
          <form>
            <h1>Search</h1>
            <h4>Topic</h4>
            <Input
              value={this.state.topic}
              onChange={this.handleInputChange}
              name="topic"
              placeholder="topic"
            />
            <h4>Start Year</h4>
            <Input
              value={this.state.startYear}
              onChange={this.handleInputChange}
              name="startYear"
              placeholder="Start Year"
            />
            <h4>End Year</h4>
            <Input
              value={this.state.endYear}
              onChange={this.handleInputChange}
              name="endYear"
              placeholder="End Year"
            />
            <FormBtn
              onClick={this.handleFormSubmit}
            >
              Search
              </FormBtn>
          </form>
        </Container>
        <Container>
          <h1>Results</h1>
          <List>
          <ListItem>12345
            {/* <Link to={"https://www.nytimes.com/"}>https://www.nytimes.com/
            </Link> */}
            <SaveBtn />
          </ListItem>
          <ListItem>67890
            {/* <Link to={"https://www.nytimes.com/"}>https://www.nytimes.com/
            </Link> */}
            <SaveBtn />
          </ListItem>
          </List>
      </Container >
      <Container>
          <h1>Saved Articles</h1>
          <List>
          <ListItem>12345
            {/* <Link to={"https://www.nytimes.com/"}>https://www.nytimes.com/
            </Link> */}
            <SaveBtn />
          </ListItem>
          <ListItem>67890
            {/* <Link to={"https://www.nytimes.com/"}>https://www.nytimes.com/
            </Link> */}
            <SaveBtn />
          </ListItem>
          </List>
      </Container >
      </div >
    );
  }
}

export default App;

