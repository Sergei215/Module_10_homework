let arrNew=[1,1,1,1]
let per=true;

for (let i=0;i<arrNew.length;i++){
    for (let j=0;j<arrNew.length;j++){
        if (arrNew[i] == arrNew[j]){
            per = true
        }
        else {
            per = false
            break
        }
    }
}