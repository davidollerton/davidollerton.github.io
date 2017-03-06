$("#btn").click(function() {
    reference='{{ page.scripture }}'
    $.getJSON('http://www.esvapi.org/crossref/ref.php?reference=' + reference + '&callback=?',
        function(text){
            if(text){
                $('body').html(text.content);
            } else {
                $('body').html('Error');
            }
        });
});
