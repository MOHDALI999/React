import { useState } from "react"


function App() {

  const [count,setCount]= useState(0);

  function Incrementfunction(){
      setCount(count + 5);
  }

  function Decrementfunction(){
    setCount(prevCount => prevCount > 0 ? prevCount - 5 : 0);
}

  function Reset(){
        setCount(0)
  }

  return (
    <>
        <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center text-5xl bg-amber-600">
              <h1 className=" mb-20"><span className="text-amber-200">Simple Counter</span> Project</h1>
              <div>
                    <h1 className="text-4xl mb-20">Increment by "5" : {count}</h1>
              </div>
              <div className="flex gap-3">
                <button 
                className="p-5 text-3xl border-2 border-amber-200"
                onClick={Incrementfunction}
                >Increment
                </button>

                <button 
                className="p-5 text-3xl border-2 border-amber-200"
                onClick={Decrementfunction}
                >Decrement
                </button>

                <button 
                className="p-5 text-3xl border-2 border-amber-200"
                onClick={Reset}
                >Reset
                </button>
              </div>
        </div>
    </>
  )
}

export default App
