// Set up a global Imbo-namespace and signify that we're not in Node
Imbo = { Node: false, Version: '0.3.3' };

(function(Imbo, undef) {

    /**
     * Javascript MD5 library - version 0.4
     * Coded (2011) by Luigi Galli - LG@4e71.org - http://faultylabs.com
     */
    var faultylabs={};faultylabs.MD5=function(h){function c(s){var r=(s>>>0).toString(16);return"00000000".substr(0,8-r.length)+r}function b(t){var r=[];for(var s=0;s<t.length;s++){r=r.concat(o(t[s]))}return r}function q(s){var r=[];for(var t=0;t<8;t++){r.push(s&255);s=s>>>8}return r}function k(s,r){return((s<<r)&4294967295)|(s>>>(32-r))}function l(r,t,s){return(r&t)|(~r&s)}function i(r,t,s){return(s&r)|(~s&t)}function e(r,t,s){return r^t^s}function d(r,t,s){return t^(r|~s)}function n(r,s){return(r[s+3]<<24)|(r[s+2]<<16)|(r[s+1]<<8)|(r[s])}function o(v){var r=[];for(var u=0;u<v.length;u++){if(v.charCodeAt(u)<=127){r.push(v.charCodeAt(u))}else{var t=encodeURIComponent(v.charAt(u)).substr(1).split("%");for(var s=0;s<t.length;s++){r.push(parseInt(t[s],16))}}}return r}function p(s,r,z,y){var x="";var w=0;var u=0;for(var v=3;v>=0;v--){u=arguments[v];w=(u&255);u=u>>>8;w=w<<8;w=w|(u&255);u=u>>>8;w=w<<8;w=w|(u&255);u=u>>>8;w=w<<8;w=w|u;x=x+c(w)}return x}function j(t){var r=new Array(t.length);for(var s=0;s<t.length;s++){r[s]=t[s]}return r}var g=null;var m=null;if(typeof h=="string"){g=o(h)}else{if(h.constructor==Array){if(h.length===0){g=h}else{if(typeof h[0]=="string"){g=b(h)}else{if(typeof h[0]=="number"){g=h}else{m=typeof h[0]}}}}else{if(typeof ArrayBuffer!="undefined"){if(h instanceof ArrayBuffer){g=j(new Uint8Array(h))}else{if((h instanceof Uint8Array)||(h instanceof Int8Array)){g=j(h)}else{if((h instanceof Uint32Array)||(h instanceof Int32Array)||(h instanceof Uint16Array)||(h instanceof Int16Array)||(h instanceof Float32Array)||(h instanceof Float64Array)){g=j(new Uint8Array(h.buffer))}else{m=typeof h}}}}else{m=typeof h}}}if(m){alert("MD5 type mismatch, cannot process "+m)}function a(s,r){return 4294967295&(s+r)}return f();function f(){function u(H,I,F,E){var G=x;x=z;z=B;B=a(B,k(a(D,a(H,a(I,F))),E));D=G}var s=g.length;g.push(128);var v=g.length%64;if(v>56){for(var t=0;t<(64-v);t++){g.push(0)}v=g.length%64}for(t=0;t<(56-v);t++){g.push(0)}g=g.concat(q(s*8));var C=1732584193;var A=4023233417;var y=2562383102;var w=271733878;var D=0,B=0,z=0,x=0;for(t=0;t<g.length/64;t++){D=C;B=A;z=y;x=w;var r=t*64;u(l(B,z,x),3614090360,n(g,r),7);u(l(B,z,x),3905402710,n(g,r+4),12);u(l(B,z,x),606105819,n(g,r+8),17);u(l(B,z,x),3250441966,n(g,r+12),22);u(l(B,z,x),4118548399,n(g,r+16),7);u(l(B,z,x),1200080426,n(g,r+20),12);u(l(B,z,x),2821735955,n(g,r+24),17);u(l(B,z,x),4249261313,n(g,r+28),22);u(l(B,z,x),1770035416,n(g,r+32),7);u(l(B,z,x),2336552879,n(g,r+36),12);u(l(B,z,x),4294925233,n(g,r+40),17);u(l(B,z,x),2304563134,n(g,r+44),22);u(l(B,z,x),1804603682,n(g,r+48),7);u(l(B,z,x),4254626195,n(g,r+52),12);u(l(B,z,x),2792965006,n(g,r+56),17);u(l(B,z,x),1236535329,n(g,r+60),22);u(i(B,z,x),4129170786,n(g,r+4),5);u(i(B,z,x),3225465664,n(g,r+24),9);u(i(B,z,x),643717713,n(g,r+44),14);u(i(B,z,x),3921069994,n(g,r),20);u(i(B,z,x),3593408605,n(g,r+20),5);u(i(B,z,x),38016083,n(g,r+40),9);u(i(B,z,x),3634488961,n(g,r+60),14);u(i(B,z,x),3889429448,n(g,r+16),20);u(i(B,z,x),568446438,n(g,r+36),5);u(i(B,z,x),3275163606,n(g,r+56),9);u(i(B,z,x),4107603335,n(g,r+12),14);u(i(B,z,x),1163531501,n(g,r+32),20);u(i(B,z,x),2850285829,n(g,r+52),5);u(i(B,z,x),4243563512,n(g,r+8),9);u(i(B,z,x),1735328473,n(g,r+28),14);u(i(B,z,x),2368359562,n(g,r+48),20);u(e(B,z,x),4294588738,n(g,r+20),4);u(e(B,z,x),2272392833,n(g,r+32),11);u(e(B,z,x),1839030562,n(g,r+44),16);u(e(B,z,x),4259657740,n(g,r+56),23);u(e(B,z,x),2763975236,n(g,r+4),4);u(e(B,z,x),1272893353,n(g,r+16),11);u(e(B,z,x),4139469664,n(g,r+28),16);u(e(B,z,x),3200236656,n(g,r+40),23);u(e(B,z,x),681279174,n(g,r+52),4);u(e(B,z,x),3936430074,n(g,r),11);u(e(B,z,x),3572445317,n(g,r+12),16);u(e(B,z,x),76029189,n(g,r+24),23);u(e(B,z,x),3654602809,n(g,r+36),4);u(e(B,z,x),3873151461,n(g,r+48),11);u(e(B,z,x),530742520,n(g,r+60),16);u(e(B,z,x),3299628645,n(g,r+8),23);u(d(B,z,x),4096336452,n(g,r),6);u(d(B,z,x),1126891415,n(g,r+28),10);u(d(B,z,x),2878612391,n(g,r+56),15);u(d(B,z,x),4237533241,n(g,r+20),21);u(d(B,z,x),1700485571,n(g,r+48),6);u(d(B,z,x),2399980690,n(g,r+12),10);u(d(B,z,x),4293915773,n(g,r+40),15);u(d(B,z,x),2240044497,n(g,r+4),21);u(d(B,z,x),1873313359,n(g,r+32),6);u(d(B,z,x),4264355552,n(g,r+60),10);u(d(B,z,x),2734768916,n(g,r+24),15);u(d(B,z,x),1309151649,n(g,r+52),21);u(d(B,z,x),4149444226,n(g,r+16),6);u(d(B,z,x),3174756917,n(g,r+44),10);u(d(B,z,x),718787259,n(g,r+8),15);u(d(B,z,x),3951481745,n(g,r+36),21);C=a(C,D);A=a(A,B);y=a(y,z);w=a(w,x)}return p(w,y,A,C).toUpperCase()}};

    /**
     * crypto-js - http://code.google.com/p/crypto-js/
     */
    var CryptoJS=function(h,i){var e={},f=e.lib={},l=f.Base=function(){function a(){}return{extend:function(j){a.prototype=this;var d=new a;j&&d.mixIn(j);d.$super=this;return d},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var d in a)a.hasOwnProperty(d)&&(this[d]=a[d]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.$super.extend(this)}}}(),k=f.WordArray=l.extend({init:function(a,j){a=
    this.words=a||[];this.sigBytes=j!=i?j:4*a.length},toString:function(a){return(a||m).stringify(this)},concat:function(a){var j=this.words,d=a.words,c=this.sigBytes,a=a.sigBytes;this.clamp();if(c%4)for(var b=0;b<a;b++)j[c+b>>>2]|=(d[b>>>2]>>>24-8*(b%4)&255)<<24-8*((c+b)%4);else if(65535<d.length)for(b=0;b<a;b+=4)j[c+b>>>2]=d[b>>>2];else j.push.apply(j,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,b=this.sigBytes;a[b>>>2]&=4294967295<<32-8*(b%4);a.length=h.ceil(b/4)},clone:function(){var a=
    l.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var b=[],d=0;d<a;d+=4)b.push(4294967296*h.random()|0);return k.create(b,a)}}),o=e.enc={},m=o.Hex={stringify:function(a){for(var b=a.words,a=a.sigBytes,d=[],c=0;c<a;c++){var e=b[c>>>2]>>>24-8*(c%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c+=2)d[c>>>3]|=parseInt(a.substr(c,2),16)<<24-4*(c%8);return k.create(d,b/2)}},q=o.Latin1={stringify:function(a){for(var b=
    a.words,a=a.sigBytes,d=[],c=0;c<a;c++)d.push(String.fromCharCode(b[c>>>2]>>>24-8*(c%4)&255));return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c++)d[c>>>2]|=(a.charCodeAt(c)&255)<<24-8*(c%4);return k.create(d,b)}},r=o.Utf8={stringify:function(a){try{return decodeURIComponent(escape(q.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return q.parse(unescape(encodeURIComponent(a)))}},b=f.BufferedBlockAlgorithm=l.extend({reset:function(){this._data=k.create();
    this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=r.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,d=b.words,c=b.sigBytes,e=this.blockSize,g=c/(4*e),g=a?h.ceil(g):h.max((g|0)-this._minBufferSize,0),a=g*e,c=h.min(4*a,c);if(a){for(var f=0;f<a;f+=e)this._doProcessBlock(d,f);f=d.splice(0,a);b.sigBytes-=c}return k.create(f,c)},clone:function(){var a=l.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});f.Hasher=b.extend({init:function(){this.reset()},
    reset:function(){b.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);this._doFinalize();return this._hash},clone:function(){var a=b.clone.call(this);a._hash=this._hash.clone();return a},blockSize:16,_createHelper:function(a){return function(b,d){return a.create(d).finalize(b)}},_createHmacHelper:function(a){return function(b,d){return g.HMAC.create(a,d).finalize(b)}}});var g=e.algo={};return e}(Math);
    (function(h){var i=CryptoJS,e=i.lib,f=e.WordArray,e=e.Hasher,l=i.algo,k=[],o=[];(function(){function e(a){for(var b=h.sqrt(a),d=2;d<=b;d++)if(!(a%d))return!1;return!0}function f(a){return 4294967296*(a-(a|0))|0}for(var b=2,g=0;64>g;)e(b)&&(8>g&&(k[g]=f(h.pow(b,0.5))),o[g]=f(h.pow(b,1/3)),g++),b++})();var m=[],l=l.SHA256=e.extend({_doReset:function(){this._hash=f.create(k.slice(0))},_doProcessBlock:function(e,f){for(var b=this._hash.words,g=b[0],a=b[1],j=b[2],d=b[3],c=b[4],h=b[5],l=b[6],k=b[7],n=0;64>
    n;n++){if(16>n)m[n]=e[f+n]|0;else{var i=m[n-15],p=m[n-2];m[n]=((i<<25|i>>>7)^(i<<14|i>>>18)^i>>>3)+m[n-7]+((p<<15|p>>>17)^(p<<13|p>>>19)^p>>>10)+m[n-16]}i=k+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&h^~c&l)+o[n]+m[n];p=((g<<30|g>>>2)^(g<<19|g>>>13)^(g<<10|g>>>22))+(g&a^g&j^a&j);k=l;l=h;h=c;c=d+i|0;d=j;j=a;a=g;g=i+p|0}b[0]=b[0]+g|0;b[1]=b[1]+a|0;b[2]=b[2]+j|0;b[3]=b[3]+d|0;b[4]=b[4]+c|0;b[5]=b[5]+h|0;b[6]=b[6]+l|0;b[7]=b[7]+k|0},_doFinalize:function(){var e=this._data,f=e.words,b=8*this._nDataBytes,
    g=8*e.sigBytes;f[g>>>5]|=128<<24-g%32;f[(g+64>>>9<<4)+15]=b;e.sigBytes=4*f.length;this._process()}});i.SHA256=e._createHelper(l);i.HmacSHA256=e._createHmacHelper(l)})(Math);
    (function(){var h=CryptoJS,i=h.enc.Utf8;h.algo.HMAC=h.lib.Base.extend({init:function(e,f){e=this._hasher=e.create();"string"==typeof f&&(f=i.parse(f));var h=e.blockSize,k=4*h;f.sigBytes>k&&(f=e.finalize(f));for(var o=this._oKey=f.clone(),m=this._iKey=f.clone(),q=o.words,r=m.words,b=0;b<h;b++)q[b]^=1549556828,r[b]^=909522486;o.sigBytes=m.sigBytes=k;this.reset()},reset:function(){var e=this._hasher;e.reset();e.update(this._iKey)},update:function(e){this._hasher.update(e);return this},finalize:function(e){var f=
    this._hasher,e=f.finalize(e);f.reset();return f.finalize(this._oKey.clone().concat(e))}})})();

    /**
     * Do we have a BlobBuilder? SendAsBinary?
     */
    if (!window.BlobBuilder) {
        window.BlobBuilder = window.WebKitBlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder;
    }

    if (typeof XMLHttpRequest.prototype.sendAsBinary !== 'function') {
        XMLHttpRequest.prototype.sendAsBinary = function(text) {
            var buffer = Imbo.Browser.getArrayBuffer(text);
            var data   = null;

            try {
                if (typeof Blob !== 'undefined' && typeof DataView !== 'undefined') {
                    var dataView = new DataView(buffer);
                    data = new Blob([dataView]);
                } else if (typeof Blob !== 'undefined') {
                    data = new Blob([buffer]);
                }
            } catch (e) {
                data = null;
            }

            if (!data) {
                var bb = new BlobBuilder();
                bb.append(buffer);
                data = bb.getBlob();
            }

            this.send(data);
        };
    }

    // Set up our abstractions
    Imbo.Browser = {};

    // Turn a string into an ArrayBuffer
    Imbo.Browser.getArrayBuffer = function(text) {
        var data = new ArrayBuffer(text.length);
        var ui8a = new Uint8Array(data, 0);
        for (var i = 0; i < text.length; i++) ui8a[i] = (text.charCodeAt(i) & 0xff);
        return data;
    };

    Imbo.Browser.md5 = function(buffer) {
        if (typeof buffer !== 'object') {
            buffer = Imbo.Browser.getArrayBuffer(buffer);
        }

        return faultylabs.MD5(buffer).toLowerCase();
    };

    Imbo.Browser.sha256 = function(key, data) {
        return CryptoJS.HmacSHA256(data, key).toString();
    };

    Imbo.Browser.getImageBlob = function(input, callback) {
        if (input.constructor.name == 'File') {
            return Imbo.Browser.getContentsFromFile(input, callback);
        }

        return callback(undef, input);
    };

    Imbo.Browser.getContentsFromFile = function(file, callback) {
        var reader = new FileReader();
        reader.onload = function(e) {
            return callback(undef, e.target.result);
        };
        reader.readAsBinaryString(file);
    };

    Imbo.Browser.getContentsFromUrl = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                callback(undef, xhr.responseText);
            }
        };
        xhr.send(null);
    };

})(Imbo);
// Compatability layer for browsers


