var HashP = require("hashp").HashP;

var Response = exports.Response = require("jack/response").Response;

/**
 * Add response data. 
 * The specila X-Set-Data header is used to store response data. Downstream
 * apps can use the data to perform calculations or rendering.
 */
Response.prototype.setData = function(data) {
    var setData = this.getHeader("X-Set-Data");
    
    if (undefined == setData) {
        this.setHeader("X-Set-Data", data);
    } else {
        this.headers = HashP.merge(data, this.headers);
    }
}

/**
 * Send a HTTP redirect.
 */
Response.prototype.redirect = function(uri, status) {
    throw new Response.Redirect(uri, status);
}

/**
 * Redirect exception
 */ 
Response.Redirect = function(uri, status) {
    this.uri = uri;
    this.status = status;
}