function update(vnode) {
  // vnode: 新
  // this._vnode: 旧
  var oldVnode = this._vnode;
  this._vnode = vnode;
  // 对比的目的：更新真实dom

  if (!oldVnode) {
    this.__patch__(this.$el, vnode);
  }
}

/**
 * 什么叫「相同」是指两个虚拟节点的标签类型、`key`值均相同，但`input`元素还要看`type`属性
 *
 * <h1>asdfdf</h1>        <h1>asdfasfdf</h1>
 *
 * <h1 key="1">adsfasdf</h1>   <h1 key="2">fdgdf</h1>
 *
 * <input type="text" />    <input type="radio" />
 *
 * abc        bcd
 *
 * {
 *  tag: undefined,
 *  key: undefined,
 *  text: "abc"
 * }
 *
 * {
 *  tag: undefined,
 *  key: undefined,
 *  text: "bcd"
 * }
 *
 *
 */
