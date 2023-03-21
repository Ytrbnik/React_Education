import {Component} from 'react';
import './App.css';

class WhoAmI extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      years: 25,
      text: '+++',
      position: ''
    }
  }

  nextYear = () => {
    console.log('+++');
    this.setState(state  => ({
      years: state.years + 1
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {years, text, position} =this.state;
    return (
      <div>
        <button onClick={this.nextYear}>{text}</button>
          <h1>My name is {name}, surname - {surname}, age - {years}. Position : {position}</h1>
          <a href={link}>My profile</a>
          <form>
            <span>Введите должость</span>
            <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
          </form>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name='John' surname="Smith" link="facebook.com"/>
      <WhoAmI name='Jamse' surname="Smith" link="facebook.com"/>
    </div>
  );
}

export default App;
