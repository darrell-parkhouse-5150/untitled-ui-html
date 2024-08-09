import { getjQuery } from '../util/getJquery'

let uidEvent = 1

const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
}

const systemEvents = new Set([
    'click',
  'dblclick',
  'mouseup',
  'mousedown',
  'contextmenu',
  'mousewheel',
  'DOMMouseScroll',
  'mouseover',
  'mouseout',
  'mousemove',
  'selectstart',
  'selectend',
  'keydown',
  'keypress',
  'keyup',
  'orientationchange',
  'touchstart',
  'touchmove',
  'touchend',
  'touchcancel',
  'pointerdown',
  'pointermove',
  'pointerup',
  'pointerleave',
  'pointercancel',
  'gesturestart',
  'gesturechange',
  'gestureend',
  'focus',
  'blur',
  'change',
  'reset',
  'select',
  'submit',
  'focusin',
  'focusout',
  'load',
  'unload',
  'beforeunload',
  'resize',
  'move',
  'DOMContentLoaded',
  'readystatechange',
  'error',
  'abort',
  'scroll'
])

const hydrateObj = (obj, meta = {}) => {
    for (const [key, value] of Object.entries(meta)) {
        try{
            obj[key] = value
        } catch {
            Object.defineProperty(obj, key, {
                configurable: true,
                get: () => {
                    return value
                }
            })
        }
    }

    return obj
}
