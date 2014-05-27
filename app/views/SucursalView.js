templates.sucursalView = "app/views/SucursalView.html";

window.SucursalView = Backbone.View.extend({

    tagName:'li',
    template:undefined,
    sucursal:undefined,
                                           
    initialize: function(options) {
        this.template = _.template( templates.sucursalView );
        this.sucursal = options.sucursal;
                                           
        this.render();
        this.view = this.$el;
    },

    events:{
    },

    render:function (eventName) {
        var model = this.sucursal;
        this.$el.html( this.template( model ));
        this.$el.attr('id', model.id );

        return this;
    }
});