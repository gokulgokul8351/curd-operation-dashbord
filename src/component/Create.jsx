import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/userSlice'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.user)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.length === 0) {
      alert('Enter the value')
    }
    if (name.length && email.length !== '') {
      dispatch(addUser({ id: user[user.length - 1].id + 1, name, email }))
      alert(`${name} New User Added Successfully! `)
      setName('')
      setEmail('')
      setTimeout(() => {
        navigate('/')
      }, 1000)
    }
  }

  return (
    <div className="flex w-full h-screen justify-center items-center ">
      <div className=" w-50 border bg-green-500 rounded text-white p-5 ">
        <h3 className=" text-[3rem] pb-8 flex items-center justify-center ">
          Add New User
        </h3>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-2 mb-2 justify-center items-center">
            <label
              className=" text-xl "
              htmlFor="name"
            >
              Name
            </label>
            <input
              value={name}
              type="text"
              name="name"
              placeholder="name"
              className=" form-control "
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
              value={email}
              type="email"
              name="email"
              placeholder="your@gmail.com"
              className=" form-control "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className=" btn bg-pink-600 text-white hover:border-[2px] hover:border-pink-600 "
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

export default Create