(function(env, undef) {

    var headers = {
        'Accept'    : 'application/json,image/*',
        'User-Agent': 'imboclient-js ' + Imbo.Version + ' (' + (env || navigator.userAgent) + ')'
    };

    Imbo.Compat = {
        sha256: function(key, data) {
            if (Imbo.Node) {
                return crypto.createHmac('sha256', key).update(data).digest('hex');
            }

            return Imbo.Browser.sha256(key, data);
        },

        md5: function(buffer, callback, isString) {
            // Browser?
            if (!Imbo.Node) {
                if (buffer instanceof File) {
                    return Imbo.Browser.getContentsFromFile(buffer, function(err, data) {
                        Imbo.Compat.md5(data, callback);
                    });
                }

                return callback(undef, Imbo.Browser.md5(buffer), {
                    size: buffer.length
                });
            }

            
        },

        request: function(method, uri, data, callback) {
            method = method.toUpperCase();
            if (!callback && (data.complete || typeof data === 'function')) {
                callback = data;
                data = null;
            }

            var onComplete  = callback.complete || callback;
            var jsonRequest = (data && data.constructor && data.constructor.name == 'Object');
            var reqHeaders  = (method == 'PUT') ? Imbo.Compat.getPutHeaders(data ? data.length : 0) : headers;

            if (jsonRequest) {
                reqHeaders['Content-Type'] = 'application/json';
                data = JSON.stringify(data);
            }

            if (Imbo.Node) {
                
            }

            // Browser environment
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status !== 0 && onComplete) {
                    onComplete(undef, Imbo.Compat.requestDone(xhr, jsonRequest));
                }
            };
            xhr.open(method, uri, true);
            xhr.setRequestHeader('Accept', headers.Accept);
            xhr.onerror = function() {
                onComplete('XMLHttpRequest failed - CORS disabled?');
            };

            if (callback.progress) {
                xhr.upload.addEventListener('progress', callback.progress, false);
            }
            if (callback.uploadComplete) {
                xhr.upload.addEventListener('load', callback.uploadComplete, false);
            }
            if (method == 'PUT') {
                xhr.sendAsBinary(data);
            } else {
                xhr.send(data);
            }
        },

        requestDone: function(xhr, json) {
            var resHeaders = {
                'Content-Type': xhr.getResponseHeader('Content-Type'),
                'Last-Modified': xhr.getResponseHeader('Last-Modified'),
                'X-Imbo-Error-Internalcode': xhr.getResponseHeader('X-Imbo-Error-Internalcode')
            };

            for (var key in resHeaders) {
                if (!resHeaders[key]) {
                    delete resHeaders[key];
                }
            }

            if (resHeaders['Content-Type'] == 'application/json') {
                json = true;
            }

            return {
                statusCode: xhr.status,
                body      : json ? JSON.parse(xhr.responseText) : xhr.responseText,
                headers   : resHeaders
            };
        },

        getPutHeaders: function(length) {
            var putHeaders = {};
            for (var key in headers) {
                putHeaders[key] = headers[key];
            }

            if (length) {
                putHeaders['Content-Length'] = length;
            }
            return putHeaders;
        },

        getContentsFromUrl: function(url, callback) {
            if (!Imbo.Node) {
                return Imbo.Browser.getContentsFromUrl(url, callback);
            }

            
        },

        getContents: function(file, callback) {
            if (typeof file == 'string' && Imbo.Node) {
                return fs.readFile(file, 'binary', function(err, data) {
                    if (err && err.code == 'ENOENT') {
                        return callback('File does not exist (' + err.path + ')');
                    }

                    callback(err, data);
                });
            } else if (!Imbo.Node) {
                return Imbo.Browser.getContentsFromFile(file, callback);
            }

            return callback('getContents() - not sure what to do with the passed file');
        }
    };

    

})(typeof env === 'undefined' ? null : env);
(function(Imbo, undef) {

    Imbo.Compat = Imbo.Compat || require('./compat');

    /**
     * Imbo URL helper
     */
    function ImboUrl(baseUrl, publicKey, privateKey, imageIdentifier, path) {
        this.transformations = [];
        this.baseUrl = baseUrl;
        this.publicKey = publicKey;
        this.imageIdentifier = imageIdentifier;
        this.privateKey = privateKey;
        this.path = path || '';
    }

    ImboUrl.prototype.border = function(color, width, height) {
        color  = (color || '000000').replace(/^#/, '');
        width  = parseInt(isNaN(width)  ? 1 : width,  10);
        height = parseInt(isNaN(height) ? 1 : height, 10);
        return this.append('border:color=' + color + ',width=' + width + ',height=' + height);
    };

    ImboUrl.prototype.compress = function(quality) {
        quality = parseInt(quality, 10);
        return this.append('compress:quality=' + (quality ? quality : 75));
    };

    ImboUrl.prototype.convert = function(type) {
        this.imageIdentifier  = this.imageIdentifier.substr(0, 32) + '.' + type;
        return this;
    };

    ImboUrl.prototype.gif = function() {
        return this.convert('gif');
    };

    ImboUrl.prototype.jpg = function() {
        return this.convert('jpg');
    };

    ImboUrl.prototype.png = function() {
        return this.convert('png');
    };

    ImboUrl.prototype.crop = function(x, y, width, height) {
        return this.append('crop:x=' + x + ',y=' + y + ',width=' + width + ',height=' + height);
    };

    ImboUrl.prototype.desaturate = function() {
        return this.append('desaturate');
    };

    ImboUrl.prototype.flipHorizontally = function() {
        return this.append('flipHorizontally');
    };

    ImboUrl.prototype.flipVertically = function() {
        return this.append('flipVertically');
    };

    ImboUrl.prototype.maxSize = function(width, height) {
        var params = [];

        if (width) {
            params.push('width='  + parseInt(width,  10));
        }

        if (height) {
            params.push('height=' + parseInt(height, 10));
        }

        return this.append('maxSize:' + params.join(','));
    };

    ImboUrl.prototype.resize = function(width, height) {
        var params = [];

        if (width) {
            params.push('width='  + parseInt(width,  10));
        }

        if (height) {
            params.push('height=' + parseInt(height, 10));
        }

        return this.append('resize:' + params.join(','));
    };

    ImboUrl.prototype.rotate = function(angle, bg) {
        if (isNaN(angle)) {
            return this;
        }

        bg = (bg || '000000').replace(/^#/, '');
        return this.append('rotate:angle=' + angle + ',bg=' + bg);
    };

    ImboUrl.prototype.sepia = function(threshold) {
        threshold = parseInt(threshold, 10);
        return this.append('sepia:threshold=' + (threshold ? threshold : 80));
    };

    ImboUrl.prototype.thumbnail = function(width, height, fit) {
        return this.append('thumbnail:width=' + (width || 50) + ',height=' + (height || 50) + ',fit=' + (fit || 'outbound'));
    };

    ImboUrl.prototype.transpose = function() {
        return this.append('transpose');
    };

    ImboUrl.prototype.transverse = function() {
        return this.append('transverse');
    };

    ImboUrl.prototype.reset = function() {
        this.imageIdentifier = this.imageIdentifier.substr(0, 32);
        this.transformations = [];
        return this;
    };

    ImboUrl.prototype.append = function(part) {
        this.transformations.push(encodeURIComponent(part));
        return this;
    };

    ImboUrl.prototype.getAccessToken = function(url) {
        return Imbo.Compat.sha256(this.privateKey, url);
    };

    ImboUrl.prototype.getQueryString = function() {
        var query = '';
        if (this.transformations.length) {
            // We have some transformations. Generate a transformation key that will be sent to the
            // server so the server can verify if the transformations are valid or not.
            query = 't[]=' + this.transformations.reduce(function(query, element) {
                return query + '&t[]=' + element;
            });
        }

        return query;
    };

    ImboUrl.prototype.getUrl = function() {
        var url = this.baseUrl + '/users/' + this.publicKey + '/images/' + (this.imageIdentifier || '') + this.path;
        url = url.replace(/\/$/, '');

        var qs    = this.getQueryString();
        if (qs.length) {
            url += '?' + qs;
        }

        var token = this.getAccessToken(url, this.privateKey);

        return url + (qs.length ? '&' : '?') + 'accessToken=' + token;
    };

    ImboUrl.prototype.toString = function() {
        return this.getUrl();
    };

    if (typeof module !== 'undefined') {
        module.exports = ImboUrl;
    }

    Imbo.Url = ImboUrl;
    return ImboUrl;
})(typeof Imbo !== 'undefined' ? Imbo : {});


(function(Imbo, undef) {

    var ImboClient = function(serverUrls, publicKey, privateKey) {
        this.options = {
            hosts:      this.parseUrls(serverUrls),
            publicKey:  publicKey,
            privateKey: privateKey
        };
    };

    var getErrorMessage = function(res) {
        if (res && res.body && res.body.error) {
            return res.body.error.message;
        } else if (res && res.headers) {
            return res.headers['X-Imbo-Error-Internalcode'] || res.statusCode;
        } else if (res) {
            return res;
        }

        return 'Unknown error';
    };

    /**
     * Base/core methods
     */
    ImboClient.prototype.getImageIdentifier = function(image, callback) {
        return Imbo.Compat.md5(image, callback);
    };

    ImboClient.prototype.getImageIdentifierFromString = function(image, callback) {
        return Imbo.Compat.md5(image, callback, true);
    };

    ImboClient.prototype.getImageUrl = function(imageIdentifier) {
        var host = this.getHostForImageIdentifier(imageIdentifier);
        return new Imbo.Url(host, this.options.publicKey, this.options.privateKey, imageIdentifier);
    };

    ImboClient.prototype.getImagesUrl = function() {
        return this.getResourceUrl();
    };

    ImboClient.prototype.getResourceUrl = function(resourceIdentifier, path) {
        return new Imbo.Url(this.options.hosts[0], this.options.publicKey, this.options.privateKey, resourceIdentifier, path);
    };

    ImboClient.prototype.getSignedResourceUrl = function(method, url, date) {
        var timestamp = (date || new Date()).toISOString().replace(/\.\d+Z$/, 'Z');
        var signature = this.generateSignature(method, url.toString(), timestamp);

        var qs = url.toString().indexOf('?') > -1 ? '&' : '?';
        qs += 'signature='  + encodeURIComponent(signature);
        qs += '&timestamp=' + encodeURIComponent(timestamp);

        return url + qs;
    };

    ImboClient.prototype.generateSignature = function(method, url, timestamp) {
        var data = [method, url, this.options.publicKey, timestamp].join('|');
        var signature = Imbo.Compat.sha256(this.options.privateKey, data);
        return signature;
    };

    ImboClient.prototype.getHostForImageIdentifier = function(imageIdentifier) {
        var dec = parseInt(imageIdentifier.slice(0, 2), 16);
        return this.options.hosts[dec % this.options.hosts.length];
    };

    /**
     * Parse an array of URLs, stripping excessive parts
     *
     * @param  array|string urls
     * @return array
     */
    ImboClient.prototype.parseUrls = function(urls) {
        // Accept string for host, if user only specifies one
        if (typeof urls === 'string') {
            urls = [urls];
        }

        // Strip out any unnecessary parts
        var serverUrls = [];
        for (var i = 0; i < urls.length; i++) {
            serverUrls.push(urls[i].replace(/:80(\/|$)/, '$1').replace(/\/$/, ''));
        }

        return serverUrls;
    };

    /**
     * Image operations
     */
    ImboClient.prototype.headImage = function(imageIdentifier, callback) {
        var url = this.getResourceUrl(imageIdentifier), undef;

        Imbo.Compat.request('HEAD', url.toString(), function(err, res) {
            if (err) {
                return callback(err, res);
            } else if (res.statusCode !== 200) {
                return callback(getErrorMessage(res), res);
            }
            return callback(undef, res);
        });
    };

    ImboClient.prototype.deleteImage = function(imgPath, callback) {
        var self = this;
        self.getImageIdentifier(imgPath, function(err, imageIdentifier) {
            if (err) {
                return callback(err);
            }

            self.deleteImageByIdentifier(imageIdentifier, callback);
        });
    };

    ImboClient.prototype.deleteImageByIdentifier = function(imageIdentifier, callback) {
        var url = this.getSignedResourceUrl('DELETE', this.getResourceUrl(imageIdentifier));

        Imbo.Compat.request('DELETE', url, function(err, res) {
            if (err || (res && res.statusCode != 200)) {
                return callback(err || getErrorMessage(res), res);
            }

            callback(undef, res);
        });
    };

    ImboClient.prototype.imageIdentifierExists = function(identifier, callback) {
        this.headImage(identifier, function(err, res) {
            if (err && (err == 404 || (res && res.statusCode == 404))) {
                return callback(undef, false, identifier);
            } else if (err) {
                return callback(err);
            } else if (res && res.statusCode != 404 && res.statusCode != 200) {
                return callback(getErrorMessage(res));
            }

            callback(undef, res.statusCode == 200, identifier);
        });
    };

    ImboClient.prototype.imageExists = function(imgPath, callback) {
        var self = this;
        self.getImageIdentifier(imgPath, function(err, imageIdentifier) {
            if (err) {
                return callback(err);
            }

            self.imageIdentifierExists(imageIdentifier, callback);
        });
    };

    ImboClient.prototype.addImageFromBlob = function(blob, callback) {
        var self = this, onComplete = callback.complete || callback;
        var start = Date.now();
        self.getImageIdentifierFromString(blob, function(err, imageIdentifier) {
            if (err) {
                return onComplete(err);
            }

            var url = self.getSignedResourceUrl('PUT', self.getResourceUrl(imageIdentifier));

            // Set up PUT-request
            Imbo.Compat.request('PUT', url, blob, {
                complete: function(err, res) {
                    var identifier = res && res.body ? res.body.imageIdentifier : imageIdentifier;
                    if (err) {
                        return onComplete(err, identifier, res);
                    } else if (res.statusCode != 201) {
                        return onComplete(getErrorMessage(res), identifier, res);
                    }

                    return onComplete(undef, identifier, res);
                },
                progress: callback.progress || null,
                uploadComplete: callback.uploadComplete || null
            });
        });
    };

    /**
     * Add a new image to the server (from filesystem)
     *
     * @param {string|File}  path     Path to the local image, or an instance of File
     * @param {Function}     callback Function to call when image has been uploaded
     */
    ImboClient.prototype.addImage = function(path, callback) {
        var self = this;
        Imbo.Compat.getContents(path, function(err, data) {
            if (err) {
                return callback(err);
            }

            self.addImageFromBlob(data, callback);
        });
    };

    ImboClient.prototype.addImageFromUrl = function(url, callback) {
        var self = this;
        Imbo.Compat.getContentsFromUrl(url, function(err, data) {
            if (err) {
                return callback(err);
            }

            self.addImageFromBlob(data, callback);
        });
    };

    /**
     * Metadata methods
     */
    ImboClient.prototype.getMetadata = function(imageIdentifier, callback) {
        var url = this.getResourceUrl(imageIdentifier, '/meta');
        Imbo.Compat.request('GET', url.toString(), function(err, res) {
            if (err || (res && res.statusCode != 200)) {
                return callback(err || getErrorMessage(res), null, res);
            }

            callback(undef, res.body, res);
        });
    };

    ImboClient.prototype.deleteMetadata = function(imageIdentifier, callback) {
        var url = this.getSignedResourceUrl('DELETE', this.getResourceUrl(imageIdentifier, '/meta'));
        Imbo.Compat.request('DELETE', url, function(err, res) {
            if (err || (res && res.statusCode != 200)) {
                return callback(err || getErrorMessage(res), res);
            }

            callback(undef, res);
        });
    };

    ImboClient.prototype.editMetadata = function(imageIdentifier, data, callback) {
        var url = this.getSignedResourceUrl('POST', this.getResourceUrl(imageIdentifier, '/meta'));
        Imbo.Compat.request('POST', url, data, function(err, res) {
            if (err || (res && res.statusCode != 200 && res.statusCode != 201)) {
                return callback(err || getErrorMessage(res), res);
            }

            callback(undef, res);
        });
    };

    

    Imbo.Client = ImboClient;
    return ImboClient;
})(Imbo);