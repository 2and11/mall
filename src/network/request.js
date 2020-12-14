import axios from 'axios'	

export function request(config) {
		// 1.创建axios的实例
		const instance = axios.create({
			baseURL: 'http://123.207.32.32:8000',
			timeout: 5000
		});

		// 配置请求和响应拦截
		instance.interceptors.request.use(config => {
			return config
		}, err => {
			return err
		})

		instance.interceptors.response.use(res => {
			return res.data
		}, err => {
			console.log(err);
			})

    return instance(config)
}

