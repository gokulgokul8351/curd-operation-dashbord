//redux

import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../store/userSlice'

// router

import { Link } from 'react-router-dom'

const Home = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }))
  }

  return (
    <div className="container bg-gray-900 p-8 h-screen w-full flex justify-center items-center  ">
      <div className="container flex flex-col justify-center items-center ">
        <h1 className=" text-[3rem]  text-pink-600">User Details</h1>

        <div className="flex justify-center m-8 ">
          <Link
            to="/create"
            className=" px-8 py-2 bg-green-500 text-white   "
          >
            Add New User <span className=" text-[1rem] "> + </span>
          </Link>
        </div>

        <table className="table table-dark ">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className=" flex gap-8 ">
                  <Link
                    to={`/edit/${user.id}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
