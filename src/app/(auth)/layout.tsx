import React from 'react'

const layout = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
  return (
    <div className="h-dvh flex justify-center items-center">{children}</div>
  )
}

export default layout