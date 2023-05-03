import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const GITHUB_URL = process.env.REACT_APP_URL
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    const data = await response.json()
    setUsers(data)
    setLoading(false)
    //console.log(data)
  }
  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 bg-slate-600'>
        {users.map((user) => (
          <UserItem key={user.id} user={user}/>
          // <h3>{user.login}</h3>
        ))}
      </div>
    )
  } else {
    return <Spinner/>
  }
}
export default UserResults
