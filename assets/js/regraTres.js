
function calc(){
    let i1 = Number(document.getElementById('i1').value)
    let i2 = Number(document.getElementById('i2').value)
    let i4 = Number(document.getElementById('i4').value)
    let resHtml = document.getElementById('res')

    resHtml.innerHTML = '';
    resHtml.style.display = 'none'

    if(i1 == 0 || i2 == 0 || i4 == 0){
        resHtml.innerHTML = 'Todos os campos devem ser preenchidos.';
        resHtml.style.display = 'Block'

        console.log("Erro")
    } else{
        let res = (i1 * i4) / i2;

        resHtml.innerHTML = res.toFixed(2);
        resHtml.style.display = 'Block'
        console.log(res);
    }
    
    console.log(i1, typeof i1)
    
}