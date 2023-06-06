'use client'
import React from 'react'

export default function SingleSelect({title,options,selectedOptions,isDisabled,setSelected}) {
  return (
    <>
    <div className="form-control w-full max-w-xs">
    {title?
      <label className="label">
      <span className="label-text">{title}</span>
      </label>
      :
      <></>
    }
    <select value={selectedOptions} onChange={(e)=>{setSelected(e.target.value)}} disabled={isDisabled? true:false} className="select select-bordered">
    {!selectedOptions?
      <option value={''} className='selected disabled'>Pilih opsi</option>
      :
      <></>
    }
    {options? 
      options.map((option)=>
        <option value={option.id}>
          {option.name}
        </option>
      )
      :
      <></>
    }
    </select>
    </div>
    </>
  )
}
