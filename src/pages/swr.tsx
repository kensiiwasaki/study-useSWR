import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <>
      <ChildrenA />
      <ChildrenB />
    </>
  )
}

const ChildrenA = () => {
  return <div className="bg-blue-500">ChildrenA</div>
}

const ChildrenB = () => {
  return <div className="bg-red-500">ChildrenB</div>
}

export default Page
