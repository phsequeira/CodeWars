function isIsogram(str){
    let anwser = str.toLowerCase();
    return !anwser.match(/([a-z]).*\1/i);
  }