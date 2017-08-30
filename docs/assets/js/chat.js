var rules =
[ 'Hello! I\'m Yve Bot.',
  { message: 'What\'s your name?',
    name: 'name',
    type: 'String',
    replyMessage: 'Thanks for the answer, {name}!',
    validators: [ { min: 4 }, { minWords: 1 } ] },
  { message: 'What city do you live in?',
    name: 'city',
    type: 'String' },
  { message: 'Thanks, wait for a moment.' },
  { sleep: 4000 },
  { message: 'Make your choice',
    name: 'choice',
    type: 'SingleChoice',
    options:
     [ { label: 'Button 1', value: 1 },
       { label: 'Button 2', value: 2 } ] },
  { message: 'Okay! You choose the button {choice}.' },
  { message: 'Which colors do you like?',
    name: 'colors',
    type: 'MultipleChoice',
    options: [ 'Blue', 'Red', 'Black', { label: 'Green' }, { value: 'Purple' } ] },
  { message: 'What you want to do?',
    type: 'SingleChoice',
    options: [ { label: 'Restart', next: 'name' }, 'Quit' ] },
  { message: 'Bye! :(', exit: true }
];

new YveBot(rules, { target: '.Chat' })
  .on('start', function() {
    document.querySelector('.Chat-loading').remove();
  })
  .on('end', function(output) {
    console.log(output);
  })
  .start();