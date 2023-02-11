// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, heads, tails, imageUrl} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading"> Coin Toss Game </h1>
          <p className="decision"> Heads (or) Tails </p>
          <img src={imageUrl} className="coin-logo" alt="toss result" />
          <button className="button" type="button" onClick={this.tossTheCoin}>
            Toss Coin
          </button>
          <div className="list-container">
            <p className="item"> Total: {total} </p>
            <p className="item"> Heads: {heads} </p>
            <p className="item"> Tails: {tails} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
