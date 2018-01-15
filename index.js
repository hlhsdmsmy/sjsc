window.addEventListener('load',function () {
    let user = document.querySelector('.text'),
        pass = document.querySelector('.password'),
        submit =document.querySelector('.submit');
submit.addEventListener('touchstart',function () {
    console.log(1)
    if(user.value.trim() == 'admin' && pass.value.trim () == '123456'){
        location.href = 'index.html';
    }else{
        alert('输入账号信息有误')
    }
})
})
