import React from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'

export default function Posts() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>
            posts page
        </h1>

        <button onClick={()=>navigate('add')}>add</button>
        <Link to='show/1'>post 1</Link>
        <Link to='show/2'>post 2</Link>
        <Link to='show/3'>post 3</Link>
        <Outlet />
    </div>
  )
}
