templates.inProgressView = "app/views/InProgressView.html";
window.lastInProgressView = undefined;

window.SucursalesLoadView = Backbone.View.extend({

    title: "Cargando...",
    type: undefined,
    backLabel: "Volver",
    cancelActivity: false,
    
    initialize: function(options) {

        this.render();
        this.view = this.$el;
        
        var self = this;
        window.lastInProgressView = this;

        this.onLoadSucursales = function(result){
            self.loadSucursales(result);
        };

        this.onLoadSucursalesFail = function(error){
            self.loadConversationsFail(error);
        };

        setTimeout(function(){
        	SucursalService.getActivas(self.onLoadSucursales, self.onLoadSucursalesFail);
        }, 401 );        
    },

    events:{
    },

    render:function (eventName) {
        this.$el.html(templates.inProgressView);

        this.$el.css("height", "100%");
        return this;
    },

    loadSucursales: function(result) {
    	if(window.lastInProgressView.cancelActivity) return;

		var view = new SucursalesView({ sucursales:result });
        window.ViewNavigatorUtil.replaceView( view );

    },
    
    loadConversationsFail: function(message) {
    	if(window.lastInProgressView.cancelActivity) return;

    	var view = new MessageView({message:message});
        window.ViewNavigatorUtil.replaceView( view );
    },

    backCallback: function(){
    	this.cancelActivity = true;
    },
    
    showCallback: function(){
    	this.cancelActivity = false;
    }

    

});