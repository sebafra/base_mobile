 	    
var templates = {
    loaded: 0,
    requested: 0
};

var ___templatesLoadedCallback = undefined;

function loadTemplates(callback) {
    ___templatesLoadedCallback = callback;
    for (var key in templates) {
        (function() {
             var _key = key.toString();
             if ( _key != "loaded" && _key != "requested" ){
                 templates.requested ++;
                 
                 var templateLoaded = function( template ){
                    onTemplateLoaded( template, _key );
                 }
                 
                 $.get( templates[ _key ], templateLoaded, "html" );
             }
         })();
    }
}




function onTemplateLoaded(template, key) {
    templates[ key ] = template;
    templates.loaded ++;
    
    if ( templates.loaded == templates.requested ) {
        ___templatesLoadedCallback();
    }
}

