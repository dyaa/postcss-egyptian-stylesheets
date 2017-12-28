var postcss = require('postcss');

module.exports = postcss.plugin('postcss-ass', function() {
    return function(css) {

        css.eachDecl(function transformDecl(decl) {
            decl.prop = decl.prop.replace('loon', 'color');
            decl.prop = decl.prop.replace('ymyn', 'right');
            decl.prop = decl.prop.replace('shemal', 'left');
            decl.prop = decl.prop.replace('fo2', 'top');
            decl.prop = decl.prop.replace('t7t', 'bottom');
            decl.prop = decl.prop.replace('zed-index', 'z-index');
            decl.value = decl.value.replace('felnos', 'center');
            decl.value = decl.value.replace('samawy', '#0581C1');
            decl.value = decl.value.replace('vegemite', '#461B00');
            decl.value = decl.value.replace('vb-green', '#2D8249');
            decl.value = decl.value.replace('kangaroo', '#E6924A');
            decl.value = decl.value.replace('koala', '#B6B7BC');
            decl.value = decl.value.replace('mfysh', 'none');
            decl.value = decl.value.replace('fair-dinkum', 'border-box');
            decl.value = decl.value.replace('mest5abby', 'hidden');
            decl.value = decl.value.replace('wara-elshams', '-9999px');

            if (decl.value.indexOf('!mohem') >= 0) {
                decl.value = decl.value.replace(/\s*!mohem\s*/, '');
                decl.important = true;
            }
        });

    };
});
