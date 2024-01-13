import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
function Card(data){
  return (
    <>
        <motion.div 
        drag 
        dragConstraints={data.reference} 
        whileDrag={{scale: 1.1}} 
        dragElastic={0.2}
        dragTransition={{bounceStiffness: 100, bounceDamping: 30}}
        className="relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden">
            <FaRegFileAlt />
            <p className="text-sm leading-tight mt-5 font-semibold">{data.data.desc}</p>
            <div className="footer absolute bottom-0 w-full  left-0">
                <div className="flex items-center justify-between mb-3 py-3 px-8">
                      <h5>{data.data.fileSize}</h5>
                      <span className="w-7 h-7   bg-zinc-600 rounded-full flex items-center justify-center">
                        {data.data.closed ? <IoMdClose/> : <LuDownload size="0.8em" color="#fff"/>}
                      </span>
                </div>
                {
                  data.data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"} flex items-center justify-center`}>
                    <h3 className="text-sm font-semibold">{data.data.tag.tagTitle}</h3>
                  </div>
                  )
                }
               
            </div>
        </motion.div>
    </>
  )
}

export default Card