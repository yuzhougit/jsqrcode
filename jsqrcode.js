;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.jsqrcode = factory()
}(this, function () {
    return {
        sayHi: function(name) {
            console.log('Hi, ' + name + '!' );
        }
    }
})