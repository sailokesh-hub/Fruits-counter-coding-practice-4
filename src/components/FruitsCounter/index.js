// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  eatMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-card-bg">
          <div className="fruits-card">
            <h1 className="fruits-ate-count-heading">
              Bob ate <span className="count">{mangoCount} </span> mangoes
              <span className="count"> {bananaCount}</span> bananas
            </h1>
            <div className="view-container">
              <div className="fruits-card-container">
                <img
                  className="img"
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                />
                <button onClick={this.eatMango} className="btn" type="button">
                  Eat Mango
                </button>
              </div>

              <div className="fruits-card-container">
                <img
                  className="img"
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                />
                <button onClick={this.eatBanana} className="btn" type="button">
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
