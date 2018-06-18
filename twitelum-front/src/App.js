import React, { Component, Fragment } from "react";
import Cabecalho from "./components/Cabecalho";
import Dashboard from "./components/Dashboard";
import Widget from "./components/Widget";
import TrendsArea from "./components/TrendsArea";
import Tweet from "./components/Tweet";

class App extends Component {
  constructor() {
    super();
    this.state = {
      novoTweet: "",
      tweets: []
    };
    this.adicionaTweet = this.adicionaTweet.bind(this);
  }

  adicionaTweet(event) {
    event.preventDefault();
    const novoTweet = this.state.novoTweet;
    if (novoTweet) {
      // REQUEST NO SERVIDOR
      fetch("http://localhost:3001/tweets", {
        method: "POST",
        body: JSON.stringify({ login: "artdiniz", conteudo: novoTweet })
      })
        .then(respostaDoServidor => {
          return respostaDoServidor.json();
        })
        .then(tweetVindoDoServidor => {
          console.log(tweetVindoDoServidor);
          this.setState({
            tweets: [tweetVindoDoServidor, ...this.state.tweets],
            novoTweet: ""
          });
        });
    }
  }

  componentDidMount() {
      // GET DOS TWEETS
    fetch("http://localhost:3001/tweets")
      .then(respostaDoServidor => {
        return respostaDoServidor.json();
      })
      .then(respostaEmJson => {
        this.setState({
            tweets: respostaEmJson
          });
      });
     
  }

  comp

  render() {
    console.log(this.state.novoTweet);
    return (
      <Fragment>
        <Cabecalho usuario="Guilherme Delmiglio" />
        <div className="container">
          <Dashboard>
            <Widget>
              <form className="novoTweet" onSubmit={this.adicionaTweet}>
                <div className="novoTweet__editorArea">
                  {/* <span className={"novoTweet__status" + (this.state.novoTweet.length > 140 ? " novoTweet__status--invalido" : "")}>{this.state.novoTweet.length}/140</span> */}
                  <span
                    className={`novoTweet__status ${
                      this.state.novoTweet.length > 140
                        ? "novoTweet__status--invalido"
                        : ""
                    }`}
                  >
                    {this.state.novoTweet.length} / 140{" "}
                  </span>
                  <textarea
                    value={this.state.novoTweet}
                    onInput={event =>
                      this.setState({ novoTweet: event.target.value })
                    }
                    className="novoTweet__editor"
                    placeholder="O que está acontecendo?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={this.state.novoTweet.length > 140}
                  className="novoTweet__envia"
                >
                  Tweetar
                </button>
              </form>
            </Widget>
            <Widget>
              <TrendsArea />
            </Widget>
          </Dashboard>
          <Dashboard posicao="centro">
            <Widget>
              <div className="tweetsArea">
                {this.state.tweets.map(function(tweet, indice) {
                  return <Tweet key={indice} texto={tweet.conteudo} />;
                })}
              </div>
            </Widget>
          </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;
