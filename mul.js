const runMul = ()=>{
  const Arr = [];
  for(let i = 0; i < 25 ; i++){
    const a = Math.round(Math.random() * 100);
    const b = Math.round(Math.random() * 100);
    const s = a * b;
    Arr.push([a,b,s,'*']);
  }

  insert(Arr)
}


