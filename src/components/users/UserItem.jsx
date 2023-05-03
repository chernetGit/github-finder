import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='profile' className='rounded-full' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
          <Link
            className='text-base-content opacity-50 hover:opacity-100 hover:text-blue-300 hover:text-[17px] hover:underline'
            to={`/users/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
