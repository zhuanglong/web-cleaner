import React from "react"

import styles from "./Item.module.scss"

interface ItemProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const Item: React.FC<ItemProps> = ({ label, checked, onChange }) => {
  return (
    <label className={styles.item}>
      {label}
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  )
}

export default Item
