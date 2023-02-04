import type { NextPage } from 'next'
import useSWR from 'swr'

const useSharedState = (key: string, fallbackData: any) => {
  const { data, mutate } = useSWR(key, { fallbackData })
  return [data, mutate]
}

const Page: NextPage = () => {
  return (
    <>
      <ChildrenA />
      <ChildrenB />
    </>
  )
}

const ChildrenA = () => {
  const [count] = useSharedState('foo', 0)
  return <div className="bg-blue-500">{count}</div>
}

const ChildrenB = () => {
  const [count, setCount] = useSharedState('foo', 0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div className="bg-red-500">
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment!</button>
    </div>
  )
}

export default Page
