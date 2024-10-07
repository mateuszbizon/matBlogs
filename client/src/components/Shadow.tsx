"use client"

import React from 'react'

type ShadowProps = {
    shadowOpen: boolean;
    closeShadow?: () => void
}

function Shadow({ shadowOpen, closeShadow }: ShadowProps) {
  return (
    <div className={`fixed inset-0 z-20 bg-black/30 ${shadowOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-300`} onClick={closeShadow}></div>
  )
}

export default Shadow