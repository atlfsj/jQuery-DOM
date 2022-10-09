window.$ = window.jQuery = function(selectorOrArray){    //接受一个选择器or数组
    let elements
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray)    //根据选择器返回一个元素
        //api这个对象可以操作elements这个元素
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray
    }
    return /* constreturn api= */ {        
        //闭包：函数访问外部的变量               //key:value
        addClass(className){                   //"addClass":function(){console.log(elements)}
            for(let i=0; i<elements.length; i++){
                const element = elements[i]
                element[i].classList.add(className)
            }
            return this      //链式操作（this 就是 api）
        },
            
        find(selector){
            let array = []      //数组不能用document.querySelectorAll()
            for(let i = 0; i < elements.length; i++){
                const elements2 = Array.from ( elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldApi = this // this 就是旧 api ；为了加end操作，让api回到class为test

            return jQuery(array) //此时只是放到了数组身上，而不是api身上，所以需要再复制到api身上
            /*const newApi = jQuery(array)  给我一个数组，我返回一个新api
            return newApi 
            一个新的api对象，用来操作array；如果用同一个就会相互污染
            */
        },
        
        end(){
            return this.oldApi  // this 就是新 api
        },

        oldApi: selectorOrArray.oldApi,   //获取数组的api

/***************************************************************/
        each(fn){
            for(let i=0; i<elements.length; i++){
                fn.call(null, elements[i], i)
            }
            return this
        },
        parent(){
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.parentNode) === -1){
                    array.push(node.parentNode)
                }    
            })
            return jQuery(array)
        },
        children(){
            const array = []
            this.each((node)=>{
                array.push(...node.children)    //展开操作符             
            })
            return jQuery(array)
        },
        print(){
            console.log(elements)
        },
    }
    /* return api */

}

