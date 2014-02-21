(function($) {
    var LINE_ELEMENT = '<pre/>'

    $.fn.comment = function(){
        var content = this;
        var text = content.text();
        var lines = text.split('\n');
        content.html('');
        content.addClass('code-commenter-content');
        $.each(lines,function (){
            /* set code */
            var pre = $(LINE_ELEMENT);
            pre.text(this == '' ? ' ':this);
            /* comment line */
            var commentline = $('<div/>');
            //commentline.text(this);
            pre.click(
                function (){
                    commentline.slideToggle();
                }
            );
            content.append(pre);
            content.append(commentline);
        });
        //console.log();
        return this;
    }

    
})(jQuery);