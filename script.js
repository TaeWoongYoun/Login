// 이벤트 버블링은 항상 일어난다 기억하자

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

document.querySelector('.black-bg').addEventListener('click', function(e){

    // function에 e 넣으면 사용 가능
    //e.target; //유저가 실제로 누른거
    //e.currentTarget; //이벤트리스너 달린 곳
    //e.preventDefault(); //이벤트 기본동작 막아줌
    //e.stopImmediatePropagation();


    if(e.target == document.querySelector('.black-bg')){
        document.querySelector('.black-bg').classList.remove('showModal');
    }
})