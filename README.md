# vuefy

> work with react state like vue.js state

Look into inc function
```js
class App extends VueLikeComponent {
  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.inc}>+</button>
      </div>
    )
  }

  inc = () => {
    // this will fire rerender automaticly
    this.state.count++
  }
}
```

See implementation in sources

## Warning
This project is just experiment to demonstrate idea of vue.js/mobx state in React.
Do not use it in production.
