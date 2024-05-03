import type { MenuItems } from "../types"

type MenuItemProps = {
  item: MenuItems

}




export default function MenuItem({item} : MenuItemProps) {
  return (
    <div>
        <p>{item.id}</p>
        <p>{item.price}</p>
    </div>
  )
}


