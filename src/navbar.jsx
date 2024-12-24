
import './navbar.css'

function Navbar() {
  return (
    <>
      <nav className='flex justify-between h-10 bg-transparent w-full fixed z-10'>
        <div className=" flex items-center ">
          <h1 className='titleNav ml-10 text-2xl'>Scaly Tales</h1>
            <div className="subNav pt-2">
              <ul className='flex  mx-14'>
                <li><a href="">HOME</a></li>
                <li><a href="">REPTILE TYPES </a></li>
                <li><a href="">TREATMENT ZONE</a></li>
                <li><a href="">FLORA</a></li>
              </ul>
            </div>
        </div>
        <div className="search flex items-center ">
          <input type="text" placeholder="SEARCH..." />
        </div>
      </nav>
    </>
  )
}

export default Navbar
