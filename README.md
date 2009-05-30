Nitro
=====

Nitro is a Web Application Framework. 
    
Nitro applications are implemented with JavaScript and leverage (strict) Web Standards like XHTML/HTML, CSS, HTTP, XML, XSLT, ECMAScript 3.0, MicroFormats, etc. Typically, Nitro applications are a collection of programs that run on the server *and* the client. A control program dispatches work to the application programs and aggregates their output. The application's output is consumed by modern web browsers, web services or other applications through a standard REST interface.

Nitro is a higher level application framework build on top of the lower level Jack web server gateway interface and Narwhal standad JavaScript library. Leveraging Jack's simplicity and flexibility, Nitro is implemented as a collection of Jack middleware apps. Nitro provides 'just-enough' functionality on top of Jack by implementing a small and carefully designed library for web application development. Moreover, Nitro runs on top of Rhino and has full access on all Java libararies.

Homepage: http://nitrojs.org/

Source & Download: http://github.com/gmosx/nitro/

Mailing list: http://groups.google.com/group/nitro-devel

Issue tracking: http://github.com/gmosx/nitro/issues

IRC: #nitro on irc.freenode.net    


Getting Started
---------------

At the moment, Nitro requires customized versions of Narwhal and Jack. Please get patched versions from:
    
http://github.com/gmosx/jack
http://github.com/gmosx/narwhal

After you have installed Narwhal and Jack you are ready to run the simple example:

$ cd examples/simple
$ jackup 

The application will start listening at localhost:8080, so use your favourite browser (FireFox?) to verify that everything works correctly.


Directory structure
-------------------

/lib:
    Contains the implementation of standard library code that complements the Narwhal library
    
/src/nitro:
    Contains the implementation of the web application framework
    
/examples/simple:
    Contains a simple example        

/examples/blog:
    A sophisticated example, implements a real world blog.
    
    
Caveats
-------

Nitro is under intense development. Changes to the API are to be expected.        


Credits
-------

George Moschovitis <george-moschovitis@gmosx.com>


License
-------

Copyright (c) 2009 George Moschovitis, http://gmosx.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.