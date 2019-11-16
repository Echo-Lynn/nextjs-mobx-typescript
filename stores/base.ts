// 每个模块的store需继承本基类，来确保服务端首次渲染后的state能同步到客户端
export default class Base {
  [key: string]: any

  constructor(initState: { [key: string]: any } = {}) {
    for (const k in initState) {
      if (initState.hasOwnProperty(k)) {
        this[k] = initState[k]
      }
    }
  }
}
