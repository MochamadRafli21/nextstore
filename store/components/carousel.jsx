import React from 'react'

function Slide (props){
  const nextItemId = `#slide${props.currentId+2}`
  const beforeItemId = `#slide${props.currentId}`
  const currentItemId = `slide${props.currentId+1}` 
  const lastItem = `#slide${props.lastItem}`
  if(props.url){
    return (
      <>
      <div id={currentItemId} className="carousel-item justify-center relative w-full">
      <img src={props.url} className="object-cover w-full max-h-[480px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        {props.isBeforeItem ?
          <a href={beforeItemId} className="btn btn-circle">❮</a> 
          : <a href={lastItem} className="btn btn-circle">❮</a> 
        }
        {
          props.isNextItem ?
            <a href={nextItemId} className="btn btn-circle">❯</a>
            : <a href="#slide1" className="btn btn-circle">❯</a>
        }
        </div>
      </div>
      </>
    )

  }
}

export default function Carousel(props) {
  const listImage = props.banners
  return (
    <>
    <div className='carousel w-full md:m-2 md:rounded '>
    { listImage.length?
      listImage.map((item, index) => 
        <Slide 
        url={item.image}
        lastItem={listImage.length}
        currentId={index} 
        isNextItem={index+1 != listImage.length} 
        isBeforeItem={index != 0}
        />
      ): <h1> Banners is empty</h1>
    }
    </div>
    </>
  )
}

