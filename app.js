import React, { Component } from 'react';
import './App.css';
import Drawer from 'react-classic-drawer';
import 'react-classic-drawer/build/style.css'
import { Radio, Button, Select, message } from 'antd';
import catSrc from './cat.jpeg';
const RadioGroup = Radio.Group;
const Option = Select.Option;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      direction: 'RIGHT',
      duration: 500,
    }
  }
  onChange = (e) => {
    this.setState({ direction: e.target.value })
  }
  onClose = () => { 
    message.info('mask was clicked, now drawer will be close', 1.5);
    this.setState({ visible: false });
  }
  onSelectChange = (val)=>{
    this.setState({ duration: val });
  }
  render() {
    return (
      <div className="App">
        <h1>React Classic Drawer</h1>
        <p>try to choose a direction then click open</p>
        <RadioGroup onChange={this.onChange} value={this.state.direction}>
          <Radio value={'RIGHT'}>RIGHT</Radio>
          <Radio value={'LEFT'}>LEFT</Radio>
          <Radio value={'TOP'}>TOP</Radio>
          <Radio value={'BOTTOM'}>BOTTOM</Radio>
        </RadioGroup>
        <br /><br />
        <p>try to choose a integer number to change drawer animation speed</p>
        <Select defaultValue="500ms" style={{ width: 120 }} onChange={this.onSelectChange}>
          <Option value={200}>200ms</Option>
          <Option value={500}>500ms</Option>
          <Option value={800}>800ms</Option>
          <Option value={2000}>20000ms</Option>
        </Select>
        <br />
        <br />
        <p>
          <Button onClick={()=>{ this.setState({ visible: true }) }}>open</Button>
        </p>
        <Drawer visible={this.state.visible} direction={this.state.direction} duration={this.state.duration} 
          // onClose={()=>{ this.setState({visible: false,}) }}
          onClose={ this.onClose }
          contentClass="content"
        >
          <h2>This is drawer's content</h2>
          <p>Just put content here as Drawer's children</p>
          <img alt="pic" src={`.${catSrc}`} style={{ maxWidth:'100%', maxHeight: 300 }}/>
        </Drawer>
      </div>
    );
  }
}

export default App;

