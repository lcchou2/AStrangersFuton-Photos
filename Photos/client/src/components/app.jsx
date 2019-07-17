import ajax from '../lib/ajax';
import Photos from './photos.jsx'
import Carousel from './carousel.jsx'
import React from 'react'
import Header from './headerapp.jsx'

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
    var id = 1;
    // var path = window.location.pathname.split('/');
    // var pathId = Number.parseInt(path[1], 10);
    // if (!Number.isNaN(pathId)) {
    //   id = pathId;
    // }
    this.state = {
      listingId: id,
      list : [{url:''}, {url:''},{url:''},{url:''},{url:''}],
      display : 'none',
      displayShare: 'none',
      displaySave: 'none'
    }

    this.modalHandler = this.modalHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.shareHandler = this.shareHandler.bind(this);
    this.switchBack = this.switchBack.bind(this);
    this.shareXHandler = this.shareXHandler.bind(this);
  }

  // componentDidMount() {
  //   ajax.getAjax(this.state.listingId,(photoobj) => {
  //     this.setState({
  //       list : photoobj
  //     });
  //   })
  // }

  shareHandler(e) {
    e.stopPropagation();
    this.setState ({
      displayShare : 'block'
    })
  }

  saveHandler(e) {
    e.stopPropagation();
    this.setState ({
      displaySave : 'block'
    })
  }

  shareXHandler(e) {
    e.stopPropagation();
    this.setState ({
      display : 'none',
      displayShare: 'none',
      displaySave: 'none'
    })
  }

  modalHandler() {
    this.setState ({
      display : 'block'
    })
  }

  switchBack() {
    this.setState ({
      display : 'none',
      displayShare: 'none',
      displaySave: 'none'

    })
  }

  render() {
    return(
      <div >
        <div>
          <Header/>
        </div>
       
        <div>
          <Photos list = {this.state.list} modalHandler = {this.modalHandler} saveHandler = {this.saveHandler} switchBack = {this.switchBack} shareHandler = {this.shareHandler} displayShare = {this.state.displayShare} displaySave = {this.state.displaySave} shareXHandler = {this.shareXHandler}/>

        </div>
       


      <div style = {{display:this.state.display}}>
        <Carousel list = {['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hb-luxury-airbnbs-santorini-1531317651.png?crop=1.00xw:1.00xh;0,0&resize=4296:*','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lakecomo-gallio-01-1529341903.jpg?crop=0.536xw:1.00xh;0.211xw,0&resize=980:*','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hb-luxury-airbnbs-santorini-1531317651.png?crop=1.00xw:1.00xh;0,0&resize=4296:*']} display = {this.state.display} switchBack = {this.switchBack}/>
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