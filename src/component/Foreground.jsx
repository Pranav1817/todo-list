import {useRef} from 'react';
import Card from "./Card"

function Foreground() {

  const ref = useRef(null);
  // desc, fileSize, CloseOrDownload, tagDetails
  const data = [
    {
      desc: "This is the background color of the card that will be displayed",
      fileSize: ".9mb",
      closed: true,
      tag:{
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      },
    },
    {
      desc: "This is the background color of the card that will be displayed",
      fileSize: ".9mb",
      closed: true,
      tag:{
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue"
      },
    },
    {
      desc: "This is the background color of the card that will be displayed",
      fileSize: ".9mb",
      closed: true,
      tag:{
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      },
    },
  ];
  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap flex-shrink-0 p-5">
        {data.map((item,index)=>{
          return (
            <Card data={item} key={index} reference={ref}/>
          )
        })}
    </div>
  )
}

export default Foreground