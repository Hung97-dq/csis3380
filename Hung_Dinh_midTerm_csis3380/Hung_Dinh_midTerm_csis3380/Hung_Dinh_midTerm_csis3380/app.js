
const Header = (props) => {
  return (
    <header>
        <h1>Playing Cards Game of {props.totalCards}</h1>
    </header>
  );
}

const Cards = (props) => {
  return (
        <div className="card">
          <button className="remove-card" onClick={() => props.removeCard(props.id)}>Delete</button>
          <button className="remove-card" onClick={() => props.hideCard(props.id)}>Hide</button>
          <div><img src={props.url}/></div>
      </div>
  );
}

class App extends React.Component {
  state = {
    cards: [
      {
        id: 1,
        url: 'img/AC.svg',
        back:'img/1B.svg'
      },
      {
        id: 2,
        url: 'img/AD.svg',
        back:'img/2B.svg'
      },
      {
        id: 3,
        url: 'img/AH.svg',
        back:'img/2B.svg'
        
      },
      {
        id: 4,
        url: 'img/AS.svg',
        back:'img/1B.svg',
      },
      {
        id: 5,
        url: 'img/2C.svg',
        back:'img/1B.svg'
      },
      {
        id: 6,
        url: 'img/2D.svg',
        back:'img/2B.svg'
      },
      {
        id: 7,
        url: 'img/2H.svg',
        back:'img/2B.svg'
      },
      {
        id: 8,
        url: 'img/2S.svg',
        back:'img/1B.svg'
      },
      {
        id: 9,
        url: 'img/3C.svg',
        back:'img/1B.svg'
      },
      {
        id: 10,
        url: 'img/3D.svg',
        back:'img/2B.svg'
      },
      {
        id: 11,
        url: 'img/3H.svg',
        back:'img/2B.svg'
      },
      {
        id: 12,
        url: 'img/3S.svg',
        back:'img/1B.svg'
      },
      {
        id: 13,
        url: 'img/4C.svg',
        back:'img/1B.svg'
      },
      {
        id: 14,
        url: 'img/4D.svg',
        back:'img/2B.svg'
      },
      {
        id: 15,
        url: 'img/4H.svg',
        back:'img/2B.svg'
      },
      {
        id: 16,
        url: 'img/4S.svg',
        back:'img/1B.svg'
      },
      {
        id: 17,
        url: 'img/5C.svg',
        back:'img/1B.svg'
      },
      {
        id: 18,
        url: 'img/5D.svg',
        back:'img/2B.svg'
      },
      {
        id: 19,
        url: 'img/5H.svg',
        back:'img/2B.svg'
      },
      {
        id: 20,
        url: 'img/5S.svg',
        back:'img/1B.svg'
      },
      {
        id: 21,
        url: 'img/6C.svg',
        back:'img/1B.svg'
      },
      {
        id: 22,
        url: 'img/6D.svg',
        back:'img/2B.svg'
      },
      {
        id: 23,
        url: 'img/6H.svg',
        back:'img/2B.svg'
      },
      {
        id: 24,
        url: 'img/6S.svg',
        back:'img/1B.svg'
      },
      {
        id: 25,
        url: 'img/7C.svg',
        back:'img/1B.svg'
      },
      {
        id: 26,
        url: 'img/7D.svg',
        back:'img/2B.svg'
      },
      {
        id: 27,
        url: 'img/7H.svg',
        back:'img/2B.svg'
      },
      {
        id: 28,
        url: 'img/7S.svg',
        back:'img/1B.svg'
        
      },
      {
        id: 29,
        url: 'img/8C.svg',
        back:'img/1B.svg'
      },
      {
        id: 30,
        url: 'img/8D.svg',
        back:'img/2B.svg'
      },
      {
        id: 31,
        url: 'img/8H.svg',
        back:'img/2B.svg'
      },
      {
        id: 32,
        url: 'img/8S.svg',
        back:'img/1B.svg'
      },
      {
        id: 33,
        url: 'img/9C.svg',
        back:'img/1B.svg'
      },
      {
        id: 34,
        url: 'img/9D.svg',
        back:'img/2B.svg'
      },
      {
        id: 35,
        url: 'img/9H.svg',
        back:'img/2B.svg'
      },
      {
        id: 36,
        url: 'img/9S.svg',
        back:'img/1B.svg'
      },
      {
        id: 37,
        url: 'img/TC.svg',
        back:'img/1B.svg'
      },
      {
        id: 38,
        url: 'img/TD.svg',
        back:'img/2B.svg'
      },
      {
        id: 39,
        url: 'img/TH.svg',
        back:'img/2B.svg'
      },
      {
        id: 40,
        url: 'img/TS.svg',
        back:'img/1B.svg'
      },
      {
        id: 41,
        url: 'img/JC.svg',
        back:'img/1B.svg'
      },
      {
        id: 42,
        url: 'img/JD.svg',
        back:'img/2B.svg'
      },
      {
        id: 43,
        url: 'img/JH.svg',
        back:'img/2B.svg'
      },
      {
        id: 44,
        url: 'img/JS.svg',
        back:'img/1B.svg'
      },
      {
        id: 45,
        url: 'img/QC.svg',
        back:'img/1B.svg'
      },
      {
        id: 46,
        url: 'img/QD.svg',
        back:'img/2B.svg'
      },
      {
        id: 47,
        url: 'img/QH.svg',
        back:'img/2B.svg'
      },
      {
        id: 48,
        url: 'img/QS.svg',
        back:'img/1B.svg'
      },
      {
        id: 49,
        url: 'img/KC.svg',
        back:'img/1B.svg'
      },
      {
        id: 50,
        url: 'img/KD.svg',
        back:'img/2B.svg'
      },
      {
        id: 51,
        url: 'img/KH.svg',
        back:'img/2B.svg'
      },
      {
        id: 52,
        url: 'img/KS.svg',
        back:'img/1B.svg'
      },
    ]
  
  };

  count =-1
  handleremoveCard = (id) => {
    this.setState( prevState => {
      this.count--
      return {
        cards: prevState.cards.filter( p => p.id !== id )
      };
    });
  }

  

  handleHideCard= (id) => {
    this.setState( prevState => {
      return {
      url: prevState.cards[id+this.count].url = prevState.cards[id+this.count].back
      }
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalCards={this.state.cards.length} 
        />
  
        {/* Cardss list */}
        <div className="container">
        {this.state.cards.map( card =>
          <Cards
            id={card.id}x
            url ={card.url}
            back={card.back}
            key={card.id.toString()} 
            removeCard={this.handleremoveCard}  
            hideCard={this.handleHideCard}      
          />
        )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);