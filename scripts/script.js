let click = document.querySelector('.cliker_hacker');   
let moneyBit = document.querySelector('.money_window_name');  
let window_info = document.querySelector('.window_information');
let window_done = document.querySelector('.window_done'); 
let submitmenu = document.getElementById('submit_start_menu');
let name_start = document.querySelector('.input_windowregist_name');
let password_start = document.querySelector('.input_windowregist_password');
let statistics = ['', '', 0];

let clickbutton = function () { // Добавляет деньги при нажатие на кнопку 'клик'
    statistics[2]++;
    console.log(statistics[2]);
    moneyBit.innerHTML = statistics[2];
    console.log(statistics);
};

let game = function () { // Основная функция для выполнения всех функция +

    clickbutton();
};


let startgame = function(){
    if(statistics[0].length > 3 && statistics[1].length > 3){
        let prl_load = document.querySelector('.prl_load');
        let main_window = document.querySelector('.main_window');
        main_window.style.display = 'block';
        prl_load.style.display = 'none';
        changeNP();
    }
}

let checkInput = function(){ // Проверка на ввод имя и пароля и скрытия меню регистрации
    statistics[0] = name_start.value;
    statistics[1]  = password_start.value;
    if(statistics[0].length < 4){
        console.log(statistics[0]);
        name_start.value = '';
        name_start.placeholder = 'Введите имя по длинее';
    }

    if(statistics[1].length < 6){
        password_start.value = '';
        password_start.placeholder = 'Введите пароль по длинее';
    } else{
        console.error(statistics[0]);
        window_done.style.display = 'block';
        window_info.style.display = 'none';
    }
    
}

let changeNP = function(){ // Добавляет имя на экране игры
    let name_in = document.querySelector('.name_window_name');
    name_in.innerHTML = statistics[0];
}