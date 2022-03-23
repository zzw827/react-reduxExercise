function getUrlParam(name:string){
      console.log('运行了这个方法？');

      // http://localhost:3000/?id=111#/login
      // window.location.search : ?id=111
      
      // 第一步把问号去掉
    const query = window.location.search.substring(1);
      
    // 把每个参数分组
    const paramArr= query.split('&')
    for (let i = 0; i < paramArr.length; i++) {
      const pair = paramArr[i].split('=');
      if(pair[0]===name){
        return pair[1]
      }
    }
    return false;
}

export default {
    getUrlParam,
}