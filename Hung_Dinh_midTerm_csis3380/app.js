
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
       
      },
      {
        id: 2,
        url: 'img/AD.svg',
    
      },
      {
        id: 3,
        url: 'img/AH.svg',
     
        
      },
      {
        id: 4,
        url: 'img/AS.svg',
      
      },
      {
        id: 5,
        url: 'img/2C.svg',
       
      },
      {
        id: 6,
        url: 'img/2D.svg',
      
      },
      {
        id: 7,
        url: 'img/2H.svg',
     
      },
      {
        id: 8,
        url: 'img/2S.svg',
       
      },
      {
        id: 9,
        url: 'img/3C.svg',
      
      },
      {
        id: 10,
        url: 'img/3D.svg',
       
      },
      {
        id: 11,
        url: 'img/3H.svg',
      
      },
      {
        id: 12,
        url: 'img/3S.svg',
     
      },
      {
        id: 13,
        url: 'img/4C.svg',
      
      },
      {
        id: 14,
        url: 'img/4D.svg',
       
      },
      {
        id: 15,
        url: 'img/4H.svg',
     
      },
      {
        id: 16,
        url: 'img/4S.svg',
       
      },
      {
        id: 17,
        url: 'img/5C.svg',
       
      },
      {
        id: 18,
        url: 'img/5D.svg',
       
      },
      {
        id: 19,
        url: 'img/5H.svg',
       
      },
      {
        id: 20,
        url: 'img/5S.svg',
        
      },
      {
        id: 21,
        url: 'img/6C.svg',
       
      },
      {
        id: 22,
        url: 'img/6D.svg',
      
      },
      {
        id: 23,
        url: 'img/6H.svg',
      
      },
      {
        id: 24,
        url: 'img/6S.svg',
      
      },
      {
        id: 25,
        url: 'img/7C.svg',
      
      },
      {
        id: 26,
        url: 'img/7D.svg',
        
      },
      {
        id: 27,
        url: 'img/7H.svg',
        
      },
      {
        id: 28,
        url: 'img/7S.svg',
        
        
      },
      {
        id: 29,
        url: 'img/8C.svg',
        
      },
      {
        id: 30,
        url: 'img/8D.svg',
        
      },
      {
        id: 31,
        url: 'img/8H.svg',
       
      },
      {
        id: 32,
        url: 'img/8S.svg',
        
      },
      {
        id: 33,
        url: 'img/9C.svg',
        
      },
      {
        id: 34,
        url: 'img/9D.svg',
       
      },
      {
        id: 35,
        url: 'img/9H.svg',
       
      },
      {
        id: 36,
        url: 'img/9S.svg',
        
      },
      {
        id: 37,
        url: 'img/TC.svg',
        
      },
      {
        id: 38,
        url: 'img/TD.svg',
       
      },
      {
        id: 39,
        url: 'img/TH.svg',
      
      },
      {
        id: 40,
        url: 'img/TS.svg',
       
      },
      {
        id: 41,
        url: 'img/JC.svg',
        
      },
      {
        id: 42,
        url: 'img/JD.svg',
        
      },
      {
        id: 43,
        url: 'img/JH.svg',
        
      },
      {
        id: 44,
        url: 'img/JS.svg',
        
      },
      {
        id: 45,
        url: 'img/QC.svg',
      },
      {
        id: 46,
        url: 'img/QD.svg',
      },
      {
        id: 47,
        url: 'img/QH.svg',
      },
      {
        id: 48,
        url: 'img/QS.svg',
      },
      {
        id: 49,
        url: 'img/KC.svg',
      },
      {
        id: 50,
        url: 'img/KD.svg',
      },
      {
        id: 51,
        url: 'img/KH.svg',
      },
      {
        id: 52,
        url: 'img/KS.svg',
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
      var img = ''
      if(prevState.cards[id+this.count].url.toString().includes("H") 
      || prevState.cards[id+this.count].url.toString().includes("D")){
        img = 'img/2B.svg'
      } else{
        img = 'img/1B.svg'
      }
      return {
        
      url: prevState.cards[id+this.count].url = img
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