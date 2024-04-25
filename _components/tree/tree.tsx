"use client"
import { useSetRecoilState } from "recoil"
import "./tree.css"
import { refresher } from "@/State/atom"
import { PowerSquare, RefreshCcw } from "lucide-react";
export function Tree(){
    const setRefresh=useSetRecoilState(refresher);
    return(
        <>
        <div className="">
        
        <div  style={{borderRadius:"50%",width:"100px",height:"100px", backgroundColor:"green", position:"absolute", right:"20px", bottom:"480px"}}>
        </div>
        <div  style={{borderRadius:"50%",width:"80px",height:"80px", backgroundColor:"green", position:"absolute", right:"190px", bottom:"410px",zIndex:"1"}}>
        </div>
        <div className=" absolute bottom-[480px] right-[220px]">
            <div className="beak w-[10px] h-[10px] bg-black relative right-[4px] top-[25px]"></div>
            <div className="eye w-[5px] h-[5px] bg-white rounded-[50%] relative top-[18px] left-[5px] z-[1]"></div>
            <div className="eye w-[3px] h-[3px] bg-black rounded-[50%] relative top-[14px] left-[6px] z-[2]"></div>
            <div className="head w-[20px] h-[20px] bg-black rounded-[50%] relative top-1"></div>
            <div className="torso w-[30px] h-[20px] bg-black rounded-[50%]"></div>
        </div>
        <div style={{borderRadius:"50%",width:"200px",height:"200px", backgroundColor:"green",position:"absolute", bottom:"320px", right:"10px"}}></div>
        <div className=" w-[80px] h-[200px] bg-yellow-950 absolute bottom-[30px] right-[70px] ">
           
           <button className=" bg-slate-100 rounded-[50%] w-[40px] h-[40px] relative top-[55px] left-[22px] flex justify-center items-center " onClick={()=>{
            setRefresh(true);
           }}>
            <RefreshCcw size={30}/>
           </button>
         </div>
        <div style={{borderRadius:"50%",width:"200px",height:"200px", backgroundColor:"green",position:"absolute", bottom:"200px", right:"10px", }}></div>
        
        
        </div>
        
        
        
        </>
        
    )
}