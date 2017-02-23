$("#btn").click(function() {
    reference='John+8:12-59'
    $.getJSON('http://www.esvapi.org/crossref/ref.php?reference=' + reference + '&callback=?',
        function(text){
            if(text){
                $('body').html(text.content);
            } else {
                $('body').html('Error');
            }
        });
});
