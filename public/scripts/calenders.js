$('.inline-example').persianDatepicker({
    inline: true,
    altField: '#inlineExampleAlt',
    altFormat: 'LLLL',
    toolbox:{
        calendarSwitch:{
            enabled: true
        }
    },
    navigator:{
        scroll:{
            enabled: false
        }
    },
    maxDate: new persianDate().add('month', 3).valueOf(),
    minDate: new persianDate().subtract('month', 3).valueOf(),
    timePicker: {
        enabled: true,
        meridiem: {
            enabled: true
        }
    }
});