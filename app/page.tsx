import LinePlot from "./components/plot";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>start</h1>
      <LinePlot data={[0,20,40,80,100]}/>
    </main>
  )
}
