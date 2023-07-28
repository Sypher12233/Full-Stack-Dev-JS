const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
      return 9;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 4;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 7;
      break;
  }
};


const getActualSleepHours = () => {
  totalHours = getSleepHours('MOnday') +
               getSleepHours('tuesdAy') +
               getSleepHours('weDneSday') +
               getSleepHours('thursdaY') +
               getSleepHours('FridAy') +
               getSleepHours('SATURDAY') +
               getSleepHours('SUNDAY');
  return totalHours;
};

function getIdealSleepHours(idealHours = 9) {
  idealHours *= 7;
  return idealHours;
};

const calculateSleepDebt = () => {
  hoursSlept = getActualSleepHours();
  idealHours = getIdealSleepHours();
  debt = idealHours - hoursSlept;
  more = hoursSlept - idealHours;
  
  if (hoursSlept < idealHours) {
    return `You got ${debt} hours less sleep, TIME TO SLEEP!`;
  } else if (hoursSlept > idealHours) {
    return `You slept ${more} hours more, `;
  } else if (hoursSlept === idealHours) {
    return `You got Perfect Sleep this week, CHEER UP!!!`;
  }
};

console.log(calculateSleepDebt());