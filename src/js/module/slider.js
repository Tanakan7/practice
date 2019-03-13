export default class Slider {
  /**
   * スクロール形式のスライダーにボタンイベントを設定する
   *
   * @param {Object} classObj 必須設定のクラスオブジェクト
   * classObj.slider スライダー全体を含むクラス
   * classObj.scroll スクロールする要素のクラス
   * classObj.prev 戻るボタンのクラス
   * classObj.next 進むボタンのクラス
   * classObj.item スライドさせたい要素のクラス
   * classObj.hidden ボタン非活性条件を満たす際に指定するクラス
   * classObj.animated スライドアニメーション中に指定するクラス
   * maxDisplayNum 任意 全体を表示できるitem最大数 デフォルト3
   * slideNum 任意 ボタン押下でスライドするitem数 デフォルト3
   * duration 任意 アニメーション実行時間 デフォルト1000(ms)
   *
   */
  constructor ({ classObj, maxDisplayNum = 3, slideNum = 3, duration = 1000, }) {
    this.slider = classObj.slider
    this.scroll = classObj.scroll
    this.prev = classObj.prev
    this.next = classObj.next
    this.item = classObj.item
    this.hidden = classObj.hidden
    this.animated = classObj.animated

    this.maxDisplayNum = maxDisplayNum
    this.slideNum = slideNum
    this.duration = duration
  }

  init () {
    this.initButton()
    this.attachEvent()
  }

  /**
   * 初期表示時のprev,nextボタン活性・非活性
   *
   */
  initButton () {
    Array.from(document.getElementsByClassName(this.slider)).forEach((el) => {
      const len = el.getElementsByClassName(this.item).length

      el.getElementsByClassName(this.prev)[0].classList.add(this.hidden)
      if (len <= this.maxDisplayNum) {
        el.getElementsByClassName(this.next)[0].classList.add(this.hidden)
      }
    })
  }

  /**
   * イベント
   *
   */
  attachEvent () {
    /*
     * X方向の自動スムーススクロール
     * イージングはeaseOutQuad(jQueryEasingPluginの計算式)固定
     * @param el 必須 スクロールさせたい要素
     * @param targetPos 必須 目的地のX座標(elから相対指定)
     * @param dir 必須 移動方向 1:右 -1:左
     */
    const smoothScrollX = (el, targetPos, dir) => {
      const startTime = Date.now()
      const scrollFrom = el.scrollLeft
      const range = Math.abs(scrollFrom - targetPos)
      const duration = this.duration
      const easeOutQuad = (t, b, c, d, e) => (-c * (t /= d) * (t - 2) * e) + b // eslint-disable-line
      const move = () => {
        const elm = el // 退避？
        const currentTime = Date.now() - startTime
        if (currentTime < duration) {
          elm.scrollLeft = easeOutQuad(currentTime, scrollFrom, range, duration, dir)
          window.requestAnimationFrame(move)
        } else {
          elm.scrollLeft = targetPos
          elm.classList.remove(this.animated)
        }
      }

      // 多重起動防止
      if (el.classList.contains(this.animated)) {
        return
      }
      el.classList.add(this.animated)
      window.requestAnimationFrame(move)
    }

    Array.from(document.getElementsByClassName(this.slider)).forEach((el) => {
      // 戻る
      el.getElementsByClassName(this.prev)[0].addEventListener('click', (ev) => {
        // 該当ボタン以外のイベント伝搬は止める
        ev.stopPropagation()

        const scroll = ev.currentTarget.parentElement.getElementsByClassName(this.scroll)[0]
        const scrollLeft = scroll.scrollLeft
        const items = scroll.getElementsByClassName(this.item)
        const pos = []
        let current = 0
        let target = 0

        Array.from(items).forEach((elm, i) => {
          pos[i] = elm.offsetLeft
          current = Math.abs(scrollLeft) < Math.abs(elm.offsetLeft) ? current : i
        })
        target = (current - this.slideNum) >= 0 ? (current - this.slideNum) : 0
        smoothScrollX(scroll, pos[target], -1)
      }, false)

      // 進む
      el.getElementsByClassName(this.next)[0].addEventListener('click', (ev) => {
        // 該当ボタン以外のイベント伝搬は止める
        ev.stopPropagation()

        const scroll = ev.currentTarget.parentElement.getElementsByClassName(this.scroll)[0]
        const scrollLeft = scroll.scrollLeft
        const scrollEnd = scroll.scrollWidth - scroll.clientWidth
        const items = scroll.getElementsByClassName(this.item)
        const pos = []
        let current = 0
        let target = 0
        let targetWidth = 0

        Array.from(items).forEach((elm, i) => { // elm:each item
          pos[i] = elm.offsetLeft
          current = (Math.abs(scrollLeft) < Math.abs(elm.offsetLeft)) ? current : i
        })
        target = (current + this.slideNum) < items.length ? (current + this.slideNum) : items.length - 1
        targetWidth = pos[target] <= scrollEnd ? pos[target] : scrollEnd
        console.log(targetWidth)

        smoothScrollX(scroll, targetWidth, 1)
      }, false)

      let ticking = false
      const dispButton = (ev) => {
        const scrollLeft = ev.currentTarget.scrollLeft
        const width = ev.currentTarget.scrollWidth - ev.currentTarget.clientWidth
        const slider = ev.currentTarget.closest(`.${this.slider}`)
        const prev = slider.getElementsByClassName(this.prev)[0]
        const next = slider.getElementsByClassName(this.next)[0]
        if (!ticking) {
          requestAnimationFrame(() => {
            ticking = false
            if (scrollLeft === 0) {
              prev.classList.add(this.hidden)
              next.classList.remove(this.hidden)
            } else if (scrollLeft === width) {
              prev.classList.remove(this.hidden)
              next.classList.add(this.hidden)
            } else {
              prev.classList.remove(this.hidden)
              next.classList.remove(this.hidden)
            }
          })
          ticking = true
        }
      }

      el.getElementsByClassName(this.scroll)[0].addEventListener('scroll', dispButton, { passive: true, })
    }) // 各スライダー Array.from(document.getElementsByClassName(this.slider)).forEach((el) =>
  } // attachEvent()
}
