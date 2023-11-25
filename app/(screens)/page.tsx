import LinePlot from "../components/plot";
import Header from "../components/header";

import Banner from "./banner/page";



export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>start</h1>
      <Banner Nav={Header} />
      <LinePlot data={[0.1,0.20,.040]}/>
    </main>
  )
}
