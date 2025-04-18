const body = document.body
const nlayar = document.querySelector('.layar')
const btn = document.querySelector('.btn')
const in1 = document.querySelector('#in1').value

function n(angka) {
  const nlayar = document.querySelector('.layar')
  document.querySelector('#in1').value += angka
  
  const in1 = document.querySelector('#in1').value
  nlayar.innerHTML = in1
}

function del(symbol) {
  const inputField = document.querySelector('#in1');
  inputField.value = inputField.value.slice(0, -1); // hapus karakter terakhir

  const nlayar = document.querySelector('.layar');
  nlayar.innerHTML = inputField.value; // update layar
}

 function hitung(symbolh) {
   const nlayar = document.querySelector('.layar')
   const grid = document.querySelector('.grid')
   const grid2 = document.querySelector('.grid2')
  document.querySelector('#in2').value += symbolh
  
  const in2 = document.querySelector('#in2').value
  nlayar.innerHTML = in2
  grid.style.display = ('none')
  grid2.style.display = ('grid')
 }
 
 function n2(angka) {
  const nlayar = document.querySelector('.layar')
  document.querySelector('#in3').value += angka
  
  const in3 = document.querySelector('#in3').value
  nlayar.innerHTML = in3
}

function del2(symbol) {
  const inputField = document.querySelector('#in3');
  inputField.value = inputField.value.slice(0, -1); // hapus karakter terakhir

  const nlayar = document.querySelector('.layar');
  nlayar.innerHTML = inputField.value; // update layar
}


function sd() {
  const inp1 = document.querySelector('#in1').value
  const hitung = document.querySelector('#in2').value
  const inp3 = document.querySelector('#in3').value
  const nlayar = document.querySelector('.layar')
  
  if (hitung == '+') {
    let jumlah = Number(inp1) + Number(inp3)
    console.log(jumlah)
    document.querySelector('#hasil').value= jumlah
    
    const hasil = document.querySelector('#hasil').value
    nlayar.innerHTML = hasil
  }
  else if (hitung == 'x') {
    let jumlah = Number(inp1) * Number(inp3)
    console.log(jumlah)
    document.querySelector('#hasil').value= jumlah
    
    const hasil = document.querySelector('#hasil').value
    nlayar.innerHTML = hasil
  }
  else if (hitung == '÷') {
    let jumlah = Number(inp1) / Number(inp3)
    console.log(jumlah)
    document.querySelector('#hasil').value= jumlah
    
    const hasil = document.querySelector('#hasil').value
    nlayar.innerHTML = hasil
  }
  else if (hitung == '-') {
    let jumlah = Number(inp1) - Number(inp3)
    console.log(jumlah)
    document.querySelector('#hasil').value= jumlah
    
    const hasil = document.querySelector('#hasil').value
    nlayar.innerHTML = hasil
  }
  document.getElementById('back').style.display = ('inline-block')
}