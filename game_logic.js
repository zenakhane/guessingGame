 Game => {
     let guess = randomSelection => {
         if (randomSelection > 5) {
             'Your guess is too low'

         } else if (randomSelection < 100) {
             'Your guess is too high'
         } else if (randomSelection = 50) {
             'Correct, the secret number is'
         }

         return {
             guess,
         }
     }
 };