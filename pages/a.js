import React from 'react'
import Router from 'next/router'

export default function A() {
  return (
    <div className='container'>
      This is another page
      <a onClick={Router.back}>Click here to go Back!</a>
    </div>
  )
}
