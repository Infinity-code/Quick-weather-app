import { Bird } from "lucide-react";
import { Snowy } from "./weather_icons/Snow";
import { Cloudy } from "./weather_icons/cloudy";
import { Rainy } from "./weather_icons/rainy";
import { SunShowers } from "./weather_icons/sunShowers";
import { Sunny } from "./weather_icons/sunny";
import { Lightning } from "./weather_icons/thunderStorm";

export function IconChoose({icon}:{icon:string}){
    const choose=iconSelector(icon);
    switch(choose){
        case("sunny"):{
            return <Sunny/>;
        }
        case("cloudy"):{
            return <Cloudy/>;
        }
        case("rainy"):{
            return <Rainy/>;
        }
        case("snowy"):{
            return <Snowy/>;
        }
        case("sunShower"):{
            return <SunShowers/>;
        }
        case("thunderStorm"):{
            return <Lightning/>;
        }
        default:{
            return <MrCrow/>;
        }
    }
}

function MrCrow(){
    return(
        <div className=" font-semibold text-gray-500 text-[30px] text-center  ">
            Mr.Crow is watching the weather board. Refresh!
        </div>
    )
}

function iconSelector(icon:string){
    switch(icon){
        case("Clear"):{
            return "sunny";
        }
        case("Clouds"):{
            return "cloudy";
        }
        case("Rain"):{
            return "rainy";
        }
        case("Snow"):{
            return "snowy";
        }
        case("Thunder"):{
            return "thunderStorm";
        }
        case(""):{
            return "Initial";
        }
        default:{
            return "sunShower";
        }
    }
}