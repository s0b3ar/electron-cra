import React from 'react'
import { Link } from 'react-router-dom'

export default function SecondPage() {
  return (
    <div>
      <h1>Second Page</h1>
      <Link to="/">Back</Link>
    </div>
  )
}