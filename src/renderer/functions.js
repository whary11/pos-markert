

let f = {
    shortText(text){
        return  (text.length >25)?text.slice(0, 25).trim()+"..":text
    }
}



export default f;