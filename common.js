const toggle = ()=>{
  const ctx = document.getElementById('context');
  ctx.classList.toggle('visiable')
}

const insert = (Arr)=>{
  const ctx = document.getElementById('context');
  const ul = document.createElement('ul');
  Arr.forEach(([a, b, s, o])=>{
    const li = document.createElement('li');
    li.innerHTML = `${a} ${o} ${b} = <span>${s}</span>`;
    ul.appendChild(li);
  })
  ctx.innerHTML = '';
  ctx.classList.remove('visiable')
  ctx.appendChild(ul);
}