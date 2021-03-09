const runDiv = ()=>{
  const Arr = [];
  for(let i = 0; i < 25 ; i++){
    const a = Math.round(Math.random() * 100);
    const b = Math.round(Math.random() * 100);
    const s = Number(a / b).toFixed(2);
    Arr.push([a,b,s,'/']);
  }

  insert(Arr)
}


