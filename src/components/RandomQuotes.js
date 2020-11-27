import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchQuotes, newQuote } from '../actions/index';

class RandomQuotes extends Component {
    constructor(){
        super();
    }

    componentDidMount() {
      this.props.fetchQuotes();
      this.getNewQuote();
    }

    getNewQuote = () => {
      const randomQuoteIndex = Math.floor(Math.random() * 102);
      this.props.newQuote(randomQuoteIndex);
    }

    render(){
        if (this.props.loading) {
          return <p>Loading....</p>
        }

        //console.log(this.props.randomNumber)
        const { quote, author } = this.props.quotes[this.props.randomNumber];
        const randomColor = this.props.randomColor[Math.floor(Math.random() * 11)];

        return (
            <div className="wrapper" style={{ backgroundColor: randomColor }}>
            <div id="quote-box">
              <div className="quote-text">
                <i className="fa fa-quote-left"> </i>
                <q id="text" style={{ color: randomColor }}>
                  {quote}
                </q>
              </div>
              <div className="quote-author" style={{ color: randomColor }}>
                -<span id="author"> {author} </span>
              </div>
              <div className="buttons">
                <a
                  href={`https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&related=freecodecamp&text="${quote}" %0D%0A- ${author}%0D%0A`}
                  className="button"
                  id="tweet-quote"
                  title="Tweet this quote!"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: randomColor }}
                >
                  TWEET
                </a>
                <button
                  className="button"
                  id="new-quote"
                  onClick={this.getNewQuote}
                  style={{ backgroundColor: randomColor }}
                >
                  NEW QUOTE
                </button>
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.data,
    loading: state.quotes.loading,
    randomNumber: state.quotes.randomNumber,
    randomColor: state.quotes.colors
  }
};

const mapDispatchToProps = dispatch => 
bindActionCreators({
  fetchQuotes,
  newQuote
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuotes);