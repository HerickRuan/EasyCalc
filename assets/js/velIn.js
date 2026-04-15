function calc(){
    let vel = Number(document.getElementById('inVel').value);
    let size = Number(document.getElementById('inSize').value);
    let uniSize = document.getElementById('selUniSize').value;
    let uniVel = document.getElementById('selUniVel').value;
    let resHtml = document.getElementById('res');

    let res = 0, time = 0, min = 0, resp;

    resHtml.innerHTML = '';
    resHtml.style.display = 'none';
    
    if(vel == 0 || size == 0){
        resHtml.innerHTML = 'Todos os campos devem ser preenchidos.';
        resHtml.style.display = 'Block';

        return;
    }else if(uniVel == 'MB/s' && uniSize == 'Gb'){
        res = (size * 1024) / vel;

    }else if(uniVel == 'Mb/s' && uniSize == 'Gb'){
        res = (size * 1024) / (vel / 8);

    }else if(uniVel == 'MB/s' && uniSize == 'Mb'){
        res = size / vel;

    }else if(uniVel == 'Mb/s' && uniSize == 'Mb'){
        res = size / (vel / 8);

    } else{
        resHtml.innerHTML = 'ué';
        resHtml.style.display = 'Block';
        return;
    }

    if (res >= 3600){
        time = (res / 3600).toFixed(0);
        min = (res % 3600) / 60;
        resp = 'O download vai terminar em ' + time + 'h' + ' ' + min + 'min'

    } else if (res >= 60){
        time = (res / 60).toFixed(0);
        resp = 'O download vai terminar em ' + time + ' min'

    } else{
        time = res;
        resp = 'O download vai terminar em ' + time + ' segundos.'
    }

    resHtml.innerHTML = resp;
    resHtml.style.display = 'Block';
    
    console.log(res)
    
}