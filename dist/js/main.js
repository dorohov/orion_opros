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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY3VycmVudERpc3BsYXkgPSAxO1xyXG5cclxuc2V0V2luZG93KDEsIDAsIDApO1xyXG5cclxuLy8gMSBCdXR0b25cclxuLy8gMiBGaWVsZFxyXG5cclxudmFyIHRoaXNRdWVzID0ge1xyXG4gICAgcXVlc3QxOiBudWxsLFxyXG4gICAgcXVlc3QyOiBudWxsLFxyXG4gICAgcXVlc3QzOiBudWxsLFxyXG4gICAgcXVlc3Q0OiBudWxsLFxyXG4gICAgcXVlc3Q1OiBudWxsLFxyXG4gICAgcXVlc3Q2OiBudWxsLFxyXG4gICAgcXVlc3Q3OiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFdpbmRvdyhudW1iZXIsIG1vZGUsIHdpbmRvdykge1xyXG5cclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIFxyXG5cclxuICAgIGlmKG1vZGUgPT0gMSkge1xyXG5cclxuICAgICAgICB2YXIgdGhpc0dyb3VwID0gJCgnLmRpc3BsYXknICsgd2luZG93KS5maW5kKCcuYnRuLWdyb3VwJylcclxuICAgICAgICB2YXIgdGhpc1F1ZXN0ID0gdGhpc0dyb3VwLmZpbmQoJ2J1dHRvbi5pcy0tYWN0aXZlJykuZGF0YSgndmFsJylcclxuXHJcbiAgICAgICAgaWYod2luZG93ID09IDEpIHRoaXNRdWVzLnF1ZXN0MSA9IHRoaXNRdWVzdFxyXG4gICAgICAgIGlmKHdpbmRvdyA9PSAyKSB0aGlzUXVlcy5xdWVzdDIgPSB0aGlzUXVlc3RcclxuICAgICAgICBpZih3aW5kb3cgPT0gMykgdGhpc1F1ZXMucXVlc3QzID0gdGhpc1F1ZXN0XHJcbiAgICAgICAgaWYod2luZG93ID09IDQpIHRoaXNRdWVzLnF1ZXN0NCA9IHRoaXNRdWVzdFxyXG4gICAgICAgIGlmKHdpbmRvdyA9PSA1KSB0aGlzUXVlcy5xdWVzdDUgPSB0aGlzUXVlc3RcclxuICAgICAgICBpZih3aW5kb3cgPT0gNikgdGhpc1F1ZXMucXVlc3Q2ID0gdGhpc1F1ZXN0XHJcbiAgICAgICAgaWYod2luZG93ID09IDcpIHRoaXNRdWVzLnF1ZXN0NyA9IHRoaXNRdWVzdFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZihtb2RlID09IDIpIHtcclxuICAgICAgICB2YXIgdGhpc1F1ZXN0ID0gICQoJy5kaXNwbGF5JyArIHdpbmRvdykuZmluZCgnLmRpc3BsYXlfX2ZpZWxkIGlucHV0JykudmFsKClcclxuXHJcbiAgICAgICAgaWYod2luZG93ID09IDYpIHRoaXNRdWVzLnF1ZXN0NiA9IHRoaXNRdWVzdFxyXG4gICAgICAgIGlmKHdpbmRvdyA9PSA3KSB0aGlzUXVlcy5xdWVzdDcgPSB0aGlzUXVlc3RcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzUXVlc3QgfHwgd2luZG93ID09IDApIHtcclxuICAgICAgICAkKCcuZGlzcGxheScpLmhpZGUoKTtcclxuICAgICAgICAkKCcjZGlzcGxheScgKyBudW1iZXIpLnNob3coKTtcclxuXHJcbiAgICAgICAgdmFyIGZpbmFsUmVzdWx0cyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCe0YbQtdC90LjRgtC1INGB0LXRgNCy0LjRgSDQvdCw0YjQtdC5INGC0LjQv9C+0LPRgNCw0YTQuNC4INC/0L4gNS3RgtC4INCx0LDQu9GM0L3QvtC5INGI0LrQsNC70LVcIixcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpc1F1ZXMpXHJcbn1cclxuXHJcbiQoJ2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRoaXNHcm91cCA9ICQodGhpcykucGFyZW50KCcuYnRuLWdyb3VwJylcclxuICAgICQodGhpc0dyb3VwKS5jaGlsZHJlbignYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbn0pIl19
