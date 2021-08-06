class Observer{
	constructor(data) {
		this.defineProperty(data);
	}
	
	/**
	 * 给data对象添加get和set属性
	 * @property {object} data
	 */
	defineProperty(data) {
		if (!typeof data === 'object' || data === null || data === {}) {
			throw new Error('传入到Observer的data不是一个有效的对象');
			return;
		}
		
		Object.keys(data).forEach(key => {
			this.defineActive(data, key, data[key]);
			this.defineProperty(data[key]);
		})	
		
	}
	
	/* 给属性添加set和get */
	defineActive(data, key, value) {
	
		Object.defineProperty(data, key, {
			enumerable: true,
			configurable: false,
			get() {
				return value;
			},
			set(newV) {
				value = newV;
			}
		})
	}
}