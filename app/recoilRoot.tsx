"use client"

import { Suspense } from "react"
import { RecoilRoot } from "recoil"

export function Recoilroot({children}:{children:React.ReactNode}){
    return(
        <RecoilRoot>
            <Suspense fallback={<div>Loading....</div>}>
                {children}
            </Suspense>
        </RecoilRoot>
    )
}