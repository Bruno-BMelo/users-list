import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import User from "../interfaces/user"


export function UsersList() {
  const navigate = useNavigate();
  const stateList : string[] = []
  const [users, setUsers] = useState<User[]>([])
  const [sortedUsers, setSortedUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setUsers(data.users)
      })

  }, [])

  users.length > 0 
    ? users.map((user: User) => {
      const newState = user.address.state
      if (!stateList.includes(newState)) {
        stateList.push(newState)
      }
    })
    : ['']

  function getUsersFromState(event: string) {
    const usersFromState = users.filter(user => user.address.state == event)

    usersFromState.sort((x, y) => {
      const a = `${x.firstName.toUpperCase()} ${x.lastName.toUpperCase()}`
      const b = `${y.firstName.toUpperCase()} ${y.lastName.toUpperCase()}`
      return a == b ? 0 : a > b ? 1 : -1
    });

    setSortedUsers(usersFromState)
  }

  function goToUserProfile(userId: number) {
    navigate(`/${userId}`)
  }

    return (
      <div className="h-screen flex items-center justify-center text-center bg-zinc-800">
        <div className="h-full flex flex-col gap-4">
          <div className="mt-8 mb-6">
            <span className="text-8xl text-zinc-200">
              Users List
            </span>
          </div>
          <div>
            
            <select className="text-2xl pr-2" 
                    name="states"
                    onChange={event => getUsersFromState(event.target.value)}>

              <option selected>Choose a state</option>
                        
              {stateList.map((state, index) => (
                <option value={state} key={index}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="text-left flex flex-col">
              {sortedUsers && (
                sortedUsers.map(user => {
                  return (
                      <span onClick={() => goToUserProfile(user.id)} key={user.id} className="cursor-pointer text-2xl text-zinc-50 mb-2"> - {user.firstName} {user.lastName}</span>
                  )
                })
              )}
          </div>
        </div>
      </div>
    )
}