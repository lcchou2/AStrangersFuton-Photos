import Modal, {closeStyle} from 'simple-react-modal'

class Flag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({showModal: true}, () => {
      console.log(this.state.showModal)
    });
  }

  hideModal(){
    this.setState({showModal: false});
  }

  render() {
    return (
      <div className="flag">
        <img className="flag" onClick={this.showModal} src="http://download.seaicons.com/icons/icons8/ios7/512/Very-Basic-Flag-icon.png"/>
        <Modal
        className="test-class" //this will completely overwrite the default css completely
        style={{background: 'red'}} //overwrites the default background
        containerStyle={{background: 'blue'}} //changes styling on the inner content area
        containerClassName="test"
        closeOnOuterClick={true}
        show={this.state.show}
        onClose={this.hideModal}>
  
        <a style={closeStyle} onClick={this.hideModal}>X</a>
        <div>hey</div>
  
        </Modal>
      </div>
    );
  }
}

export default Flag;