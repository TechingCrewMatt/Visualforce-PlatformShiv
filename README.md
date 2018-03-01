# Visualforce-PlatformShiv
Easily create Visualforce pages that are compatible with Salesforce Classic, Salesforce1, and Lightning Experience

The unmanaged package can be downloaded directly into Salesforce at https://goo.gl/oax19L. Otherwise, the manual installation instructions are below.

Instructions:

1. Download the PlatformShivJSBundle.zip.
2. Create a Static Resource named PlatformShivJSBundle
3. Create a new Visualforce page.
4. Include a reference to the JavaScript and CSS files you downloaded:
                                                        
&lt;apex:includeScript value="{!URLFOR($Resource.PlatformShivJSBundle, 'jquery.js')}"/><br/>
&lt;apex:includeScript value="{!URLFOR($Resource.PlatformShivJSBundle, 'PlatformShivJS.js')}"/><br/>
&lt;link href="{!URLFOR($Resource.PlatformShivJSBundle, 'PlatformShivJS.css')}" rel="stylesheet"/><br/>
                                                        
                                                    
5. Access the Visualforce Global Variable to determine which platform is in use and initialize the shiv:
                                                        
&lt;script><br/>
    &nbsp;&nbsp;var $j = jQuery.noConflict();<br/>
    &nbsp;&nbsp;var theme = '{!$User.UIThemeDisplayed}'; <br/>
    &nbsp;&nbsp;$j(document).ready(function () {<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;    PlatformShivJS.init(theme);<br/>
    &nbsp;&nbsp;});<br/>
&lt;/script><br/>
                                                        
                                                    
<b>To create a link to a record detail page:</b>

Use a placeholder "href" attribute. The shiv will populate this based on the platform in use. Add the record ID in the "data-id" attribute, add the object name to the "data-object" attribute, and use the class "viewLink":
                                                  
&lt;a href="#" data-id="{!a.Id}" data-object="Account" target="_blank" class="viewLink">Details&lt;/a>                                                 
                                                
<b>To create a link to edit a record:</b>

Use a placeholder "href" attribute. The shiv will populate this based on the platform in use. Add the record ID in the "data-id" attribute, add the object name to the "data-object" attribute, and use the class "editLink":
                                                    
&lt;a href="#" data-id="{!a.Id}" data-object="Account" target="_blank" class="editLink">Edit&lt;/a>
                                                                           
<b>To include/exclude elements based on platform:</b>

For instance, if you want to pre-polulate an Account Name when creating the record. This was done with URL parameters in Salesforce Classic, but Actions are used in Salesforce1 and Lightning Experience. You can use the "onlyClassic" class on such an element and the JavaScript will hide it for other platforms.

Available classes are:<br/>
<br/>
notClassic<br/>
notLightning<br/>
notMobile<br/>
onlyClassic<br/>
onlyLightning<br/>
onlyMobile<br/>
classicOnly<br/>
lightningOnly<br/>
mobileOnly<br/>
