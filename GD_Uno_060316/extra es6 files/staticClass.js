(function() {
  'use strict';

  class ClassName {
    constructor() {}

    static fStaticMethod() {
      console.log("This is a static method inside a class");
    }
  }

  /*-----===| Invoke Static Method |===-----*/
  ClassName.fStaticMethod();

}());
