import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

const Subscribe = () => {
  return (
    <section className="flex justify-center py-12 xl:py-20 px-4">
          <div className="rounded-lg bg-gray-100 p-16">
            <h3 className="text-3xl text-center font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-center mb-8">Receive exclusive content, events, and benefits before anyone else.</p>
            <Input type="text" placeholder="Name" className="mb-4"/>
            <Input type="email" placeholder="Email" className="mb-4" />
            <Button>I'm in</Button>
          </div>
      </section>
  )
}

export default Subscribe