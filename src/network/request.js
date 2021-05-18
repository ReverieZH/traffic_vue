import axios from 'axios'


//方式四

export function request(config){
    const  instance= axios.create({
      baseURL:'http://localhost:8081',
      // timeout:10000
    })
    //2.axios的拦截器
    instance.interceptors.request.use(config=>{
        console.log(config)
      //1.比如config中的一些信息不符合服务器要求

      //2.比如每次发送网络请求时，都希望在界面显示一个请求的图标

      //3.某些网络请求(比如登录(token)）,必须携带一些特殊的信息
        return config
    },err=>{
        console.log(err)
    })

  instance.interceptors.response.use(res=>{
    console.log(res);
    return res.data
  },err=>{
    console.log(err);
  })
    return instance(config)
}
//方式三
/*export function request(config){
  return new Promise((resolve, reject) => {
    const  instance= axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })

    instance(config)
      .then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
    })
  })
}*/


//方式一
/*export function request(config,success,failure){
    const  instance= axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })

  instance(config)
    .then(res=>{
        success(res)
    }).catch(err=>{
        failure(err)
    })
}*/


//方式二
/*
export function request(config){
  const  instance= axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  instance(config.baseConfig)
    .then(res=>{
      config.success(res)
    }).catch(err=>{
    config.failure(err)
  })
}*/
