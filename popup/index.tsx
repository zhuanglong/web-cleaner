import React from "react"

import { useStorage } from "@plasmohq/storage/hook"

import "~common.scss"

import styles from "./index.module.scss"

interface ItemProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const Item: React.FC<ItemProps> = ({ label, checked, onChange }) => {
  return (
    <label className="item">
      {label}
      <input
        className="checkbox"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  )
}

function IndexPopup() {
  const [closeAds, setCloseAds] = useStorage("csdn-closeAds", (v) =>
    v === undefined ? true : v
  )
  const [copyCode, setCopyCode] = useStorage("csdn-copyCode", (v) =>
    v === undefined ? true : v
  )
  const [closeFollow, setCloseFollow] = useStorage("csdn-closeFollow", (v) =>
    v === undefined ? true : v
  )
  const [closeLoginModal, setCloseLoginModal] = useStorage(
    "csdn-closeLoginModal",
    (v) => (v === undefined ? true : v)
  )
  const [closeRightToolBar, setCloseRightToolBar] = useStorage(
    "csdn-closeRightToolBar",
    (v) => (v === undefined ? true : v)
  )
  const [closeBottomToolBar, setCloseBottomToolBar] = useStorage(
    "csdn-closeBottomToolBar",
    (v) => (v === undefined ? true : v)
  )

  return (
    <div className={styles.popup}>
      <h2>Web Cleaner</h2>
      <hr />
      <Item label="关闭广告" checked={closeAds} onChange={setCloseAds} />
      <Item label="复制代码" checked={copyCode} onChange={setCopyCode} />
      <Item label="阅读全文" checked={closeFollow} onChange={setCloseFollow} />
      <Item
        label="关闭登录弹窗"
        checked={closeLoginModal}
        onChange={setCloseLoginModal}
      />
      <Item
        label="关闭右侧工具栏"
        checked={closeRightToolBar}
        onChange={setCloseRightToolBar}
      />
      <Item
        label="关闭底部工具栏"
        checked={closeBottomToolBar}
        onChange={setCloseBottomToolBar}
      />
      <hr />
      <a href="https://github.com/zhuanglong/web-cleaner" target="_blank">
        使用文档
      </a>
    </div>
  )
}

export default IndexPopup
