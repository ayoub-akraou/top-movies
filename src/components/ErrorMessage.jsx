import React from 'react'

export default function response({error}) {
  return (
    <p className='text-center py-20'>😢 {error} </p>
  )
}
