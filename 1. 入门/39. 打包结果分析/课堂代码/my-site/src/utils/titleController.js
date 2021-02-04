// 网站标题控制

var routeTitle = "",
  siteTitle = "";

function setTitle() {
  if (!routeTitle && !siteTitle) {
    document.title = "loading...";
  } else if (routeTitle && !siteTitle) {
    document.title = routeTitle;
  } else if (!routeTitle && siteTitle) {
    document.title = siteTitle;
  } else {
    document.title = `${routeTitle}-${siteTitle}`;
  }
}

export default {
  // 设置路由标题
  setRouteTitle(title) {
    routeTitle = title;
    setTitle();
  },
  // 设置网站标题
  setSiteTitle(title) {
    siteTitle = title;
    setTitle();
  },
};
