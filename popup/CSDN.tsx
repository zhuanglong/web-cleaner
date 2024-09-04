import React from "react"

import { useStorage } from "@plasmohq/storage/hook"

import Item from "./components/Item"

export default function CSDN() {
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
    <div className="list">
      <h3>CSDN</h3>
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
    </div>
  )
}
