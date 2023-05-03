import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
function Navbar(title) {
  return (
    <nav class='navbar mb-12 shadow-lg bg-neutral text-neutral-content text-white bg-gray-700 '>
      <div className='container mx-auto my-auto flex justify-between'>
        <div className='flex-none py-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg align-center font-bold  py-2 my-2'>
            Github Finder
          </Link>
        </div>

        <div className='flex justify-end py-2'>
          <Link to='/' className='text-lg font-bold  px-2   py-2'>
            Home
          </Link>
          <Link
            to='/about'
            className='text-lg font-bold text-center px-2 content-center  py-2'
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
}
Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
