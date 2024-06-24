<!DOCTYPE html><html><head><script>
<#assign pageId="login-page-expired.ftl">
const kcContext = ${ftl_object_to_js_code_declaring_an_object(.data_model, [])?no_esc};
if( kcContext.messagesPerField ){
    var existsError_singleFieldName = kcContext.messagesPerField.existsError;
    kcContext.messagesPerField.existsError = function (){
        for( let i = 0; i < arguments.length; i++ ){
            if( existsError_singleFieldName(arguments[i]) ){
                return true;
            }
        }
        return false;
    };
    kcContext.messagesPerField.exists = function (fieldName) {
        return kcContext.messagesPerField.get(fieldName) !== "";
    };
    kcContext.messagesPerField.printIfExists = function (fieldName, text) {
        return kcContext.messagesPerField.exists(fieldName) ? text : undefined;
    };
    kcContext.messagesPerField.getFirstError = function () {
        for( let i = 0; i < arguments.length; i++ ){
            const fieldName = arguments[i];
            if( kcContext.messagesPerField.existsError(fieldName) ){
                return kcContext.messagesPerField.get(fieldName);
            }
        }
    };
}
kcContext.keycloakifyVersion = "10.0.0-rc.91";
kcContext.themeVersion = "0.0.1";
kcContext.themeType = "login";
kcContext.themeName = "tema-gab";
kcContext.pageId = "${pageId}";
if( kcContext.url && kcContext.url.resourcesPath ){
    kcContext.url.resourcesCommonPath = kcContext.url.resourcesPath + "/" + "resources-common";
}
kcContext["x-keycloakify"] = {};
<#if profile?? && profile.attributes??>
    kcContext["x-keycloakify"].realmMessageBundleUserProfile = {
        <#list profile.attributes as attribute>
            <#if attribute.annotations?? && attribute.displayName??>
                "${attribute.displayName}": decodeHtmlEntities("${advancedMsg(attribute.displayName)?js_string}"),
            </#if>
            <#if attribute.annotations.inputHelperTextBefore??>
                "${attribute.annotations.inputHelperTextBefore}": decodeHtmlEntities("${advancedMsg(attribute.annotations.inputHelperTextBefore)?js_string}"),
            </#if>
            <#if attribute.annotations.inputHelperTextAfter??>
                "${attribute.annotations.inputHelperTextAfter}": decodeHtmlEntities("${advancedMsg(attribute.annotations.inputHelperTextAfter)?js_string}"),
            </#if>
            <#if attribute.annotations.inputTypePlaceholder??>
                "${attribute.annotations.inputTypePlaceholder}": decodeHtmlEntities("${advancedMsg(attribute.annotations.inputTypePlaceholder)?js_string}"),
            </#if>
            <!-- Loop through the options that are in attribute.validators.options.options -->
            <#if (
                attribute.annotations.inputOptionLabelsI18nPrefix?? &&
                attribute.validators?? &&
                attribute.validators.options??
            )>
                <#list attribute.validators.options.options as option>
                    "${attribute.annotations.inputOptionLabelsI18nPrefix}.${option}": decodeHtmlEntities("${msg(attribute.annotations.inputOptionLabelsI18nPrefix + "." + option)?js_string}"),
                </#list>
            </#if>
        </#list>
    };
</#if>
<#if pageId == "terms.ftl" || termsAcceptanceRequired?? && termsAcceptanceRequired>
    kcContext["x-keycloakify"].realmMessageBundleTermsText= decodeHtmlEntities("${msg("termsText")?js_string}");
</#if>
attributes_to_attributesByName: {
    if( !kcContext.profile ){
        break attributes_to_attributesByName;
    }
    if( !kcContext.profile.attributes ){
        break attributes_to_attributesByName;
    }
    var attributes =  kcContext.profile.attributes;
    delete kcContext.profile.attributes;
    kcContext.profile.attributesByName = {};
    attributes.forEach(function(attribute){
        kcContext.profile.attributesByName[attribute.name] = attribute;
    });
}
window.kcContext = kcContext;
function decodeHtmlEntities(htmlStr){
    var element = decodeHtmlEntities.element;
    if (!element) {
        element = document.createElement("textarea");
        decodeHtmlEntities.element = element;
    }
    element.innerHTML = htmlStr;
    return element.value;
}

