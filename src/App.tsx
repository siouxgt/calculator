import MenuItem from "./components/MenuItem"
import OrdenTotal from "./components/OrdenTotal"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {

  const {order,addItem, removeItem} = useOrder()

  return (
    <>
    <header className=" bg-blue-400 py-5">
        <h1 className="text-center text-2xl font-black">Calculadoras de propinas y consumo</h1>
    
    </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
         
     <div>
      <h2 className="text-4xl font-black">Menú</h2>
        <div className="space-y-3 mt-7">

      {menuItems.map(item => (
        <MenuItem
        key={item.id}
        item={item}
        addItem={addItem}
        />
      ))}

      </div>

     </div>
     
    

      <div className="border border-dashed border-slate-800 p-5 rounded-lg space-y-10">
      <OrderContents
        order={order}
        removeItem={removeItem}
      />

      <OrdenTotal
        order={order}
      />
    </div>

    </main>

    </>
  )
}

export default App
