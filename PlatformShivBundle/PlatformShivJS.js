/*
MIT License

Copyright (c) 2017 TechingCrew, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*********************************************************
 ** TechingCrew LLC                                     **
 ** Certified Salesforce Developers and Administrators  **
 ** http://www.TechingCrew.com                                     **
 *********************************************************
*/
var $j = jQuery.noConflict();
var lightningBase = '/lightning/'; // + type/Object/Id/action
var classicBase = '/';
var mobileBase = '/lightning/'; // + type/Object/Id/action 
var PlatformShivJS= {
    init: function(theme){
        switch(theme){
            case 'Theme4d':
                console.log('Lightning Experience Detected');
                $j('.notLightning').addClass('hide');
                $j('.mobileOnly').addClass('hide');
                $j('.classicOnly').addClass('hide');
                $j('.onlyMobile').addClass('hide');
                $j('.onlyClassic').addClass('hide');
                break;
            case 'Theme4t':
                console.log('Salesforce1 Detected');
                $j('.notMobile').addClass('hide');
                $j('.lightningOnly').addClass('hide');
                $j('.classicOnly').addClass('hide');
                $j('.onlyLightning').addClass('hide');
                $j('.onlyClassic').addClass('hide');
                $j('a').removeAttr('target');
                break;
        
            case 'Theme3' || theme === 'Theme2':
                console.log('Salesforce Classic Detected');
                $j('.notClassic').addClass('hide');
                $j('.lightningOnly').addClass('hide');
                $j('.mobileOnly').addClass('hide');
                $j('.onlyLightning').addClass('hide');
                $j('.onlyMobile').addClass('hide');
        }
        bindViewLinks();
        bindEditLinks();  
    }
}
        
function bindViewLinks(){
    var $j = jQuery.noConflict();
    var link = '';
    var id = '';
    var type = '';
    var link = '';
    $j('.viewLink').each(function () {
        var thisEl = $j(this);
        id = thisEl.data('id');
        console.log(id);
        if (!!id && id !== '' && id !== 'home') {
            type = 'r/';
        }
        else {
            type = 'o/';
        }
        link = '';
        switch (theme) {
            case 'Theme4d':
                if (type == 'r/') {
                    link = lightningBase + type + thisEl.data('object') + '/' + thisEl.data('id') + '/view';
                }
                else if (type == 'o/') {
                    link = lightningBase + type + thisEl.data('object') + '/home';
                }
                break;
            case 'Theme4t':
                if (type == 'r/') {
                    link = mobileBase + type + thisEl.data('object') + '/' + thisEl.data('id') + '/view';
                }
                else if (type == 'o/') {
                    link = lightningBase + type + thisEl.data('object') + '/home';
                }
                $j('a').removeAttr('target');
                break;
            case 'Theme3' || theme === 'Theme2':
                link = classicBase + thisEl.data('id');
                break;
            default:
                link = classicBase + thisEl.data('id');
                break;
        }
        thisEl.prop('href', link);
    });
}
    
function bindEditLinks(){
    var $j = jQuery.noConflict();
    var link = '';
    var id = '';
    var type = '';
    $j('.editLink').each(function () {
        link = '';
        id = '';
        type = '';
        var thisEl = $j(this);
        id = thisEl.data('id');
        console.log(id);
        if (id && id !== '' && id !== 'home') {
            type = 'r/';
        }
        else {
            type = 'o/';
        }
        switch (theme) {
            case 'Theme4d':
                if (type == 'r/') {
                    link = lightningBase + type + thisEl.data('object') + '/' + thisEl.data('id') + '/edit';
                }
                else if (type == 'o/') {
                    link = lightningBase + type + thisEl.data('object') + '/home';
                }
                break;
            case 'Theme4t':
                if (type == 'r/') {
                    link = mobileBase + type + thisEl.data('object') + '/' + thisEl.data('id') + '/edit';
                }
                else if (type == 'o/') {
                    link = lightningBase + type + thisEl.data('object') + '/home';
                }
                $j('a').removeAttr('target');
                break;
            case 'Theme3' || theme === 'Theme2':
                link = classicBase + thisEl.data('id');
                break;
            default:
                link = classicBase + thisEl.data('id');
                break;
        }
        thisEl.prop('href', link);
    });
}