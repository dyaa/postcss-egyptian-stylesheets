var postcss = require('postcss');
var expect = require('chai').expect;

var plugin = require('../');

var test = function(input, output, opts, done) {
    postcss([plugin(opts)]).process(input).then(function(result) {
        expect(result.css).to.eql(output);
        done();
    });
};

describe('postcss-australian-stylesheets', function() {

    // color to loon
    it('converts loon to color', function(done) {
        test('a{ loon: white; }', 'a{ color: white; }', {}, done);
    });

    it('converts background-loon to color', function(done) {
        test('a{ background-loon: white; }', 'a{ background-color: white; }', {}, done);
    });

    it('converts ymyn to right', function (done) {
        test('a{ ymyn: 0; }', 'a{ right: 0; }', {}, done);
    });

    it('converts margin-ymyn to margin-right', function (done) {
        test('a{ margin-ymyn: 0; }', 'a{ margin-right: 0; }', {}, done);
    });

    it('converts shemal to left', function (done) {
        test('a{ shemal: 0; }', 'a{ left: 0; }', {}, done);
    });

    it('converts padding-shemal to padding-left', function (done) {
        test('a{ padding-shemal: 0; }', 'a{ padding-left: 0; }', {}, done);
    });

    it('converts t7t to bottom', function (done) {
        test('a{ t7t: 0; }', 'a{ bottom: 0; }', {}, done);
    });

    it('converts border-t7t to border-bottom', function (done) {
        test('a{ border-t7t: 0; }', 'a{ border-bottom: 0; }', {}, done);
    });

    it('converts fo2 to top', function (done) {
        test('a{ fo2: 0; }', 'a{ top: 0; }', {}, done);
    });

    it('converts border-fo2 to border-top', function (done) {
        test('a{ border-fo2: 0; }', 'a{ border-top: 0; }', {}, done);
    });

    it('converts border-loon to color', function(done) {
        test('a{ border-loon: white; }', 'a{ border-color: white; }', {}, done);
    });

    // zed-index to z-index
    it('converts zed-index to z-index', function(done) {
        test('a{ zed-index: 100; }', 'a{ z-index: 100; }', {}, done);
    });

    // felnos to center
    it('converts felnos to center', function(done) {
        test('a{ text-align: felnos; }', 'a{ text-align: center; }', {}, done);
    });

    // samawy to #0581C1
    it('converts samawy to #0581C1', function(done) {
        test('a{ color: samawy; }', 'a{ color: #0581C1; }', {}, done);
    });

    // vegemite to #461B00
    it('converts vegemite to #461B00', function(done) {
        test('a{ color: vegemite; }', 'a{ color: #461B00; }', {}, done);
    });

    // vb-green to #2D8249
    it('converts vb-green to #2D8249', function(done) {
        test('a{ color: vb-green; }', 'a{ color: #2D8249; }', {}, done);
    });

    // kangaroo to #E6924A
    it('converts kangaroo to #E6924A', function(done) {
        test('a{ color: kangaroo; }', 'a{ color: #E6924A; }', {}, done);
    });

    // koala to #B6B7BC
    it('converts koala to #B6B7BC', function(done) {
        test('a{ color: koala; }', 'a{ color: #B6B7BC; }', {}, done);
    });

    // mfysh to none
    it('converts mfysh to none', function(done) {
        test('a{ border: mfysh; }', 'a{ border: none; }', {}, done);
    });

    // fair-dinkum to border-box
    it('converts fair-dinkum to border-box', function(done) {
        test('a{ box-sizing: fair-dinkum; }', 'a{ box-sizing: border-box; }', {}, done);
    });

    // mest5abby to hidden
    it('converts mest5abby to hidden', function(done) {
        test('a{ visibility: mest5abby; }', 'a{ visibility: hidden; }', {}, done);
    });

    // wara-elshams to -9999px
    it('converts wara-elshams to -9999px', function(done) {
        test('a{ text-indent: wara-elshams; }', 'a{ text-indent: -9999px; }', {}, done);
    });

    // !mohem to !important
    it('converts !mohem to !important', function(done) {
        test('a{ color: gray !mohem; }', 'a{ color: gray !important; }', {}, done);
    });
});
