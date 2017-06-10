# Visualforce-PlatformShiv
Easily create Visualforce pages that are compatible with Salesforce Classic, Salesforce1, and Lightning Experience

Instructions:

Download the package from the AppExchange.
Create a new Visualforce page.
Include a reference to the JavaScript and CSS files you downloaded:
                                                        
&lt;apex:includeScript value="{!URLFOR($Resource.PlatformShivJSBundle, 'jquery.js')}"/>
&lt;apex:includeScript value="{!URLFOR($Resource.PlatformShivJSBundle, 'PlatformShivJS.js')}"/>
&lt;link href="{!URLFOR($Resource.PlatformShivJSBundle, 'PlatformShivJS.css')}" rel="stylesheet"/>
                                                        
                                                    
Access the Visualforce Global Variable to determine which platform is in use and initialize the shiv:
                                                        
&lt;script>
    var $j = jQuery.noConflict();
    var theme = '{!$User.UIThemeDisplayed}'; 
    $j(document).ready(function () {
        PlatformShivJS.init(theme);
    });
&lt;/script>
                                                        
                                                    
To create a link to a record detail page:

Use a placeholder "href" attribute. The shiv will populate this based on the platform in use. Add the record ID in the "data-id" attribute and use the class "dynamicViewLink":
                                                  
&lt;a href="#" data-id="{!a.Id}" target="_blank" class="dynamicViewLink">Details&lt;/a>                                                 
                                                
To create a link to edit a record:

Use a placeholder "href" attribute. The shiv will populate this based on the platform in use. Add the record ID in the "data-id" attribute and use the class "dynamicEditLink":
                                                    
&lt;a href="#" data-id="{!a.Id}" target="_blank" class="dynamicEditLink">Edit&lt;/a>
                                                                           
To include/exclude elemnts based on platform:

For instance, if you want to pre-polulate an Account Name when creating the record. This was done with URL parameters in Salesforce Classic, but Actions are used in Salesforce1 and Lightning Experience. You can use the "classicOnly" class on such an element and the JavaScript will hide it for other platforms.

Available classes are:

notClassic
notLightning
notMobile
classicOnly
lightningOnly
mobileOnly
