
function calc(){
    const i1 = document.querySelector('#i1')
    const i2 = document.querySelector('#i2')
    const i3 = document.querySelector('#i3')
    const i4 = document.querySelector('#i4')
    const resHtml = document.querySelector('#res')

    let res = (i1.value * i4.value) / i2.value;

    resHtml.innerHTML = res.toFixed(2);
    resHtml.style.display = 'Block'
    console.log(res);
}