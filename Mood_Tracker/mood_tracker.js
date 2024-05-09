// Constants
const TIMER_DURATION = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
const STORAGE_KEY_MOOD_COUNTS = 'oodCounts';
const STORAGE_KEY_SELECTED_EMOTIONS = 'electedEmotions';
const STORAGE_KEY_LAST_SUBMISSION_TIMESTAMP = 'lastSubmissionTimestamp';
const STORAGE_KEY_TIMER_DURATION = 'timerDuration';

// Chart update function
function updateChart(moodCounts) {
  chart.data.labels = Object.keys(moodCounts);
  chart.data.datasets[0].data = Object.values(moodCounts);
  chart.update();
}

// Local storage functions
function getLocalStorageItem(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.error(`Error parsing local storage item: ${key}`);
    return null;
  }
}

function setLocalStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error setting local storage item: ${key}`);
  }
}

// Button disabling function
function disableButton(remainingTime) {
  submitBtn.disabled = true;
  submitBtn.textContent = `Submit (available in ${formatTime(remainingTime)})`;
}

// Dropdown functionality
$(document).ready(function() {
  $('.filter-dropdown').click(function(event) {
    event.stopPropagation();
    $(this).find('.filter-dropdown-menu').toggle();
  });

  $(document).click(function() {
    $('.filter-dropdown-menu').hide();
  });
});

// Filter function
function filterData(filterType) {
  const moodCounts = getLocalStorageItem(STORAGE_KEY_MOOD_COUNTS);
  if (!moodCounts) return;

  let filteredData;
  switch (filterType) {
    case 'all':
      filteredData = moodCounts;
      break;
    case 'week':
      // implement week filtering logic
      break;
    case 'month':
      // implement month filtering logic
      break;
    default:
      console.error(`Invalid filter type: ${filterType}`);
      return;
  }

  updateChart(filteredData);
}

// Add event listeners
$('.filter-dropdown-item').click(function() {
  const filterType = $(this).data('filter');
  filterData(filterType);
});

// Rest of the code remains the same
const ctx = document.getElementById('mood-chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Mood Tracker',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const submitBtn = document.getElementById('submit-btn');
const selectedEmotionsContainer = document.getElementById('selected-emotions');

// Retrieve mood counts from local storage
const storedMoodCounts = localStorage.getItem('moodCounts');
if (storedMoodCounts) {
  const moodCounts = JSON.parse(storedMoodCounts);
  chart.data.labels = Object.keys(moodCounts);
  chart.data.datasets[0].data = Object.values(moodCounts);
  chart.update();
}

// Retrieve selected emotions from local storage
const storedSelectedEmotions = localStorage.getItem('selectedEmotions');
if (storedSelectedEmotions) {
  const selectedEmotions = JSON.parse(storedSelectedEmotions);
  selectedEmotionsContainer.innerHTML = selectedEmotions.join(', ');
}

submitBtn.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('.option_item input[type="checkbox"]');
  const selectedMoods = [];
  const selectedEmotions = [];

  // Retrieve existing mood counts from local storage
  const storedMoodCounts = localStorage.getItem('moodCounts');
  let moodCounts = storedMoodCounts? JSON.parse(storedMoodCounts) : {};


  // Update the mood counts
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const emotionName = checkbox.nextElementSibling.querySelector('.name').textContent;
      selectedMoods.push(emotionName);
      if (moodCounts[emotionName]) {
        moodCounts[emotionName]++;
      } else {
        moodCounts[emotionName] = 1;
      }
    }
  });

  // Update chart data with emotion counts
  chart.data.labels = Object.keys(moodCounts);
  chart.data.datasets[0].data = Object.values(moodCounts);
  chart.update();

  // Save updated mood counts to local storage
  localStorage.setItem('moodCounts', JSON.stringify(moodCounts));

  // Update selected emotions container
  selectedMoods.forEach((emotion) => {
    selectedEmotions.push(`<div class="selected-emotion"><img src="http://127.0.0.1:5500/Mood_Tracker/emoji/${emotion.toLowerCase()}.PNG" alt="${emotion}">${emotion}</div>`);
  });
  selectedEmotionsContainer.innerHTML = selectedEmotions.join('');

  // Save selected emotions to local storage as an array
  const storedSelectedEmotions = localStorage.getItem('selectedEmotions');
  let selectedEmotionsArray = storedSelectedEmotions? JSON.parse(storedSelectedEmotions) : [];
  selectedEmotionsArray = [selectedMoods];
  localStorage.setItem('selectedEmotions', JSON.stringify(selectedEmotionsArray));

    // Set the last submission timestamp and timer duration
    const lastSubmissionTimestamp = Date.now();
    const timerDuration = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
    localStorage.setItem('lastSubmissionTimestamp', lastSubmissionTimestamp);
    localStorage.setItem('timerDuration', timerDuration);
  
    // Disable the button for 3 hours
    submitBtn.disabled = true;
    submitBtn.textContent = `Submit (available in ${formatTime(timerDuration)})`;
  
    // Start the timer
    const timerInterval = setInterval(() => {
      const remainingTime = timerDuration - (Date.now() - lastSubmissionTimestamp);
      if (remainingTime <= 0) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
        clearInterval(timerInterval);
      } else {
        submitBtn.textContent = `Submit (available in ${formatTime(remainingTime)})`;
      }
    }, 1000); // update every 1 second
});

// Format time function
function formatTime(time) {
  const hours = Math.floor(time / (60 * 60 * 1000));
  const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((time % (60 * 1000)) / 1000);
  return `${hours}h ${minutes}m ${seconds}s`;
}

window.addEventListener('load', () => {
  // Retrieve mood counts from local storage
  const storedMoodCounts = localStorage.getItem('moodCounts');
  if (storedMoodCounts) {
    const moodCounts = JSON.parse(storedMoodCounts);
    chart.data.labels = Object.keys(moodCounts);
    chart.data.datasets[0].data = Object.values(moodCounts);
    chart.update();
  }

  // Retrieve the most recently submitted selected emotions from local storage
  const storedSelectedEmotions = localStorage.getItem('selectedEmotions');
  if (storedSelectedEmotions) {
    const selectedEmotions = JSON.parse(storedSelectedEmotions);
    const mostRecentSelectedEmotions = selectedEmotions.slice(-1)[0];
    selectedEmotionsContainer.innerHTML = mostRecentSelectedEmotions.map((emotion) => `<div class="selected-emotion"><img src="http://127.0.0.1:5500/Mood_Tracker/emoji/${emotion.toLowerCase()}.PNG" alt="${emotion}">${emotion}</div>`).join('');
  }
});

// Check if the button should be disabled on page load
window.addEventListener('load', () => {
  const lastSubmissionTimestamp = localStorage.getItem('lastSubmissionTimestamp');
  const timerDuration = localStorage.getItem('timerDuration');
  if (lastSubmissionTimestamp && timerDuration) {
    const remainingTime = timerDuration - (Date.now() - lastSubmissionTimestamp);
    if (remainingTime > 0) {
      submitBtn.disabled = true;
      submitBtn.textContent = `Submit (available in ${formatTime(remainingTime)})`;
    }
  }
});