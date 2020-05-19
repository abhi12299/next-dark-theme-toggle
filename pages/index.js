import React from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

const changeTheme = () => {
  let newTheme
  if (document.body.classList.contains('dark')) {
    // toggle to light theme
    document.body.classList.replace('dark', 'light')
    newTheme = 'light'
  } else {
    // toggle to dark theme
    document.body.classList.replace('light', 'dark')
    newTheme = 'dark'
  }
  // set a cookie for ssr purposes
  Cookies.set('theme', newTheme)
}

export default function Home() {
  return (
    <div className='container'>
      <div onClick={changeTheme}>
        Toggle Theme
      </div>
      <div>
        <Link href='/a'>
          <a>Click here to go to second page!</a>
        </Link>
      </div>
    </div>
  )
}
