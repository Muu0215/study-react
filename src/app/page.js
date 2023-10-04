"use client"

import { Header } from '../../components/Header'
import { Main } from '../../components/Main'

export default function Home() {
  return (
    <div>
      <Header />

      <Main root="app" page="index"/>
    </div>
  )
}
