const runSum = ()=>{
  const Arr = [];
  for(let i = 0; i < 25 ; i++){
    const a = Math.round(Math.random() * 1000);
    const b = Math.round(Math.random() * 1000);
    const s = a + b;
    Arr.push([a,b,s,'+']);
  }

  insert(Arr)
}


