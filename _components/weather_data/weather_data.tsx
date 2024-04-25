 "use client"

import {  useEffect, useState,useMemo } from "react";
import { WeatherBoard } from "./weatherBoard";
import { useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { dayNite, refresher } from "@/State/atom";
import { Sun, Moon, Milestone } from "lucide-react";
import { Tree } from "../tree/tree";
import { Sunny } from "../weather_chooser/weather_icons/sunny";

import "./weather.css"

 export function Weather(){
    const setSun=useSetRecoilState(dayNite);
    const [weather_data,setWeather_data]=useState({
        
        min:0,
        max:0,
        feelsLike:0,
        temp:0,
        dateTime:{
            hour:0,minutes:0,ap:"",date:0,month:0
        },
        desc:["",""],
    });
    const [refresh,setRefresh]=useRecoilState(refresher);
    
    useEffect(()=>{
        console.log(refresh,"once more")
        if(refresh){
            console.log(refresh)
            if("geolocation" in navigator){
                console.log("herer")
                navigator.geolocation.getCurrentPosition((position)=>{
                    fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lon=${position.coords.longitude}&lat=${position.coords.latitude}`).then(res=> res.json()).then(data=>{
                    const date=new Date();
                    const dateNow=date.getHours();
                        setWeather_data({
                            
                            min:data.main.temp_min,
                            max:data.main.temp_min,
                            feelsLike:data.main.feels_like,
                            temp:data.main.temp,
                            dateTime:{
                                hour:(dateNow<=12 && dateNow>0)?dateNow:(dateNow==0)?12:dateNow-12,
                                minutes:date.getMinutes(),
                                date:date.getDate(),
                                month:date.getMonth(),
                                ap:dateNow>=12?"pm":"am",
                            },
                            // image:data.weather[0].icon
                            desc:[data.weather[0].main,data.weather[0].description]
                        });
                        setSun([{sunrise:data.sys.sunrise,sunset:data.sys.sunset}]);
                    });
                    
                });
                setRefresh(false);
                
                
            }
        }
    },[refresh]);
    
    return<>
        <WeatherBoard props={{
            temp:weather_data.temp,
            max:weather_data.max,
            min:weather_data.min,
            feelsLike:weather_data.feelsLike,
            dateTime:{hour:weather_data.dateTime.hour,
                        minutes:weather_data.dateTime.minutes,
                        ap:weather_data.dateTime.ap,
                        month:weather_data.dateTime.month,
                        date:weather_data.dateTime.date
                    },
            desc:weather_data.desc,
                }
            
            } />
    </> 
    
 }

 export function Main(){
    const sunUpdate=useRecoilValue(dayNite);
    console.log(sunUpdate);
    const bg=useMemo(()=>{
     return [{"day":["day","text-black"],
                "night":["night","text-slate-300"]
    }]},[]);
    const bgSet=DayNite({time:sunUpdate,sun:DaySun,moon:NightMoon}).type.render.displayName==="Moon"?bg[0].night:bg[0].day;
    console.log(DayNite({time:sunUpdate,sun:DaySun,moon:NightMoon}).type.render.displayName);
    return(
        <div className={`w-screen h-screen bg-gradient-to-t ${bgSet[0]} grid grid-rows-10` }>
        <div className="row-span-9 grid grid-cols-4 ">
          <div className="col-span-3 ">
            <div className="flex justify-start row-span-1 ">
              <div className=" col-span-1 w-[150px] h-[150px]">
              <Sunny/>
              </div>
              <h1 className={`text-bold text-6xl text-center self-center col-span-2 ${bgSet[1]}`}>uick Weather App</h1>
            </div>
            
            <Weather/>
            <Milestone size={240} strokeWidth={3} fill="rgb(113 63 18)"  absoluteStrokeWidth={true} className="absolute bottom-[10px] right-[250px]" />
            <div className="absolute bottom-[135px] right-[320px] text-bold  text-gray-50 text-[30px] ">Refresh</div>
            
          </div>
          <DayNite time={sunUpdate} sun={DaySun} moon={NightMoon} />
          {/* <div className=" col-span-1" > */}
              <Tree/>
            {/* </div> */}
        </div>
        
        
        
        <div className=" w-full bg-gradient-to-l from-yellow-900 to-amber-800 row-span-1 z-[1]"></div>
      </div>
    )
 }

 function DayNite({time,sun,moon}:{time:{"sunrise":number,"sunset":number}[],
    sun:()=>JSX.Element,moon:()=>JSX.Element}){
        const sunriseUnix=time[0]?.sunrise *1000;
        const sunsetUnix=time[0]?.sunset*1000;
        const sunriseDate=new Date(sunriseUnix);
        const sunsetDate=new Date(sunsetUnix);
        const sunrise=[sunriseDate.getHours(),sunriseDate.getMinutes()];
        const sunset=[sunsetDate.getHours(),sunsetDate.getMinutes()];
        const date=new Date();
        const sunny=sun();
        const moony=moon()
        if(date.getHours()>=sunrise[0] && date.getMinutes()>=sunrise[1] && date.getHours()<sunset[0] && date.getMinutes()<sunset[1]){
            return sunny;
        }
        return moony;
}
 
function DaySun(){
    return <Sun size={200} strokeWidth={1} fill="rgb(220, 100, 12)" color="rgb(220, 100, 12)" className="relative top-[20px] right-[130px]"/>
}

function NightMoon(){
    return <Moon size={200} strokeWidth={1} fill="rgb(203 213 225)" color="rgb(203 213 225)" className="relative top-[20px] right-[130px]"/>
}

 
