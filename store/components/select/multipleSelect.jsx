'use client'
import React,{useState} from 'react'

export default function MultySelect({title,options,selectedOptions,isDisabled,setSelected}) {
  const [hideList,setHideList] = useState(true)
  const [search, setSearch]= useState('')
  const selectedName = selectedOptions.map((option)=>{
    return option.name.toLowerCase()
  })
  const [filteredOption, setFilteredOptions]= useState(options?options.filter((option)=>{
    if(!selectedName.includes(option.name.toLowerCase())){
      return option
    }
  }):[])

  const filterOption = (text)=>{
    setSearch(text)
    const filtered = options.filter((option)=>{
      if(option.name.toLowerCase().includes(text.toLowerCase()) && !selectedName.includes(option.name.toLowerCase())){
        return option
      }
    })
    setFilteredOptions(filtered)
  }

  const removeSelected = (id)=>{
    const cleared = selectedOptions.filter((option)=>{
      if(option.id != id){
        return option
      }
    })
    setSelected(cleared)
    const names =[...cleared.map((item)=>{
      return item.name.toLowerCase()
    })]
    setFilteredOptions(options.filter((option)=>{
      if(!names.includes(option.name.toLowerCase())){
          return option
        }
      }))
  }
  return (
    <>
    <div onClick={()=>{setHideList(true)}} className={`opacity-0 top-0 left-0 w-full h-full fixed ${hideList?'hidden':''}`}></div>
    <div className='h-12'>
    {title?
      <label className="label">
      <span className="label-text">{title}</span>
      </label>
      :
      <></>
    }
    <div className='w-full relative'>
    <div
    onMouseDown={()=>{setHideList(!hideList)}}
    className="bg-white h-fit select p-2 items-center select-bordered gap-2 flex flex-row flex-wrap form-control w-full">
    {selectedOptions?
      selectedOptions.map((selected)=>
        <div 
        onClick={()=>{
          setHideList(false)
          removeSelected(selected.id)
        }} 
        className='badge gap-2'>
        {selected.name} 
        <span  className='text-red-100'>x</span>
        </div>)
      :<></>
    }
    <input
    className='w-fit focus:outline-0 hover:outline-0 focus:bg-opacity-0'
    type='text'
    placeholder='Ketik kategori yang ingin ditambahkan...'
    value={search} 
    onChange={(e)=>{filterOption(e.target.value)}}
    disabled={isDisabled? true:false} 
    >
    </input>
    </div>
    <ul  className={`menu ease-in-out delay-75 bg-base-200 z-10 ${hideList? 'hidden' :'' }`}>
    {!selectedOptions?
      <li key={'0'} className='selected disabled'>Pilih opsi</li>
      :
      <></>
    }
    {filteredOption? 
        filteredOption.map((option)=>
          <li key={option.id} onClick={()=>{
            setSelected([...selectedOptions,option])
            setSearch('')
            const names =[...selectedOptions.map((item)=>{return item.name.toLowerCase()}), option.name.toLowerCase()]
            setFilteredOptions(options.filter((option)=>{
              if(!names.includes(option.name.toLowerCase())){
                return option
              }
            }))
          }} className='z-20 hover:bg-gray-200 px-4 py-2' value={option.id}>
          {option.name}
          </li>
        )
        :
        <></>
    }
    </ul>
    </div>
    </div>
    </>
  )
}
