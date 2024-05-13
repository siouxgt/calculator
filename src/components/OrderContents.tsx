import { formatCurrency } from "../helpers"
import { MenuItems, OrderItem } from "../types"

type OrderContentsProps = {
    order : OrderItem[],
    removeItem: (id: MenuItems['id']) => void
}


export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
      <h2 className='font-black text-2xl'>Consumo</h2>

      <div className="space-y-3 mt-4">      
        {order.map(item => (
                <div className="flex justify-between border-t border-gray-600 py-5 last-of-type:border-b items-center" 
                key={item.id}>

                  <div>

                    <p className="text-lg">
                        {item.name} - { formatCurrency (item.price)}
                    </p>
                    <p className="font-black">
                      Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                  <button
                    className="bg-red-600 h-8 w-8 rounded-full text-white" 
                    onClick={()=> removeItem(item.id)}

                  >
                        X
                        
                  </button>
                  


                </div>
            ))}
      </div>
    </div>
  )
}
