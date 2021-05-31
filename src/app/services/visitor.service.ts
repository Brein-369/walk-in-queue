import { Injectable } from '@angular/core';
import { Cache } from '../cache'

@Injectable()

export class VisitorService {
  constructor() { }
  
  addVisitor(options: Cache) {
    console.log('param visitor di add service', options);
    const item = localStorage.getItem(options.key)
    // if data already available
		if (item) {
			const record = JSON.parse(item)
      record.value.push(options.data)
      localStorage.setItem(options.key, JSON.stringify(record))
      return record.value.length
    }
    // if data not available yet
		let record = {
			value: []
    }
    record.value.push(options.data)
    localStorage.setItem(options.key, JSON.stringify(record))
    return 1
	}

	getAllVisitors(key: string) {
		const item = localStorage.getItem(key)
		if (item !== null) {
			const record = JSON.parse(item)
			return record.value
		}
		return []
	}
}
