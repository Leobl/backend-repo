# Backend-repo
 ### What is npm?
Npm makes it easy for JavaScript developers to share and reuse code, and makes it easy to update the code that you’re sharing, so you can build amazing things.
 ### In the beginning we get to the file and the make an 
 **npm init -y**
 ### Then, we create new files with the 
 **touch**
   * Those files are:
     * **index.js**         
      * **README.md**
      * **.eslintrc.json**
        * *here we type our preferences (called "rules")on how we want our general                                                       style of Js code to look like. Also, there is an option of taking                                                             already existing rules (airbnb style, google etc)*
      * **.eslintignore**
      * **.gitignore**
      * **.env**
    
    
 ##### *Generally, eslint is an open source project that provides pluggable linting utility for JS. A great explanation is:  [Coding train](https://www.youtube.com/watch?v=clzTwZgMlqE)*
 ### After the above files are installed, we are going to install the frameworks and packages that we are going to use with ### the command: 
 **npm i -S**
   * Those are:
     * **express**                      
       * which is our back-end framework that we use to create our routes and stuff like that so that we can handle data that comes in when a request is made to our server we want to be able to read the body
      * **http-errors**                  
        * *creates errors and messages for that: https://www.npmjs.com/package/http-errors*
      * **mongoose**                     
        * *interacts with our library, we create a connection with a MongoDB DB via URI and then we define a model through a Schema interface*
      * **superagent**
        * *takes care of the requests that are made*
      * **body-parser**
        * *so that we can handle data that comes in when a request is made to our server we want                                         to be able to read the body to handle HTTP POST request in Express.js version 4 and                                           above, you need to install middleware module called body-parser. body-parser extract                                         the entire body portion of an incoming request stream and exposes it on req.body.                                             The middleware was a part of Express.js earlier but now you have to install it separately.                                   This body-parser module parses the JSON, buffer, string and URL encoded data submitted                                       using HTTP POST request.*
       * **cors**
          * *Cross-origin Resource Sharing, a "piece" of middleware that we can add to our Express                                         pipeline and then makes an ajax request for a route even if they are not in the same                                         domain name, those requests*
       * **dotenv**
          * *A module that allows you to store configuration data (as DB info etc), to be separated                                       from the code and access those keys and values from process.env*
 ### Finally, run we need to install eslint (was explained before, but wasn't installed) and jest (which is a testing platform for JS) with:
 * **npm i -D jest eslint**
  
