import Link from 'next/link'
import React from 'react'
import ProductSearch from './productSearch'

export default function Navbar() {
  return (
    <>
    <div className="navbar bg-primary shadow-lg">
    <div className="md:flex-1">
    <Link href={'/'}>
    <p className="btn btn-ghost normal-case text-primary-content font-bold text-2xl">Store</p>
    </Link>
    </div>
    <div className="flex-none gap-2">
    <ProductSearch/>
    <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-secondary btn-square">
    <div className="w-10 text-primary-content">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </div>
    </label>
    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-secondary text-secondary-content rounded-box w-52">
    <li><Link href="/product">Catalog</Link></li>
    </ul>
    </div>
    </div>
    </div>
    </>
  )
}
