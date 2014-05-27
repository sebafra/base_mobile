templates.sucursalesView = "app/views/SucursalesView.html";

window.SucursalesView = Backbone.View.extend({

    destructionPolicy:'never',
    title: "Sucursales",
    backLabel: "Volver",
    sucursales: undefined,
                                             
    initialize: function(options) {
        this.sucursales = options.sucursales;
                                             
    	this.render();
        this.view = this.$el;
    },

    events:{
        "click li":"listItemClick"
    },

    render:function (eventName) {
        var template = _.template(templates.sucursalesView);
        this.$el.html(template( {sucursales:this.sucursales} ));
        var $list = this.$el.find("#list");

        _.each(this.sucursales, function (sucursal) {
            $list.append(new SucursalView({sucursal:sucursal}).render().el);
        }, this);

        return this;
    },
    
    listItemClick: function( event ) {
        var view = new SucursalView({message:item});
        window.ViewNavigatorUtil.replaceView( view );
    },
                                             
    getItemById:function (id, collection) {

    	for (var x=0; x < collection.length; x++) {
    		var item = collection[x];
    		if (item.messageId == id){
    			return item;
    		}
    	}
    	return null;
    }
    
});

