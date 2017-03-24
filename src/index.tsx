import * as React from 'react'
import { render } from 'react-dom'
import { observable, observe } from 'mobx'

class VueLikeComponent<P, S> extends React.Component<P, S> {
  public _state: S

  set state(newState: S) {
    this._state = observable(newState)
    observe(this._state, () => {
      this.forceUpdate()
    })
  }

  get state() {
    return this._state
  }
}

interface State {
  count: number,
}

class App extends VueLikeComponent<void, State> {
  public state: State = {
    count: 0,
  }

  public render() {
    console.log('render')
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
        <button onClick={this.noop}>set same value</button>
      </div>
    )
  }

  private dec = () => {
    // this will fire rerender automaticly
    this.state.count--

    // using setState to fire renderer
    // this.setState(state => ({
    //   count: state.count - 1,
    // }))
  }

  private inc = () => {
    // this will fire rerender automaticly
    // this.state.count++

    // using setState to fire renderer
    this.setState(state => ({
      count: state.count + 1,
    }))
  }

  private noop = () => {
    // this will not fire rerender
    this.state.count = this.state.count

    // this will fire rerender
    // this.setState(state => ({
    //   count: state.count,
    // }))
  }
}

render(<App />, document.getElementById('app')!)
