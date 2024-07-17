<#macro emailLayout>
   <html>

   <head>
      <style>
      .main-text {
         text-align: center;
         font-size: 14px;
         line-height: 1.5;
         width: 80%;
      }

      .reset-password-btn {
         background-color: #564d8f;
         color: #ffffff !important;
         display: inline-block;
         font-family: sans-serif;
         font-size: 14px;
         line-height: 40px;
         margin-bottom: 10px;
         text-align: center;
         text-decoration: none;
         width: 200px;
      }

      .small-link {
         color: #999;
         font-size: 11px;
         margin: 4px;
      }

      .centered-text {
         text-align: center;
      }
      </style>
   </head>

   <body>
      <div>
         <table border="0"
            cellpadding="0"
            cellspacing="0"
            height="100%"
            width="100%">
            <tbody>
               <tr>
                  <td align="center" valign="top" style="border-collapse: collapse">
                     <table border="0" cellpadding="0" cellspacing="20" width="600">
                        <tbody>
                           <tr>
                              <td align="center"
                                 valign="top"
                                 style="border-collapse: collapse">
                                 <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="
                                    background-color: #fff;
                                    background-image: none;
                                    background-repeat: repeat;
                                    background-position: top left;
                                    ">
                                    <tbody>
                                       <tr>
                                          <td align="center"
                                             valign="top"
                                             style="border-collapse: collapse">
                                             <table
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                height="90"
                                                width="100%"
                                                style="
                                                background-color: #ffffff;
                                                background-image: none;
                                                background-repeat: repeat;
                                                background-position: top left;
                                                ">
                                                <tbody>
                                                   <tr>
                                                      <td
                                                         align="center"
                                                         valign="middle"
                                                         style="border-collapse: collapse">
                                                         <a href="http://sniff.allpromotora.com.br/" target="_blank">
                                                            <img src="${url.resourcesPath}/img/logo.png" width="150" alt="Grupo Gab">
                                                         </a>
                                                      </td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td align="center"
                                             valign="top"
                                             style="border-collapse: collapse">
                                             <table
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                height="1"
                                                width="100%">
                                                <tbody>
                                                   <tr>
                                                      <td
                                                         align="center"
                                                         valign="middle"
                                                         style="
                                                         border-collapse: collapse;
                                                         background-color: #eeeeee;
                                                         "
                                                         width="249"></td>
                                                      <td
                                                         align="center"
                                                         valign="middle"
                                                         width="102"
                                                         style="
                                                         border-collapse: collapse;
                                                         background: linear-gradient(
                                                         to right,
                                                         #ff0000,
                                                         #9147ff
                                                         );
                                                         "></td>
                                                      <td
                                                         align="center"
                                                         valign="middle"
                                                         style="
                                                         border-collapse: collapse;
                                                         background-color: #eeeeee;
                                                         "
                                                         width="249"></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                       <#nested>
                                    </tbody>
                                 </table>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </body>

   </html>
</#macro>