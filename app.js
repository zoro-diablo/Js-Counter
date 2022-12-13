// Set the initial count
let count=0;

//select values and buttons
let value=document.querySelector('#value');
let btns=document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles=e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count=0;
        }
        value.textContent=count;
        if(count>0){
            value.style.color='green';
        }else if(count<0){
            value.style.color='red'
        }else{
            value.style.color='orange'
        }
    });
});
