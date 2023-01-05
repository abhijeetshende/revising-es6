function printToScreen(str){
    let bodyel = document.getElementsByTagName('body');
    let para = document.createElement('p')
    para.innerText =str;
    bodyel[0].append(para)
}

// printToScreen();