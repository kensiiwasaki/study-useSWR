import type { NextPage } from 'next'
import { useState } from 'react'
import useSWR from 'swr'

const useCounter = () => {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    return setCount(count + 1)
  }
  return { count, handleIncrement }
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Page: NextPage = () => {
  const { data } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)
  console.log(data)

  return (
    <>
      <ChildrenA />
      <ChildrenB />
    </>
  )
}

const ChildrenA = () => {
  const { count } = useCounter()
  return <div className="bg-blue-500">{count}</div>
}

const ChildrenB = () => {
  const { count, handleIncrement } = useCounter()

  return (
    <div className="bg-red-500">
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment!</button>
    </div>
  )
}

export default Page
