# nicks-cors-test
Simple HTML & JS Tool to quickly test CORS locally.


# Blog
https://medium.com/pareture/simple-local-cors-test-tool-544f108311c5


# CORS
Cross Origin Resource Sharing (CORS) is a simple and powerful mechanism which uses HTTP headers so that a server knows where a request is coming from and can choose whether or not to accept the request based on this.

Better information here:
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

The header which is provided as the argument is the ‘Origin’. This is set by the User-Agent (the thing that makes the request) and can not be overridden (security enforced).

The server with the resource uses the ‘Access-Control-Allow-Origin’ header to whitelist particular domains or allow requests from all origins using the wildcard:

```
Access-Control-Allow-Origin: *
```

# Tool
You can use this simple tool to test making CORS requests and examine the outcome.

* The HTML file is simply a shell to call the Javascript function.
* The JS file executes an AJAX request based on the values you adjust.


# Guide
* Download the files and open the HTML page in a browser. You will be faced with a blank screen and nothing else.
* Open the browser tools: Right-click > Inspect > Console.
* Open the JS file in a text editor.
* Adjust the ‘url’ values depending on the resource you are trying to obtain. We can see that `https://google.com` has been blocked due to the CORS policy.
* Adjust and save the JS file like so: `url: "https://api.github.com",`.
* Refresh the browser. And we see that the github api has wildcard CORS enabled.
