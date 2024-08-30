import { type PlasmoCSConfig } from "plasmo"
import { useEffect } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { addCss } from "~utils/tools"

export const config: PlasmoCSConfig = {
  matches: ["https://*.blog.csdn.net/*"]
}

export default function csdn() {
  const [closeAds] = useStorage<boolean>("csdn-closeAds")
  const [copyCode] = useStorage<boolean>("csdn-copyCode")
  const [closeFollow] = useStorage<boolean>("csdn-closeFollow")
  const [closeLoginModal] = useStorage<boolean>("csdn-closeLoginModal")
  const [closeRightToolBar] = useStorage<boolean>("csdn-closeRightToolBar")
  const [closeBottomToolBar] = useStorage<boolean>("csdn-closeBottomToolBar")

  useEffect(() => {
    closeAds && closeAdsFunc()
    copyCode && copyCodeFunc()
    closeFollow && closeFollowFunc()
    closeLoginModal && closeLoginModalFunc()
    closeRightToolBar && closeRightToolBarFunc()
    closeBottomToolBar && closeBottomToolBarFunc()
  }, [
    closeAds,
    copyCode,
    closeFollow,
    closeLoginModal,
    closeRightToolBar,
    closeBottomToolBar
  ])

  function closeAdsFunc() {
    const cssText = `
      #asideWriteGuide,
      .remuneration-box,
      #remuneration,
      #footerRightAds,
      #TR-4ac9702b-be84-11ee-a301-b7516d250593,
      .programmer1Box,
      #recommendAdBox,
      #dmp_ad_58 {
        display: none !important;
      }
    `
    addCss(cssText)
  }

  function copyCodeFunc() {}

  function closeFollowFunc() {
    const readMore = document.querySelector(".btn-readmore")
    if (readMore) {
      const css = `
        #article_content{
          height: auto !important;
        }
        .hide-article-box {
          z-index: -1 !important;
        }`
      addCss(css)
    }
  }

  function closeLoginModalFunc() {
    const cssText = `
      .passport-login-container,
      .passport-login-tip-container {
        display: none !important;
      }
    `
    addCss(cssText)
  }

  function closeRightToolBarFunc() {
    const cssText = `
      .csdn-side-toolbar  {
        display: none !important;
      }
    `
    addCss(cssText)
  }

  function closeBottomToolBarFunc() {
    const cssText = `
      .more-toolbox-new .left-toolbox {
        position: relative !important;
        left: unset !important;
      }
    `
    addCss(cssText)
  }
}
