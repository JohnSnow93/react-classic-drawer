# react-classic-drawer

A classic and simple implement of react drawer;

** Note: Your React version should be at least 16+; **

## install
```
npm install react-classic-drawer react-addons-css-transition-group --save
```

## usage

```jsx
import Drawer from 'react-classic-drawer';
import 'react-classic-drawer/build/style.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    }
  }

  render() {
    return (
      <div>
        <button onClick={()=>{ this.setState({ visible: true }) }}>open</button>
        <Drawer visible={this.state.visible} direction="LEFT">
          <h2>This is drawer's content</h2>
          <p>Just put content here as Drawer's children</p>
        </Drawer>
      </div>
    )
  }

}

```

# API
React classic drawer as a component can receive props:

| name | type | default | description |
| ---- | ---- | ---- | :----: |
| visible | boolean | false | set drawer open or close |
| direction | enum[string] | 'RIGHT' | set drawer direction, one of 'LEFT','RIGHT','TOP','BOTTOM' |
| duration | number | 500 | set milliseconds for animation when drawer open and close |
| onClose | function | -- | callback function on drawer close or mask layer is clicked |
| contentClass | string | -- | set a classname for the wrapper of drawer content |
