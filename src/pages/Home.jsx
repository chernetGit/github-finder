import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <>
    <UserSearch/>
      <UserResults />
      {/* <h1 className='text-6xl text-center'>Welcome</h1>
      {process.env.REACT_APP_GITHUB_TOKEN}
      {process.env.REACT_APP_URL} */}
    </>
  )
}

export default Home
