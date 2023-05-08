import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import RepoList from '../components/repos/RepoList'
import {  getUserAndRepos } from '../context/github/GithubActions'

function User({ match }) {
  const { user, loading, repos,dispatch } = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    dispatch({type:'SET_LOADING'})
    const getUserData = async () =>{
      const userData = await getUserAndRepos(params.login)
      dispatch({type:'GET_USER_AND_REPOS',payload:userData})
    }
    getUserData()
    // getUser(params.login)
    // getUserRepos(params.login)
    // //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch,params.login])
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className=''>
            BACK TO SEARCH
          </Link>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-10 md:gap-8'>
          <div className='rounded-md  shadow-xl image-fu bg-slate-400'>
            <figure>
              <img src={avatar_url} alt='' className='rounded-[5px]' />
            </figure>
            <div className=' absolute justify-end left-[10%] top-[60%]'>
              <h1 className='mb-0 text-[20px] '>{name}</h1>
              <p>{login}</p>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-4xl font-bold flex'>
                {name}
                <div className='ml-2 mr-1 text-xl mt-2 text-green-500 bg-slate-500 h-[30px] w-[60px] rounded-lg px-1 '>
                  {type}
                </div>
                {hireable && (
                  <div className='mx-1 badge badge-info text-blue-400 bg-slate-500 rounded-lg px-1 text-xl h-[30px] w-[90px] mt-2'>
                    Hireable
                  </div>
                )}
              </h1>
              <p>{bio}</p>
              <div className='mt-4'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='rounded-md  bg-slate-900 p-2 font-semibold hover:text-slate-900 hover:bg-white'
                >
                  VISIT GITHUB PROFILE
                </a>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='w-full rounded-lg shadow-md bg-base-100'>
                {location && (
                  <div className=''>
                    <div className='text-md text-slate-400'>Location</div>
                    <div className='text-lg font-bold'>{location}</div>
                  </div>
                )}
              </div>
              <div className='w-full rounded-lg shadow-md bg-base-100'>
                {blog && (
                  <div className=''>
                    <div className='text-md text-slate-400'>Website</div>
                    <div className='text-lg font-bold'>
                      <a
                        href={`https://${blog}`}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {blog}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className='w-full rounded-lg shadow-md bg-base-100'>
                {twitter_username && (
                  <div className=''>
                    <div className='text-md text-slate-400'>Twitter</div>
                    <div className='text-lg font-bold'>
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='flex gap-2'>
          <div className='w-full p-5 mb-6 rounded-lg shadow-md bg-base-100 flex justify-between h-full '>
            <div className=''>
              <div className='pr-5 text-md text-slate-400'>Followers</div>
              <div className='pr-5 text-3xl md:text-4xl'>{followers}</div>
            </div>
            <div className=' flex justify-end'>
              <FaUsers className='text-3xl md:text-5xl text-pink-500' />
            </div>
          </div>

          <div className='w-full p-5 mb-6 rounded-lg shadow-md bg-base-100 flex justify-between h-full '>
            <div className=''>
              <div className='pr-5 text-md text-slate-400'>Followings</div>
              <div className='pr-5 text-3xl md:text-4xl'>{following}</div>
            </div>
            <div className=' flex justify-end'>
              <FaUserFriends className='text-3xl md:text-5xl text-pink-500' />
            </div>
          </div>
          <div className='w-full p-5 mb-6 rounded-lg shadow-md bg-base-100 flex justify-between h-full '>
            <div className=''>
              <div className='pr-5 text-md text-slate-400'>Public Repos</div>
              <div className='pr-5 text-3xl md:text-4xl'>{public_repos}</div>
            </div>
            <div className=' flex justify-end'>
              <FaCodepen className='text-3xl md:text-5xl text-pink-500' />
            </div>
          </div>
          <div className='w-full p-5 mb-6 rounded-lg shadow-md bg-base-100 flex justify-between h-full '>
            <div className=''>
              <div className='pr-5 text-md text-slate-400'>Public Gists</div>
              <div className='pr-5 text-3xl md:text-4xl'>{public_gists}</div>
            </div>
            <div className=' flex justify-end'>
              <FaStore className='text-3xl md:text-5xl text-pink-500' />
            </div>
          </div>
        </div>
      </div>
      <div className=' w-full  shadow-md p-20 bg-slate-600 '>
        <RepoList repos={repos} />
      </div>
    </>
  )
}

export default User
