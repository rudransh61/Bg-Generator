
c1 = document.getElementById('c1');
c2 = document.getElementById('c2');
body = document.getElementsByTagName('body');

const ChangeBg=()=>{
    body[0].style.background = 'linear-gradient(to right, ' + c1.value + ' , ' + c2.value +')';
    console.log('c1 = '+c1.value+'c2 = '+c2.value)
}

c2.addEventListener("input", ChangeBg());
c2.addEventListener("input", ChangeBg);

c1.addEventListener("input", ChangeBg);
c1.addEventListener("input", ChangeBg());

