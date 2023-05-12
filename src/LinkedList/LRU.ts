class LRU<T>{
  cache:Map<string,T>=new Map()
  capcity:number;
  constructor(capcity:number){
    this.capcity=capcity
  }
  get(key:string){
    // 如果没有就返回null,如果有就返回值,并且将值放到最后
    if(!this.cache.has(key))return null
    const val=this.cache.get(key)!
    this.cache.delete(key)
    this.cache.set(key,val)
    return val
  }
  append(key:string,val:T){
    // 如果有就删除,如果没有就判断是否超过容量,如果超过就删除第一个,如果没有就直接添加
    if(this.cache.has(key)){
      this.cache.delete(key)
    }else{
      if(this.cache.size>=this.capcity){
        const firstKey=this.cache.keys().next().value 
        this.cache.delete(firstKey)
      }
    }
    this.cache.set(key,val)
  }
}

export default LRU;