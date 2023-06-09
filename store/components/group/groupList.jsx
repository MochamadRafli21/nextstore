'use client'
import React,{useState} from 'react'
import Link from 'next/link'

export default function GroupList({groups}) {
  const [newList, setNewList] = useState([])
  const [focusGroup, setFocusGroup]= useState([])
  return (
    <div className='h-48 flex'>
      <div className='h-48 overflow-y-scroll w-fit'>
        <ul>
          {groups.map((group)=>
            <li 
            className='shadow hover:bg-gray-100 rounded w-[100px] mt-2 menu menu-compact text-secondary-content flex items-center justify-center font-semibold'
              onMouseOver={()=>{
                setNewList(group.category)
                setFocusGroup(group.name)
              }}>
              {group.name}
            </li>
          )
        }
        </ul>
      </div>
    <div className='divider-horizontal'></div>
      <div className='pl-9 '>
        <h1 className='text-secondary-content font-bold'>
          {focusGroup}
        </h1> 
        <div className='mt-2'>
    <ul>
    {newList.map((item)=>
      <li>
      <Link href={`/product/search/-/${item.name}`} 
      className='badge badge-secondary shadow'>
          {item.name}
        </Link>
      </li>
    )}
    </ul>
        </div>
      </div>
    </div>
  )
}

