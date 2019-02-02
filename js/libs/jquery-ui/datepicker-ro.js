(function (factory) {
    if (typeof define === "function" && define.amd) {
// AMD. Register as an anonymous module.
        define(["../datepicker"], factory);
    } else {
// Browser globals
        factory(jQuery.datepicker);
    }
}(function (datepicker) {
    datepicker.regional['ro'] = {
        closeText: 'Închide',
        prevText: '&#xAB; Luna precedentă',
        nextText: 'Luna următoare &#xBB;',
        currentText: 'Astăzi',
        monthNames: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
            'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
        monthNamesShort: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun',
            'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
        dayNamesShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
        dayNamesMin: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'],
        weekHeader: 'Săpt',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    datepicker.setDefaults(datepicker.regional['ro']);
    return datepicker.regional['ro'];
}));
