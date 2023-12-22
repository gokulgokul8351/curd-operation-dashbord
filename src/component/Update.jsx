import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../store/userSlice'

const Update = () => {
  const { id } = useParams()
  const users = useSelector((state) => state.user)
  const exitingUser = users.filter((f) => f.id == id)
  const { name, email } = exitingUser[0]
  const [uname, setName] = useState(name)
  const [uEmail, setEmail] = useState(email)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uEmail,
      })
    )
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-800">
      <div className=" w-50 border  bg-violet-800  rounded text-white p-5 ">
        <h3 className=" text-[3rem] pb-8 flex items-center justify-center ">
          Update User
        </h3>
        <form onSubmit={handleUpdate}>
          <div className=" flex flex-col gap-2 mb-2 justify-center items-center">
            <label
              className=" text-xl "
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className=" form-control "
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className=" flex flex-col gap-2 mb-4 items-center justify-center ">
            <label
              className=" text-xl "
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className=" form-control "
              value={uEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="py-2 px-6 rounded bg-pink-600 hover:bg-transparent hover:border-[2px] hover:border-pink-600 hover:text-black "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update
