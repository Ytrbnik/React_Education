import React, {Component} from 'react';
import styled from 'styled-components';

import './App.css';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  bordr-radius: 5px;
  box-shadow: 5px 5px 15px rgba(0,0,0, .2);
  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${props => props.active ? 'orange' : 'black'};
  }
  input {
    display: block;
    margin-top: 10px;
  }
`;

const Header = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0,0,0, .2);
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

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
      <EmpItem active>
        <Button onClick={this.nextYear}>{text}</Button>
          <Header>My name is {name}, surname - {surname}, age - {years}. Position : {position}</Header>
          <a href={link}>My profile</a>
          <form>
            <span>Введите должость</span>
            <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
          </form>
      </EmpItem>
    )
  }
}

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;

const DynamicGriting = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
        })
      }
    </div>
  )
}

function App() {
  return (
    <Wrapper>
      <DynamicGriting color={'primary'}>
        <h2>This weel was hard</h2>
        <h2>Hello World</h2>
      </DynamicGriting>

      <WhoAmI name='John' surname="Smith" link="facebook.com"/>
      <WhoAmI name='Jamse' surname="Smith" link="facebook.com"/>
    </Wrapper>
  );
}

export default App;
