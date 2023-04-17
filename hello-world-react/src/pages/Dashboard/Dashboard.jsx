import React from 'react'
import { useParams } from 'react-router-dom'

const Dashboard = () => {

  const id = useParams();

  // need to do some sort of authentication here
  // currently you can just go to /dashboard/anystring and you'll get a page
  // this allows sytematic searching of all ids WITHOUT a password

  // solution: TODO: trasmit id and password in props, if they dont match then display errorpage

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard