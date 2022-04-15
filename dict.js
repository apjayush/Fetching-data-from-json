console.log('This is dictionary API model');


let wordBtn = document.getElementById('wordBtn')

wordBtn.addEventListener('click', searchWord)

function searchWord(e){
    let wordTxt = document.getElementById('wordTxt').value;
    
    const xhr =  new XMLHttpRequest();

    xhr.open('GET', 'dict.json', true);

    // xhr.onprogress = function(){
    //     console.log('work on progress')
    // }

    xhr.onload = function(){
        if(this.status === 200){
            let obj = JSON.parse(this.responseText)
            // console.log(obj.length)
            let str='';
            let meaning = document.getElementById('meaning')
            for(let i=0; i<obj.length; i++){
                if(wordTxt.includes(obj[i].word)){
                    for(let j=0; j<obj[i].definitions.length;j++){
                        str += `<li>${obj[i].definitions[j].definition}</li>`;
                    }
                    meaning.innerHTML = str;
                }
                else{
                    continue;
                }

            }
        }
        else{
            console.log('error in getting json data')
        }
    }
    
    xhr.send();

    e.preventDefault();
}
