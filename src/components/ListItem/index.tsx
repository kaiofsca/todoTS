
import * as C from "./styles"
import {Item} from '../../types/Item'

type Props = {
    item: Item
    onChange: (id: number, done: boolean) => void
    onClick: (id: number) => void
}

export const ListItem = ({item, onChange, onClick}: Props) => {

  return (
    <C.Container done={item.done}>
        <input 
            type="checkbox" 
            checked={item.done} 
            onChange={e => onChange(item.id, e.target.checked)}
        />
        <label>{item.name} - {item.done.toString()}</label>
        <button
          onClick={e => onClick(item.id)}
        > ❌ </button>
    </C.Container>
  )
}
