import React, {Component} from 'react';
import jellyfish from './jellyfish.jpg';
import goat from './goat.jpg';
import seaSeal from './seaSeal.jpg';
import dog from './dog.jpg';
import './App.css';

  class App extends Component{
    constructor(props){
      super(props);

      this.state = {
        items:[
          {
            id:1,
            image: jellyfish,
            alt:'jellyfish'
          },
          {
            id:2,
            image: seaSeal,
            alt:'seaSeal'
          },
          {
            id:3,
            image: dog,
            alt:'dog'
          }
        ],

        imageInputValue: ''
      }
    }


  render(){
    return(
      <div className="container">
        <header>my album</header>
        <main>
            <div className="items">
              {
                this.state.items.map((item) => {

                  return(
                  <div className="item" key={item.id}>
                    <i className="fas fa-times" ></i>
                    <img src={item.image} alt={item.alt}/>
                    <div className="item-name">{item.alt}</div>
                    <div className="img-action">
                        <div className="like">
                            <i className="far fa-heart"></i>  <p>like</p>
                        </div>
                        <div className="comment">
                            <i className="far fa-comment-dots"></i> <p>Comment</p>
                        </div>
                        <div className="share">
                            <i className="far fa-share-square"></i> <p>Share</p>
                        </div>
                    </div>
                    
                   </div>
                  );
                  
                })
            }
              
            </div>

            <form className="add-new">
                <p>Post image</p>
                <input type="text" />
                <button type="submit"> Post</button>
            </form>
        </main>
        <footer></footer>
    </div>
    );

  }
}

export default App;
