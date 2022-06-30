const checkAir =  (samples, threshold) => {
  // Code here!

  let dirties = 0;

  samples.forEach(sample => {
    if (sample === 'dirty') {
      dirties += 1;      
    }
  });

  pollutionLevel = (dirties / samples.length) ;


  return pollutionLevel > threshold ? 'Polluted' : 'Clean';

};


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))