<#function ftl_object_to_js_code_declaring_an_object object path>

        <#local isHash = "">
        <#attempt>
            <#local isHash = object?is_hash || object?is_hash_ex>
        <#recover>
            <#return "ABORT: Can't evaluate if " + path?join(".") + " is hash">
        </#attempt>

        <#if isHash>

            <#if path?size gt 10>
                <#return "ABORT: Too many recursive calls, path: " + path?join(".")>
            </#if>

            <#local keys = "">

            <#attempt>
                <#local keys = object?keys>
            <#recover>
                <#return "ABORT: We can't list keys on this object">
            </#attempt>

            <#local out_seq = []>

            <#list keys as key>

                <#if ["class","declaredConstructors","superclass","declaringClass" ]?seq_contains(key) >
                    <#continue>
                </#if>

                <#if 
                    (
                        ["loginUpdatePasswordUrl", "loginUpdateProfileUrl", "loginUsernameReminderUrl", "loginUpdateTotpUrl"]?seq_contains(key) && 
                        are_same_path(path, ["url"])
                    ) || (
                        key == "updateProfileCtx" && 
                        are_same_path(path, [])
                    ) || (
                        <#-- https://github.com/keycloakify/keycloakify/pull/65#issuecomment-991896344 (reports with saml-post-form.ftl) -->
                        <#-- https://github.com/keycloakify/keycloakify/issues/91#issue-1212319466 (reports with error.ftl and Kc18) -->
                        <#-- https://github.com/keycloakify/keycloakify/issues/109#issuecomment-1134610163 -->
                        <#-- https://github.com/keycloakify/keycloakify/issues/357 -->
                        <#-- https://github.com/keycloakify/keycloakify/discussions/406#discussioncomment-7514787 -->
                        key == "loginAction" && 
                        are_same_path(path, ["url"]) && 
                        ["saml-post-form.ftl", "error.ftl", "info.ftl", "login-oauth-grant.ftl", "logout-confirm.ftl", "login-oauth2-device-verify-user-code.ftl"]?seq_contains(pageId) &&
                        !(auth?has_content && auth.showTryAnotherWayLink())
                    ) || (
                        <#-- https://github.com/keycloakify/keycloakify/issues/362 -->
                        ["secretData", "value"]?seq_contains(key) && 
                        are_same_path(path, [ "totp", "otpCredentials", "*" ])
                    ) || (
                        ["contextData", "idpConfig", "idp", "authenticationSession"]?seq_contains(key) &&
                        are_same_path(path, ["brokerContext"]) &&
                        ["login-idp-link-confirm.ftl", "login-idp-link-email.ftl" ]?seq_contains(pageId)
                    ) || (
                        key == "identityProviderBrokerCtx" && 
                        are_same_path(path, []) &&
                        ["login-idp-link-confirm.ftl", "login-idp-link-email.ftl" ]?seq_contains(pageId)
                    ) ||  (
                        ["masterAdminClient", "delegateForUpdate", "defaultRole"]?seq_contains(key) &&
                        are_same_path(path, ["realm"])
                    ) || (
                        "error.ftl" == pageId &&
                        are_same_path(path, ["realm"]) &&
                        !["name", "displayName", "displayNameHtml", "internationalizationEnabled", "registrationEmailAsUsername" ]?seq_contains(key)
                    ) || (
                        "applications.ftl" == pageId &&
                        ( 
                            key == "realm" || 
                            key == "container" 
                        ) &&
                        is_subpath(path, ["applications", "applications"])
                    ) || (
                        key == "delegateForUpdate" &&
                        are_same_path(path, ["user"])
                    ) || (
                        <#-- Security audit forwarded by Garth (Gmail) -->
                        key == "saml.signing.private.key" &&
                        are_same_path(path, ["client", "attributes"])
                    ) || (
                        <#-- See: https://github.com/keycloakify/keycloakify/issues/534 -->
                        key == "password" &&
                        are_same_path(path, ["login"])
                    ) || (
                        <#-- Remove realmAttributes added by https://github.com/jcputney/keycloak-theme-additional-info-extension for peace of mind. -->
                        key == "realmAttributes" &&
                        are_same_path(path, [])
                    ) || (
                        <#-- attributesByName adds a lot of noise to the output and is not needed, we already have profile.attributes -->
                        key == "attributesByName" &&
                        are_same_path(path, ["profile"]) 
                    ) || (
                        <#-- We already have the attributes in profile speedup the rendering by filtering it out from the register object -->
                        (key == "attributes" || key == "attributesByName") &&
                        are_same_path(path, ["register"])
                    ) || (
                        are_same_path(path, ["properties"]) &&
                        (
                            key?starts_with("kc") || 
                            key == "locales" || 
                            key == "import" || 
                            key == "parent" || 
                            key == "meta" ||
                            key == "stylesCommon" ||
                            key == "styles" ||
                            key == "accountResourceProvider"
                        )
                    ) || (
                        key == "execution" &&
                        are_same_path(path, [])
                    ) || (
                        key == "entity" &&
                        are_same_path(path, ["user"])
                    )
                >
                    <#-- <#local out_seq += ["/*" + path?join(".") + "." + key + " excluded*/"]> -->
                    <#continue>
                </#if>
                
                <#-- https://github.com/keycloakify/keycloakify/discussions/406 -->
                <#if (
                    ["register.ftl", "register-user-profile.ftl", "terms.ftl", "info.ftl", "login.ftl", "login-update-password.ftl", "login-oauth2-device-verify-user-code.ftl"]?seq_contains(pageId) && 
                    key == "attemptedUsername" && are_same_path(path, ["auth"])
                )>
                    <#attempt>
                        <#-- https://github.com/keycloak/keycloak/blob/3a2bf0c04bcde185e497aaa32d0bb7ab7520cf4a/themes/src/main/resources/theme/base/login/template.ftl#L63 -->
                        <#if !(auth?has_content && auth.showUsername() && !auth.showResetCredentials())>
                            <#local out_seq += ["/*" + path?join(".") + "." + key + " excluded*/"]>
                            <#continue>
                        </#if>
                    <#recover>
                        <#local out_seq += ["/*Accessing attemptedUsername throwed an exception */"]>
                    </#attempt>
                </#if>

                
                
                <#attempt>
                    <#if !object[key]??>
                        <#continue>
                    </#if>
                <#recover>
                    <#local out_seq += ["/*Couldn't test if '" + key + "' is available on this object*/"]>
                    <#continue>
                </#attempt>

                <#local propertyValue = "">

                <#attempt>
                    <#local propertyValue = object[key]>
                <#recover>
                    <#local out_seq += ["/*Couldn't dereference '" + key + "' on this object*/"]>
                    <#continue>
                </#attempt>

                <#local rec_out = ftl_object_to_js_code_declaring_an_object(propertyValue, path + [ key ])>

                <#if rec_out?starts_with("ABORT:")>

                    <#local errorMessage = rec_out?remove_beginning("ABORT:")>

                    <#if errorMessage != " It's a method" >
                        <#local out_seq += ["/*" + key + ": " + errorMessage + "*/"]>
                    </#if>

                    <#continue>
                </#if>

                <#local out_seq +=  ['"' + key + '": ' + rec_out + ","]>

            </#list>

            <#return (["{"] + out_seq?map(str -> ""?right_pad(4 * (path?size + 1)) + str) + [ ""?right_pad(4 * path?size) + "}"])?join("\n")>

        </#if>

        <#local isMethod = "">
        <#attempt>
            <#local isMethod = object?is_method>
        <#recover>
            <#return "ABORT: Can't test if it'sa method.">
        </#attempt>

        <#if isMethod>

            <#if are_same_path(path, ["auth", "showUsername"])>
                <#attempt>
                    <#return auth.showUsername()?c>
                <#recover>
                    <#return "ABORT: Couldn't evaluate auth.showUsername()">
                </#attempt>
            </#if>

            <#if are_same_path(path, ["auth", "showResetCredentials"])>
                <#attempt>
                    <#return auth.showResetCredentials()?c>
                <#recover>
                    <#return "ABORT: Couldn't evaluate auth.showResetCredentials()">
                </#attempt>
            </#if>

            <#if are_same_path(path, ["auth", "showTryAnotherWayLink"])>
                <#attempt>
                    <#return auth.showTryAnotherWayLink()?c>
                <#recover>
                    <#return "ABORT: Couldn't evaluate auth.showTryAnotherWayLink()">
                </#attempt>
            </#if>

            <#if are_same_path(path, ["url", "getLogoutUrl"])>
                <#local returnValue = "">
                <#attempt>
                    <#local returnValue = url.getLogoutUrl()>
                <#recover>
                    <#return "ABORT: Couldn't evaluate url.getLogoutUrl()">
                </#attempt>
                <#return 'function(){ return "' + returnValue + '"; }'>
            </#if>

            <#if are_same_path(path, ["totp", "policy", "getAlgorithmKey"])>
                <#local returnValue = "error">
                <#if mode?? && mode = "manual">
                    <#attempt>
                        <#local returnValue = totp.policy.getAlgorithmKey()>
                    <#recover>
                        <#return "ABORT: Couldn't evaluate totp.policy.getAlgorithmKey()">
                    </#attempt>
                </#if>
                <#return 'function(){ return "' + returnValue + '"; }'>
            </#if>

            <#assign fieldNames = [ "firstName", "lastName", "email", "username", "password", "password-confirm", "global", "totp", "userLabel", "recoveryCodeInput", "termsAccepted" ]>
            <#if profile?? && profile.attributes??>
                <#list profile.attributes as attribute>
                    <#if fieldNames?seq_contains(attribute.name)>
                        <#continue>
                    </#if>
                    <#assign fieldNames += [attribute.name]>
                </#list>
            </#if>

            <#if are_same_path(path, ["messagesPerField", "get"])>

                <#local jsFunctionCode = "function (fieldName) { ">

                <#list fieldNames as fieldName>

                    <#-- See: https://github.com/keycloakify/keycloakify/issues/217 -->
                    <#if pageId == "login.ftl" >

                        <#if fieldName == "username">

                            <#local jsFunctionCode += "if(fieldName === 'username' || fieldName === 'password' ){ ">

                            <#if messagesPerField.exists('username') || messagesPerField.exists('password')>
                                <#local jsFunctionCode += "return kcContext.message && kcContext.message.summary ? kcContext.message.summary : 'error'; ">
                            <#else>
                                <#local jsFunctionCode += "return ''; ">
                            </#if>

                            <#local jsFunctionCode += "} ">

                            <#continue>
                        </#if>

                        <#if fieldName == "password">
                            <#continue>
                        </#if>

                    </#if>

                    <#local jsFunctionCode += "if(fieldName === '" + fieldName + "'){ ">

                    <#if messagesPerField.exists('${fieldName}')>
                        <#local jsFunctionCode += 'return decodeHtmlEntities("' + messagesPerField.get('${fieldName}')?js_string + '"); '>
                    <#else>
                        <#local jsFunctionCode += "return ''; ">
                    </#if>

                    <#local jsFunctionCode += "} ">

                </#list>

                <#local jsFunctionCode += "}">

                <#return jsFunctionCode>

            </#if>

            <#if are_same_path(path, ["messagesPerField", "existsError"])>

                <#local jsFunctionCode = "function (fieldName) { ">

                <#list fieldNames as fieldName>

                    <#-- See: https://github.com/keycloakify/keycloakify/issues/217 -->
                    <#if pageId == "login.ftl" >
                        <#if fieldName == "username">

                            <#local jsFunctionCode += "if(fieldName === 'username' || fieldName === 'password' ){ ">

                            <#if messagesPerField.existsError('username') || messagesPerField.existsError('password')>
                                <#local jsFunctionCode += "return true; ">
                            <#else>
                                <#local jsFunctionCode += "return false; ">
                            </#if>

                            <#local jsFunctionCode += "} ">

                            <#continue>
                        </#if>

                        <#if fieldName == "password">
                            <#continue>
                        </#if>
                    </#if>

                    <#local jsFunctionCode += "if(fieldName === '" + fieldName + "' ){ ">

                    <#if messagesPerField.existsError('${fieldName}')>
                        <#local jsFunctionCode += 'return true; '>
                    <#else>
                        <#local jsFunctionCode += "return false; ">
                    </#if>

                    <#local jsFunctionCode += "}">

                </#list>

                <#local jsFunctionCode += "}">

                <#return jsFunctionCode>

            </#if>

            <#return "ABORT: It's a method">
        </#if>

        <#local isBoolean = "">
        <#attempt>
            <#local isBoolean = object?is_boolean>
        <#recover>
            <#return "ABORT: Can't test if it's a boolean">
        </#attempt>

        <#if isBoolean>
            <#return object?c>
        </#if>

        <#local isEnumerable = "">
        <#attempt>
            <#local isEnumerable = object?is_enumerable>
        <#recover>
            <#return "ABORT: Can't test if it's an enumerable">
        </#attempt>


        <#if isEnumerable>

            <#local out_seq = []>

            <#local i = 0>

            <#list object as array_item>

                <#if !array_item??>
                    <#local out_seq += ["null,"]>
                    <#continue>
                </#if>

                <#local rec_out = ftl_object_to_js_code_declaring_an_object(array_item, path + [ i ])>

                <#local i = i + 1>

                <#if rec_out?starts_with("ABORT:")>

                    <#local errorMessage = rec_out?remove_beginning("ABORT:")>

                    <#if errorMessage != " It's a method" >
                        <#local out_seq += ["/*" + i?string + ": " + errorMessage + "*/"]>
                    </#if>

                    <#continue>
                </#if>

                <#local out_seq += [rec_out + ","]>

            </#list>

            <#return (["["] + out_seq?map(str -> ""?right_pad(4 * (path?size + 1)) + str) + [ ""?right_pad(4 * path?size) + "]"])?join("\n")>

        </#if>

        <#local isDate = "">
        <#attempt>
            <#local isDate = object?is_date_like>
        <#recover>
            <#return "ABORT: Can't test if it's a date">
        </#attempt>

        <#if isDate>
            <#return '"' + object?datetime?iso_utc + '"'>
        </#if>

        <#local isNumber = "">
        <#attempt>
            <#local isNumber = object?is_number>
        <#recover>
            <#return "ABORT: Can't test if it's a number">
        </#attempt>

        <#if isNumber>
            <#return object?c>
        </#if>

        <#attempt>
            <#return '"' + object?js_string + '"'>;
        <#recover>
        </#attempt>

        <#return "ABORT: Couldn't convert into string non hash, non method, non boolean, non number, non enumerable object">

</#function>
<#function is_subpath path searchedPath>

    <#if path?size < searchedPath?size>
        <#return false>
    </#if>

    <#local i=0>

    <#list path as property>

        <#if i == searchedPath?size >
            <#continue>
        </#if>

        <#local searchedProperty=searchedPath[i]>

        <#local i+= 1>

        <#if searchedProperty?is_string && searchedProperty == "*">
            <#continue>
        </#if>

        <#if searchedProperty?is_string && !property?is_string>
            <#return false>
        </#if>

        <#if searchedProperty?is_number && !property?is_number>
            <#return false>
        </#if>

        <#if searchedProperty?string != property?string>
            <#return false>
        </#if>

    </#list>

    <#return true>

</#function>

<#function are_same_path path searchedPath>
    <#return path?size == searchedPath?size && is_subpath(path, searchedPath)>
</#function>
</script>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" type="image/png" sizes="32x32" href="${url.resourcesPath}/dist/favicon-32x32.png">
      <script type="module" crossorigin="" src="${url.resourcesPath}/dist/assets/index-CZQagKpW.js"></script>
    </head>

    <body>
        <div id="root"></div>

    

</body></html>