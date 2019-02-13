import ajax from '../lib/ajax';
import Photos from './photos.jsx'

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

      <div>
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