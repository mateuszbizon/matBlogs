import React from 'react'
import styles from "@/styles/circleLoading.module.css"

function CircleLoading() {
  return (
    <div className='relative size-[80px] mx-auto'>
        <div className={`${styles.circleOuter} absolute inset-0 rounded-full border-2 border-primary border-t-transparent`}>
        </div>
        <div className={`${styles.circleInner} absolute inset-4 rounded-full border-2 border-secondary border-b-transparent`}></div>
    </div>
  )
}

export default CircleLoading