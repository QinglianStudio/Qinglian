/**
 * 扁平化所有复杂数据结构
 */
export const flatNestData = (obj: any,result = []) => {
    for (const key in obj) {
        if(typeof obj[key] === 'object') {
            if(Array.isArray(obj[key])) {
                obj[key].forEach(i => {
                    typeof i === 'object' ? flatNestData(i,result) : result.push([key,i])
                })
            }else{
                flatNestData(obj[key],result)
            }
        }else{
            result.push([key,obj[key]])
        }
    }
}