import Link from 'next/link'
import React from 'react'
import ProductSearch from './productSearch'
import GroupList from './group/groupList'
import { getGroup } from '@/app/store/group'

export default async function Navbar() {
  const resG = await getGroup()
  const groups = resG? resG.data: []
  return (
    <>
    <div className="navbar bg-primary shadow-lg">
    <div className="md:flex-1">
    <Link href={'/'}>
    <p className="btn btn-ghost normal-case text-primary-content font-bold text-2xl">Store</p>
    </Link>
    </div>
    <div className="flex-none md:gap-2">
    <ProductSearch/>
    <div className="hidden md:dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-secondary btn-square">
    <div className="w-10 text-primary-content">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </div>
    </label>
    <div tabIndex={0} className="w-[900px] dropdown-content">
    <div className='mt-3 p-2 shadow menu menu-compact bg-secondary text-secondary-content rounded-box'>
      <GroupList
        groups={groups}
      />
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
