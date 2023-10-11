"use client"

import { Header } from 'src/app/components/Header'
import { Main } from 'src/app/components/Main'

export default function Home() {
  return (
    <>
      <title>Test page</title>
      <Header />
      <Main root="test" page="test"/>
    </>
  )
}
