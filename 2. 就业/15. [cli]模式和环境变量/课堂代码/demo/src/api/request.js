export default function(url, ...args) {
  return fetch(`${process.env.VUE_APP_SERVERBASE}${url}`, ...args);
}
