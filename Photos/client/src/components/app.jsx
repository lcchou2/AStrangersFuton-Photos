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
      list : []
    }
  }

  componentDidMount () {
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

      <div >
        {this.state.list.map((photos) => (
          <Photos photos={photos} />
        ))}
      </div>
    )
  }
}

export default App;

   /* {this.state.list.map((photos) => (
          <Photos photos={photos} />
        ))}    WILL USE after*/