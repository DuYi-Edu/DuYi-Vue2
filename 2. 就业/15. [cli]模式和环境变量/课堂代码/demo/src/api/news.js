import request from './request';

export async function getNews() {
  /* 
    开发环境：http://www.test.com
    生产环境：http://www.duyiservice.com
  */
  // let baseUrl;
  // if (process.env.NODE_ENV === 'development') {
  //   baseUrl = 'http://www.test.com';
  // } else {
  //   baseUrl = 'http://www.duyiservice.com';
  // }
  // await fetch(baseUrl + '/api/news');
  // console.log('正在请求', process.env.VUE_APP_SERVERBASE);
  // console.log('VUE_APP_ABC', process.env.VUE_APP_ABC);
  // console.log('VUE_APP_BCD', process.env.VUE_APP_BCD);
  return await request('/api/news');
}
