import { Observable } from 'rxjs';

import { Subject } from 'rxjs';

import { ReplaySubject } from 'rxjs';

import { BehaviorSubject } from 'rxjs';

/// - cold
/// - creates copy of data 
/// - observer can not assign value



const observable1 = new Observable(a => {
  console.log('Lets initialize observable 1.')
  a.next('Message from Observable 1');
});


const observable2 = new Observable(a => {
  console.log('Lets initialize observable 2')
  a.next('Message from Observable 2');
});

observable2.subscribe(v => console.log(v));

console.log('No message from observable 1 since there is no subscriber/observer.');
console.log('------------ 🙏🏻 END of observable story 🙏🏻 ------------------');


/// - hot
/// - shares data
/// - observer can assign value
/// - subscriber will not receive data streamed before subscription
const subject = new Subject();
subject.subscribe(v => console.log('Observer 1', v));
subject.next('Message 1  from subejct');
subject.next('Message 2  from subejct');
subject.subscribe(v => console.log('Observer 2', v));

//subject.subscribe(v => console.log('Observer 3', v));

console.log('Only observer 1 is able to print all the values brodcated, because he started observing subject before any value brodcasted.');
console.log('------------ 🙏🏻 END of subject story 🙏🏻 ------------------');

/// - hot
/// - shares data
/// - observer can assign value
/// - subscriber will receive data streamed before subscription
/// - can set initial value
const behaviorSubject = new BehaviorSubject('Initial message from Behavior subject');

behaviorSubject.subscribe(v => console.log(v));
behaviorSubject.next('Message 1 from Behaviroal subject');
behaviorSubject.next('Message 2 from Behaviroal subject');
behaviorSubject.subscribe(v => console.log(v));




console.log('------------🙏🏻  END of Behavioral Subject story 🙏🏻 ------------------');



/// - hot
/// - shares data
/// - observer can assign value
/// - subscriber will receive data streamed before subscription
const replaySubject = new ReplaySubject();
replaySubject.subscribe(v => console.log('Observer 1', v));
replaySubject.next('Message 1  from replay subejct');
replaySubject.next('Message 2  from replay subejct');
replaySubject.subscribe(v => console.log('Observer 2', v));

console.log('both the observers are able to print all the values brodcated, even though they have subscribed the subject at different of time. you got my point.');
console.log('------------ 🙏🏻 END of Replay Subject story 🙏🏻 ------------------');





