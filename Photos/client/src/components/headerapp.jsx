
import React from 'react'


class Header extends React.Component {
  constructor(props) {
    super(props)
  }



  render(){
    return(
      <div>
        <div className = 'phocontainer1'>
        <div className = 'phoinnercon1'> 
          <div className = 'phopicCon'>
          <div className = 'phopic'>
            <img src = 'https://s3-us-west-1.amazonaws.com/lcchou2/airbnb.png'></img>
          </div>
          </div>
        <div className="phosearch">
            <div className="phoinput-wrapper">
              <input id="stuff" placeholder="Search"></input>
              <label for="stuff" class="fa fa-search input-icon fa-lg"></label>
            </div>
        </div>

    </div>
    <ul>
        <li><a>Become a host</a></li>
        <li><a>Help</a></li>
        <li><a>Sign up</a></li>
        <li><a>Log in</a></li>
    </ul>
  


  </div>
      </div>

    )
  }
}

export default Header