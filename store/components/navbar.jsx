import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className="navbar bg-accent">
    <div className="md:flex-1">
    <p className="btn btn-ghost normal-case text-primary font-bold text-2xl">STORE</p>
    </div>
    <div className="flex-none gap-2">
    <div className="form-control">
    <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-square">
    <div className="w-10">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </div>
    </label>
    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary-content rounded-box w-52">
    <li>
    <Link href="#" className="justify-between">
    About
    </Link>
    </li>
    <li><Link href="#">Catalog</Link></li>
    <li><Link href="#">Something..</Link></li>
    </ul>
    </div>
    </div>
    </div>
    </>
  )
}
