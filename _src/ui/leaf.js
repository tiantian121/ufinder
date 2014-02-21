UF.ui.define('leaf', {
    tpl: '<li class="ufui-leaf" data-path="<%=path%>">' +
        '   <div class="ufui-leaf-detail">' +
        '       <div class="ufui-leaf-expand"></div>' +
        '       <div class="ufui-leaf-icon"><i class="ufui-leaf-icon-<%=type%>"></i></div>' +
        '       <div class="ufui-leaf-title"><%=title%></div>' +
        '   </div>' +
        '   <ul class="ufui-tree-branch ufui-tree-branch-closed"></ul>' +
        '</li>',
    defaultOpt: {
        type: 'dir',
        title: '',
        path: '/'
    },
    init: function (options) {
        var me = this;
        me.root( $($.parseTmpl(me.tpl, options)) );
        me.$detail = me.root().children().eq(0);
        me.$branch = me.root().children().eq(1);

        return me;
    },
    disabled: function (state) {
        if (state === undefined) {
            return this.root().hasClass('ufui-disabled')
        }
        this.root().toggleClass('ufui-disabled', state);
        if(this.root().hasClass('ufui-disabled')){
            this.root().removeClass('ufui-hover')
        }
        return this;
    },
    active: function (state) {
        if (state === undefined) {
            return this.root().hasClass('ufui-active')
        }
        this.root().toggleClass('ufui-active', state);

        return this;
    },
    setPath: function(path){
        this.root().attr('data-path', path);
        return this;
    },
    getPath: function(){
        return this.root().attr('data-path');
    },
    setType: function(type){
        this.$detail.find('.ufui-leaf-icon i').attr('class', 'ufui-leaf-icon-' + type);
        return this;
    },
    getType: function(){
        var c = this.$detail.find('.ufui-leaf-icon i'),
            m = c.match(/ufui-leaf-icon-([\w]+)(\s|$)/);
        return m ? m[1]:null;
    },
    setTitle: function(title){
        this.$detail.find('.ufui-leaf-title').text(title);
        return this;
    },
    getTitle: function(){
        return this.$detail.find('.ufui-leaf-title').text();
    },
    addChild: function($leaf){
        this.$branch.append($leaf);
    },
    removeChild: function($leaf){
        $leaf.remove();
    },
    getChildren: function(){
        return this.$branch.children();
    }
});