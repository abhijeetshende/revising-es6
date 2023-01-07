var outer = document.querySelector('.outer')
var inner = document.querySelector('.inner')



 function innerCb (Event){
    console.log('inner clickec');
    Event.stopPropagation();

}
 function outerCb(){
    console.log('outer clicked');
}

/// adding event listerner
inner.addEventListener('click',innerCb)
outer.addEventListener('click',outerCb)


setTimeout(() => {
    // remove listerner
    inner.removeEventListener('click', innerCb)

}, 3000);