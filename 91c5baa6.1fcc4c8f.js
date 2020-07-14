(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{139:function(e){e.exports=JSON.parse('{"tags":["pet"],"summary":"Find pet by ID","description":"Returns a single pet","operationId":"getPetById","parameters":[{"name":"petId","in":"path","description":"ID of pet to return","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","required":["name","photoUrls"],"properties":{"id":{"type":"integer","format":"int64"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Category"}},"name":{"type":"string","example":"doggie"},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Tag"}}}}}},"application/xml":{"schema":{"type":"object","required":["name","photoUrls"],"properties":{"id":{"type":"integer","format":"int64"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Category"}},"name":{"type":"string","example":"doggie"},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Tag"}}}}}}}},"400":{"description":"Invalid ID supplied"},"404":{"description":"Pet not found"}},"security":[{"ApiKey":[]}],"postman":{"name":"Find pet by ID","description":{"content":"Returns a single pet","type":"text/plain"},"url":{"path":["pet",":petId"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ID of pet to return","type":"text/plain"},"type":"any","value":"<long>","key":"petId"}]},"header":[{"description":{"content":"","type":"text/plain"},"key":"api_key","value":""}],"method":"GET","auth":{"type":"noauth","noauth":[]}},"method":"get","path":"/pet/{petId}","hashId":"find-pet-by-id","permalink":"/api/find-pet-by-id","previous":{"title":"Recursive","permalink":"/api/"},"next":{"title":"Updates a pet in the store with form data","permalink":"/api/updates-a-pet-in-the-store-with-form-data"}}')}}]);