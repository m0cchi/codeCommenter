(function($) {
    var LINE_ELEMENT = '<pre/>'

    $.fn.comment = function (){
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
            var commentText = $('<input/>');
            commentText.attr('type','text');
            commentline.append(commentText);
            var commentButton = $('<button/>');
            commentButton.text('comment');
            commentline.append(commentButton);
            pre.click(
                function (){
                    commentline.slideToggle();
                    commentText.slideToggle();
                    commentButton.slideToggle();
                }
            );
            content.append(pre);
            content.append(commentline);
        });
        //console.log();
        return this;
    }

    
})(jQuery);