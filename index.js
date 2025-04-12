 class HashMap{
    constructor(){
        this.loadFactor = 0.75
        this.capacity = 16
        this.buckets = [];
    }

     hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
     
        return hashCode;
      } 

      set(key,value){
        const index = this.hash(key)
        this.buckets[index] = this.buckets[index] || [];
       this.buckets[index].push([key, value]);
       
      }
     
      get(key){
        const index = this.hash(key);
        const bucket = this.buckets[index]

        if(!bucket) return null;

        for(let i = 0; i< bucket.length;i ++){
            if (bucket[i][0] == key){
                console.log(`value is ${bucket[i][1]}`)
                return bucket[i][1];
               
            }
        }
      }

      has(key){
        const index = this.hash(key);
        const bucket = this.buckets[index]

        if(!bucket) return null;
       
        let i =0
        while(i<bucket.length){
            if(bucket[i][0]== key){
                console.log('it does')
            }
            i++
        }console.log("it doesnt")}

        remove(key){
            const index = this.hash(key);
            const bucket= this.buckets[index]

            if(!bucket) return null;

            let i=0;
            while(i<bucket.length){
                if(bucket[i][0]== key){
                    bucket.splice(bucket[i],1)
                }
                i++
            }
            console.log(this.buckets)
        }
    
        
        length(){
            let size = 0
            let bucket = this.buckets;
 
            for(let i = 0; i<bucket.length;i++){
             if(bucket[i]){
               
                 for(let j=0; j< this.buckets[i].length;j++){
                     size++
                 }
             
            }
            
          }console.log(size)
      
}
clear(){
    this.buckets.splice(0)
    console.log(this.buckets);
}

}

module.exports = { HashMap };
