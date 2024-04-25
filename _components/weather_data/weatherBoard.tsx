"use client"

import { useCallback, useMemo, useState } from "react";
import { IconChoose } from "../weather_chooser/weather_chooser";

export function WeatherBoard({props}:{props:{temp:number,min:number,max:number,feelsLike:number,dateTime:{hour:number,minutes:number,date:number,month:number,ap:string},desc:string[]}}){

    const [click,setClick]=useState("");
    const [degree,setDegree]=useState({
        celTemp:props.temp,
        fahTemp:props.temp*9/5+32,
        celFeels:props.feelsLike,
        fahFeels:props.feelsLike*9/5+32
    });
    
    const months=useMemo(()=>{
        return ["January","February","March","April","May","June","July","August","September","October","November","December"];
    },[]);

    useMemo(()=>{
        setDegree({
            celTemp:props.temp,
            fahTemp:props.temp*9/5+32,
            celFeels:props.feelsLike,
            fahFeels:props.feelsLike*9/5+32
        })
        return;
    },[props.temp]);

    

    return(
        <div className="w-[700px] h-[350px] ">
            <div className=" h-full relative top-[20%] left-10 bg-white z-[1]  rounded-lg bg-gradient-to-t from-stone-800 to-slate-400 ">
                <div className="h-full  grid grid-rows-6 gap-2">
                        <div className="grid grid-cols-2 min-max row-span-1 p-1 gap-2">
                            <div className="col-span-1 flex flex-row justify-center items-center">
                                
                                <div className="rounded-lg bg-slate-50 h-full shadow-md w-full p-1">
                                    <div className=" rounded-lg h-full w-full flex shadow-[] items-center justify-center text-[20px] text-gray-500 font-semibold" >Feels like {(click==="Fahrenheit"?degree.fahFeels:degree.celFeels).toFixed(1)}
                                    <div className="flex justify-center items-center">&#176;</div>
                                        <div className=" flex items-center justify-center">{click==="Celsius"?"C":(click==="")?"C":"F"}</div></div>
                                </div>
                               
                            </div>
                            <div className="col-span-1 rounded-lg bg-slate-50 shadow-md flex justify-center items-center h-[50px] p-2">
                                <label htmlFor="box" className="flex justify-center items center gap-2 text-gray-500 text text-[25px] font-semibold" >
                                <input id="box" type="checkbox" value={click} onChange={()=>{
                                        click==="Fahrenheit"?(setClick("Celsius")):(setClick("Fahrenheit"));
                                }}  />
                                Fahrenheit
                                </label>
                                
                            </div>
                            
                            
                        </div>
                        <div className="row-span-4 grid grid-cols-2 items-center">
                            <div className="col-span-1 flex flex-row justify-center items-center gap-2 h-[200px]">
                                    <div className="rounded-lg bg-slate-50 w-[210px] h-full shadow-md">
                                        <div className=" rounded-lg h-full w-full flex items-center justify-center text-[55px] text-gray-500">{(click==="Fahrenheit"?degree.fahTemp:degree.celTemp).toFixed(1)}</div>
                                    </div>
                                    
                                    <div className="rounded-lg bg-slate-50 w-[100px] h-full shadow-md">
                                        <div className=" rounded-lg h-full w-full flex shadow-[] items-center justify-center text-[60px] text-gray-500"><div className="w-[40px]flex justify-center items-center">&#176;</div>
                                        <div className="w-[60px] flex items-center justify-center">{click==="Celsius"?"C":(click==="")?"C":"F"}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex justify-center items-center rounded-lg m-2 shadow-md bg-slate-50 p-2 h-[200px]">
                                    <IconChoose icon={props.desc[0]}/>
                                    {/* <img src={`${props.image}`} className="w-[50%] h-[50%]"/> */}
                            </div>
                        </div>
                        <div className=" grid grid-cols-2 row-span-1 px-4 gap-2 ">
                            <div className="col-span-1 bg-slate-50 text-gray-500 text-[20px] font-semibold flex items-center justify-center rounded-lg shadow-md h-[40px]">
                                {props.dateTime.date} {months[props.dateTime.month]}, {(props.dateTime.hour<10 && props.dateTime.hour>0)?"0"+props.dateTime.hour:props.dateTime.hour}:{(props.dateTime.minutes<10 && props.dateTime.minutes>=0)?"0"+props.dateTime.minutes:props.dateTime.minutes} {props.dateTime.ap}
                            </div>        
                            <div className="col-span-1 bg-slate-50 text-gray-500 text-[20px] font-semibold text flex items-center justify-center rounded-lg shadow-md h-[40px]">
                                {props.desc[1]}
                            </div>
                        </div>
                </div>

            </div>
            <div className="w-[15px] h-[440px] bg-slate-500 relative bottom-[275px] left-[10%]"></div>
            <div className="w-[15px] h-[440px] bg-slate-500 relative bottom-[715px] left-[700px]"></div>
        </div>
    )
}

