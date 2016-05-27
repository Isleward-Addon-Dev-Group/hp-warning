addons.register({
    init: function(events)
    {
        events.on('onGetStats', this.onLowHP.bind(this));
    },
    onLowHP: function(stats)
    {
        var uiContainer = $('.ui-container');
        if( ! this.hpWarning)
        {
            this.hpWarning = $('<div class="HP-Warning"></div>').appendTo(uiContainer);
        }
        var hpMax = stats.hpMax;
        var hpCur = stats.hp;
        var hpMin = (hpMax / 100) * 30;
        if(hpCur <= hpMin)
        {
            $('.ui-container').addClass('HP-warning-splash');
            if($('.HP-Warning').html().length <= 0)
            {
                $('.HP-Warning').html('You have LOW HP!');
            }
        }
        else
        {
            $('.ui-container').removeClass('HP-warning-splash');
            if($('.HP-Warning').html().length > 0)
            {
                $('.HP-Warning').html(' ');
            }
        }
    },
});