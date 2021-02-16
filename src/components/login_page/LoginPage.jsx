import React from 'react'

const LoginPage = () => {
  return (
    <div>
            <nav class="navbar container-fluid navbar-expand-lg navbar-dark">
        <div className="container">
          <a class="navbar-brand text-light px-3 py-3" href="#"><b>Social Media App</b></a>

          {/* Hamburger menu */}
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            {/* lg-screen menu */}
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active mx-3">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
            <form class="form-inline mx-3 input-group my-lg-0">
              <input placeholder="Search for anything" className="input text-white" spellCheck='false' type="text"/>
              <button class="formButton btn btn-sm my-2 my-sm-0 text-white" type="submit"><i class="searchIcon fa fa-search"></i></button>
            </form>            
          </div>

          <button className="btn btn-warning btn-sm mx-3">Add Post</button>
          <div className="notifIcons">
            <a href="#" className="text-light mx-3"><i class="fa fa-user"></i><span className="badge">3</span></a>
            <a href="#" className="text-light mx-3"><i class="fa fa-comments"></i><span className="badge">3</span></a>
            <a href="#" className="text-light mx-3"><i class="fa fa-bell"></i><span className="badge">3</span></a>            
          </div>
          

        </div>
      </nav>

      {/* Category selector under navbar */}
      <div className='underNav py-2'>
        <ul className="text-center">
          <li className="underNavButton mx-2 px-4"><a className="active" href="#">Latest</a></li>
          <li className="underNavButton mx-2 px-4"><a className="text-secondary" href="#">Trending</a></li>
          <li className="underNavButton mx-2 px-4"><a className="text-secondary" href="#">Featured</a></li>
        </ul>
      </div>
    </div>
  )
}

export default LoginPage
