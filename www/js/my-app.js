// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {

});



//index页启动时加载home
$$.get('home.html',{},function (data) {
    $$('#home-tab').html(data);
})

//底部TAB点击
$$('.tab-link').on('click',function (e) {
    var tabPage = $$(e.target).parent().prop('id');
    $$.get(tabPage+'.html',{},function (data) {
        $$('#'+tabPage+'-tab').html(data);
    })
});