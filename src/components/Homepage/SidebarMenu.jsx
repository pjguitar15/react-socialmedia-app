import React from 'react'

const SidebarMenu = () => {
  return (
    <div className="text-center py-5 mt-4 bg-light shadow-sm">
      <h6>Post Categories</h6>
      <div className="icons row py-4 px-5">
        <div className="postIconDiv active col-xl-2 mx-auto">
          <i class="fa fa-adjust text-light"></i>
        </div>     
        <div className="postIconDiv col-xl-2 mx-auto">
          <i class="fa fa-adjust text-secondary"></i>
        </div>         
        <div className="postIconDiv col-xl-2 mx-auto">
          <i class="fa fa-adjust text-secondary"></i>
        </div>  
        <div className="postIconDiv col-xl-2 mx-auto">
          <i class="fa fa-adjust text-secondary"></i>
        </div>  
        <div className="postIconDiv col-xl-2 mx-auto">
          <i class="fa fa-adjust text-secondary"></i>
        </div>  
      </div>

      {/* Your interest */}
      <div className="yourInterest mt-3">
        <h6 className="text-dark">Your Interest</h6>
        <span className="text-secondary">EDIT</span>
      </div>

      {/* Interest List */}
      <ul className="interestList px-5">
        <li className="my-3 col-6">
          <input type="checkbox" className="mx-2" />
          <span className="text-secondary mx-1">Entertainment</span>
        </li>
        <li className="my-3 col-6">
          <input type="checkbox" className="mx-2" />
          <span className="text-secondary mx-1">Entertainment</span>
        </li>
        <li className="my-3 col-6">
          <input type="checkbox" className="mx-2" />
          <span className="text-secondary mx-1">Entertainment</span>
        </li>
        <li className="my-3 col-6">
          <input type="checkbox" className="mx-2" />
          <span className="text-secondary mx-1">Entertainment</span>
        </li>
        <li className="my-3 col-6">
          <input type="checkbox" className="mx-2" />
          <span className="text-secondary mx-1">Entertainment</span>
        </li>
        <li className="my-3 col-6">
          <input type="checkbox" className="mx-2" />
          <span className="text-secondary mx-1">Entertainment</span>
        </li>
      </ul>

    </div>
  )
}

export default SidebarMenu
