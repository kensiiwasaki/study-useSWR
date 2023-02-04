import type { NextPage } from 'next'
// import { useState } from 'react'
import useSWR from 'swr'

// const useCounter = () => {
//   const [count, setCount] = useState(0)
//   const handleIncrement = () => {
//     return setCount(count + 1)
//   }
//   return { count, handleIncrement }
// }

const Page: NextPage = () => {
  return (
    <>
      <ChildrenA />
      <ChildrenB />
    </>
  )
}

const ChildrenA = () => {
  const { data, mutate } = useSWR('foo', {
    fallbackData: 0,
  })
  return <div className="bg-blue-500">{data}</div>
}

const ChildrenB = () => {
  const { data, mutate } = useSWR('foo', {
    fallbackData: 0,
  })

  const handleIncrement = () => {
    mutate(data + 1)
  }

  return (
    <div className="bg-red-500">
      <div>{data}</div>
      <button onClick={handleIncrement}>Increment!</button>
    </div>
  )
}

export default Page
