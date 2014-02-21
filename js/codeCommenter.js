(function($) {
    var LINE_ELEMENT = '<pre/>'

    $.fn.comment = function (option){
        var OPTION_DEFAULT = {
            click:function (prePointer,str){}
        };
        option = $.extend(OPTION_DEFAULT,option);
        var content = this;
        var text = content.text();
        var lines = text.split('\n');
        content.html('');
        content.addClass('code-commenter-content');
        var lastLine = void 0;
        var lastPre = void 0;
        $.each(lines,function (){
            /* set code */
            var pre = $(LINE_ELEMENT);
            var prePointer = {current :pre,next :void 0};
            pre.text(this == '' ? ' ':this);
            /* comment line */
            var commentLine = $('<div/>');
            var commentText = $('<input/>');
            commentText.attr('type','text');
            commentLine.append(commentText);
            var commentButton = $('<button/>');
            commentButton.text('comment');
            commentLine.append(commentButton);
            pre.click(
                function (){
                    commentLine.slideToggle();
                    commentText.slideToggle();
                    commentButton.slideToggle();
                }
            );
            /* callback */
            commentButton.click(
                function (){
                    option.click(prePointer,commentText.val());
                    if(prePointer.next != void 0){
                        prePointer.current = prePointer.next;
                        prePointer.next = void 0;
                    }
                }
            );
            content.append(pre);
            content.append(commentLine);
            lastPre = pre;
            lastLine = commentLine;
        });
        lastLine.css('border-bottom','0 dashed black');
        lastPre.css('border-bottom','0 dashed black');
        return this;
    }
})(jQuery);