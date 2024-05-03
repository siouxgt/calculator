import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"






function App() {


  return (
    <>
    <header className=" bg-blue-400 py-5">
        <h1 className="text-center text-2xl font-black">Calculadoras de propinas y consumo</h1>
    
    </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
     

     
     <div>
      <h2>menu</h2>

      {menuItems.map(item => (
        <MenuItem
        key={item.id}
        item={item}
        />
      ))}


     </div>
     
     <div>
      <h2>Consumo</h2>
     </div>




    </main>

    </>
  )
}

export default App
