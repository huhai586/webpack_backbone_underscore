/**
 * Created by haihu on 2016/6/16.
 */
import Backbone from 'Backbone';
import $ from 'jquery';
import _ from 'Underscore';
import tem from './index_template.html'


var model=Backbone.Model.extend({

});

var app=Backbone.View.extend({
    el:".content",
    initialize:function(){
        var x='<a href="#huhai">backbone链接</a><a target="_blank" href="http://www.baidu.com">站外链接</a>'

        console.log(tem);
        var y=tem({name:123})
        debugger
        this.$el.html(y);

    }
});
var router=Backbone.Router.extend({
    routes:{
    "*do":"defaultPage"
    },
    defaultPage:function(params){

        console.log("匹配到的页面为",params);
        new app;
    }
});
 new router;
Backbone.history.start();
