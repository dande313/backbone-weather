define('NavView',[
    'jquery',
    'underscore',
    'backbone'
    ],
    function(
        $, _, Backbone
    ){

        var navView = Backbone.View.extend({
            
            initialize: function(data){
                this.router = data.router;
            },
            events: {
                "click": "onClick"
            },

            onClick: function(e){
                var $li = $(e.target);
                var router = this.router;
                router.navigate($li.attr("data-url"), { trigger: true });
            },
        })
    return navView
});