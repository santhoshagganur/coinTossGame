// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0}

  tossTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {total, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading"> Coin Toss Game </h1>
          <p className="decision"> Heads (or) Tails </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            className="coin-logo"
            alt="coin"
          />
          <button className="button" type="button" onClick={this.tossTheCoin}>
            Toss Coin
          </button>
          <ul className="list-container">
            <li className="list-item"> Total: {total} </li>
            <li className="list-item"> Heads: {heads} </li>
            <li className="list-item"> Tails: {tails} </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
