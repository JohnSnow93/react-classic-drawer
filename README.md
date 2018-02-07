# react-classic-drawer

A classic and simple implement of react drawer;

Note: Your React version should be at least 16+;

## usage
example:
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
        <button></button>
        <Drawer visible={this.state.visible} direction="LEFT">
          <h2>This is drawer's content</h2>
        </Drawer>
      </div>
    )
  }

}

```

# react-classic-drawer(CHI)
