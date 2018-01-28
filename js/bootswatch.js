$.getJSON("https://bootswatch.com/api/3.json", function (data) {
    var themes = data.themes;
    $('#themes').append( '<option value="css/bootstrap.min.css">Default</option>' );
    themes.forEach(function(value, index){
        $('#themes').append( '<option value="'+value.cssMin+'">'+value.name+'</option>' );
    });
});

$(document).ready(function(){
    $('#themes').on('change', function(data) {
        var selected = $('select').val();
        changeCSS(selected, 0);
    });
});

//https://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page
function changeCSS(cssFile, cssLinkIndex) {
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}