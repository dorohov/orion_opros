var currentDisplay = 1;

setWindow(1, 0, 0);

// 1 Button
// 2 Field

var thisQues = {
    quest1: null,
    quest2: null,
    quest3: null,
    quest4: null,
    quest5: null,
    quest6: null,
    quest7: null
}

function setWindow(number, mode, window) {

    var _this = this
    

    if(mode == 1) {

        var thisGroup = $('.display' + window).find('.btn-group')
        var thisQuest = thisGroup.find('button.is--active').data('val')

        if(window == 1) thisQues.quest1 = thisQuest
        if(window == 2) thisQues.quest2 = thisQuest
        if(window == 3) thisQues.quest3 = thisQuest
        if(window == 4) thisQues.quest4 = thisQuest
        if(window == 5) thisQues.quest5 = thisQuest
        if(window == 6) thisQues.quest6 = thisQuest
        if(window == 7) thisQues.quest7 = thisQuest

    }

    if(mode == 2) {
        var thisQuest =  $('.display' + window).find('.display__field input').val()

        if(window == 6) thisQues.quest6 = thisQuest
        if(window == 7) thisQues.quest7 = thisQuest
    }

    if(thisQuest || window == 0) {
        $('.display').hide();
        $('#display' + number).show();

        var finalResults = [
            {
                "title": "Оцените сервис нашей типографии по 5-ти бальной шкале",
                "results": [
                    
                ]
            }
        ]
    }

    console.log(thisQues)
}

$('button').on('click', function() {
    var thisGroup = $(this).parent('.btn-group')
    $(thisGroup).children('button').removeClass('is--active')
    $(this).addClass('is--active')
})