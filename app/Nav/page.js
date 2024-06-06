import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

const page = () => {
  return (
<div className='Bar'>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <Link class="navbar-brand" href="/">Navbar</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" href="/Home">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/About">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/Projects">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
  )
}

export default page