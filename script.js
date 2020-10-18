$('#submit_start_menu').on('click', function(){
    let name = $('.input_windowregist_name').val();
    let password = $('.input_windowregist_password').val();
    if(name.length < 4 && password.length < 6){
        $('.input_windowregist_name').val('');
        $('.input_windowregist_name').attr('placeholder', 'Введите имя длинее');
        $('.input_windowregist_password').val('');
        $('.input_windowregist_password').attr('placeholder', 'Введите пароль длинее');
    } else if(name.length < 4){
        $('.input_windowregist_name').val('');
        $('.input_windowregist_name').attr('placeholder', 'Введите имя длинее');
    } else if(password.length < 6){
        $('.input_windowregist_password').val('');
        $('.input_windowregist_password').attr('placeholder', 'Введите пароль длинее');
    } else {
        $('.window_information').addClass('mainNone');
        $('.window_done').removeClass('mainNone');
        $('.window_are_you_ready').removeClass('mainNone');
        $('.name_window_name').text(name);
    }
});

$('.a_text__are_you_ready').on('click', function(){
    $('.prl_load').addClass('mainNone');
    $('.main_window').removeClass('mainNone');
})