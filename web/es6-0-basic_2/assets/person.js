//import '../node_modules/core-js/shim';

/**
 * http://www.cnblogs.com/whitewolf/p/4357916.html
 *
 */

import CoreJs from 'core-js';

export default class Person {

  constructor( name ) {
    this.name = name;
  }

  sayHello() {
    return `Hello ${ this.name }!`;
  }

  sayHelloThreeTimes() {
    let hello = this.sayHello();
    return `${ hello } `.repeat(3);
  }
}