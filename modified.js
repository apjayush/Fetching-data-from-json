console.log("This is dictionary API model");

let wordBtn = document.getElementById("wordBtn");

wordBtn.addEventListener("click", searchWord);

function searchWord(e) {
  let wordTxt = document.getElementById("wordTxt").value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "dict.json", true);

  // xhr.onprogress = function(){
  //     console.log('work on progress')
  // }

  xhr.onload = function () {
      let str = '';
      let meaning = document.getElementById('meaning');
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      // console.log(obj.length)
      let arr = [];
      for(let i=0; i<obj.length;i++){
        arr.push(obj[i].word)
      }
      if(arr.includes(wordTxt)){
          let num = arr.indexOf(wordTxt)
          for(let j=0; j<obj[num].definitions.length; j++){
            str += `<li>${obj[num].definitions[j].definition}</li>`
          }
          meaning.innerHTML = str;
          
      }
      else{
          meaning.innerHTML = `OOPS!! word not found in database`
      }
    }
    else {
      console.log("error in getting json data");
    }
  };

  xhr.send();

  e.preventDefault();
}


// arr = ['ram', 'shyam', 'Mohan']

// console.log(arr.indexOf('ram'))