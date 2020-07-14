(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{162:function(e){e.exports=JSON.parse('{"tags":["user"],"summary":"Logs user into the system","operationId":"loginUser","parameters":[{"name":"username","in":"query","description":"The user name for login","required":true,"schema":{"type":"string"}},{"name":"password","in":"query","description":"The password for login in clear text","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"successful operation","headers":{"X-Expires-After":{"description":"date in UTC when token expires","schema":{"type":"string","format":"date-time"}},"X-Rate-Limit":{"description":"calls per hour allowed by the user","schema":{"type":"integer","format":"int32"}}},"content":{"application/json":{"schema":{"type":"string"}},"application/xml":{"schema":{"type":"string"}}}},"400":{"description":"Invalid username/password supplied"}},"postman":{"name":"Logs user into the system","description":{"type":"text/plain"},"url":{"path":["user","login"],"host":["{{baseUrl}}"],"query":[{"description":{"content":"(Required) The user name for login","type":"text/plain"},"key":"username","value":"<string>"},{"description":{"content":"(Required) The password for login in clear text","type":"text/plain"},"key":"password","value":"<string>"}],"variable":[]},"method":"GET"},"method":"get","path":"/user/login","hashId":"logs-user-into-the-system","permalink":"/api/logs-user-into-the-system","previous":{"title":"Delete user","permalink":"/api/delete-user"},"next":{"title":"Logs out current logged in user session","permalink":"/api/logs-out-current-logged-in-user-session"}}')}}]);