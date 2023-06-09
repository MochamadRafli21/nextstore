import React from 'react'
import GroupDelete from '../group/GroupDelete'
import Link from 'next/link'
export default function GroupTable({groups}) {
  return (
    <>
    <div className="mt-2 overflow-x-auto w-full">
    <table className="table table-fixed text-base-content w-full">
    <thead className='bg-accent'>
    <tr>
    <th>Group</th>
    <th>Kategori</th>
    <th></th>
    </tr>
    </thead>
    <tbody className='w-full'>

    {groups ? 
      groups.map((group)=> 
        <tr>
          <td>
            <Link href={`/admin/group/${group.id}`}>
              {group.name}
            </Link>
          </td>
          <td>
            {group.category?<ul>
              {group.category.splice(0,2).map((category)=><li className='mx-1 badge'>{category.name}</li>)}
              {group.category.length > 1 ? <li className='badge'>And {group.category.length} More..</li>:<></>}
              </ul>:"group blm memiliki kategori"}
          </td>
          <td className='text-error'>
            <div>
              <GroupDelete id={group.id}/>
            </div>
          </td>
        </tr>
      )
        :
    <div className='w-full flex justify-center items-center p-2'>
      <h1>Group Kosong</h1>
    </div>
    }
    </tbody>
    </table>
    </div>
    </>
  )
}


