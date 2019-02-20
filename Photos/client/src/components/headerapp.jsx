
import React from 'react'


class Header extends React.Component {
  constructor(props) {
    super(props)
  }



  render(){
    return(
      <div>
        <div class = 'container1'>
    <div class = 'innercon1'> 
        <div className = 'pic'>
            
        </div>
        <div class="search">
            <div class="input-wrapper">
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