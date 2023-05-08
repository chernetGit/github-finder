import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import PropTypes from 'prop-types'

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo
  return (
    <div className='mb-2 rounded-md bg-gray-800 hover:bg-gray-900'>
      <div className=''>
        <h3 className='mb-2 text-xl font-semibold p-4'>
          <a href={html_url}>
            <FaLink className='inline mr-1' />
            {name}
          </a>
        </h3>
        <p className='mb-3 ml-6'>{description}</p>
        <div className='flex flex-row'>
          <div className='ml-6 flex text-blue-400 bg-slate-600 rounded-lg p-[2px] items-center w-[50px] mb-1'>
            <FaEye className='mr-2' />
            {watchers_count}
          </div>
          <div className='ml-6 flex text-green-300 bg-slate-600 rounded-lg p-[2px] items-center w-[50px] mb-1'>
            <FaStar className='mr-2' />
            {stargazers_count}
          </div>
          <div className='ml-6 flex text-red-400 bg-slate-600 rounded-lg p-[2px] items-center w-[50px] mb-1'>
            <FaInfo className='mr-2' />
            {open_issues}
          </div>
          <div className='ml-6 flex text-yellow-400 bg-slate-600 rounded-lg p-[2px] items-center w-[50px] mb-1'>
            <FaUtensils className='mr-2' />
            {forks}
          </div>
        </div>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}
export default RepoItem
