
$('#login').on('click', function(){
    $('.black-bg').addClass('showModal');
});

$('#close').on('click', function(){
    $('.black-bg').removeClass('showModal');
});

$('#send').on('click', function(e){
    if (document.getElementById('email').value == ''){
        alert('아이디를 입력해주세요.');
        e.preventDefault();
    } else if (document.getElementById('password').value == ''){
        alert('비밀번호를 입력해주세요.');
        e.preventDefault();
    } else if(document.getElementById('password').value.length < 6){
        alert('비밀번호를 6자 이상 입력해주세요');
        e.preventDefault();
    }
});

document.querySelector('.black-bg').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.remove('showModal');
})