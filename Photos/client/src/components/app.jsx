import ajax from '../lib/ajax';
import Photos from './photos.jsx'



// const appStyle = {
//   position: 'relative',
//   border: '2px solid #333',
//   /* margin: 2%; */
//   overflow: 'hidden',
//   width: '659px', /* VERY important. Lets me change the pic sizes*/
//   height: '379px'/* 659w x 379l big picture, 324w 216l*/
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [{url:''}, {url:''},{url:''},{url:''},{url:''},{url:''}]
    }
  }

  componentWillMount() {
    ajax.getAjax((err, photoobj) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        list : photoobj
      });
    })
  }

  render() {
    return(
      <div className = 'outside'>
        <div className = 'container'>
        
        <div className = 'bigger'>
          <img src = {this.state.list[0].url}></img>
        </div>
  
        <div className = 'containerdos'>
          <div className = 'smaller'>
            <img src = {this.state.list[1].url}></img>
          </div>
  
          <div className = 'smaller'>
            <img src = {this.state.list[2].url}></img>
          </div>
        </div>
  
        <div className = 'containerdos'>
          <div className = 'smaller'>
            <img src = {this.state.list[3].url}></img>
          </div>
  
          <div className = 'smaller'>
            <img src = {this.state.list[5].url}></img>
          </div>
        </div>
        </div>

       
      </div>
     
    )
  }
}

// {this.state.list.map((photos) => (
//   <Photos photos={photos} />
// ))}

export default App;

   /* {this.state.list.map((photos) => (
          <Photos photos={photos} />
        ))}    WILL USE after*/