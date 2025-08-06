import { createClient } from 'https://esm.sh/@supabase/supabase-js@1.35.6';
import { fillScoreboard } from './scoreboard.js';

const supabaseUrl = 'https://eelvnbjoduceeoppqzkr.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlbHZuYmpvZHVjZWVvcHBxemtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMTc3NTIsImV4cCI6MjA2OTg5Mzc1Mn0.WfiKv3X2TOfFYfEECO1kJWxfmKVA5KCkXrAWkRWKozk"
const supabase = createClient(supabaseUrl, supabaseKey)

export let secondsLeft = 180;
let endScore = 0;
export let endFormularSubmitted = false;

function endOfGame() {
    endScore = currentPoints;
    $('.endgame-points').text(endScore);
    $('.endgame-formular').css('display', 'block');
    gameIsOn = false;
    gameWasEnded = true;
    clearInterval(automaticFewerPoints);
};

setInterval(function() {
  if(gameIsOn == true) {
    secondsLeft > 0 ? secondsLeft-= 1 : secondsLeft = 0;
    let timeMinutes = Math.floor(secondsLeft / 60);
    let timeSeconds = secondsLeft % 60;
    let timeMinutesString = timeMinutes.toString().padStart(1, '0')+':'+timeSeconds.toString().padStart(2, '0');
    $('.kitchen-time-number').text(timeMinutesString);
    if (secondsLeft == 0) {
      endOfGame();
    }
  }
},1000);

function changeSubmittedButton() {
  $('.endgame-submit').text('Submitted');
  $('.endgame-submit').prop('disabled', true);
  $('.endgame-submit').css('background-color', '#ccc');
}

$('.endgame-name').on('keydown', function(event) {
  const allowedRegex = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż0-9 ()\u{1F300}-\u{1FAFF}]*$/u;
  const key = event.key;
  // Allow control keys (backspace, arrows, etc.)
  if (
    key.length === 1 &&
    !allowedRegex.test(key)
  ) {
    $('.engame-input-alert').text("Only letters, digits, spaces, parentheses, and emojis are allowed.");
  }
});

export async function submitEndgameFormular() {
  let name = $('.endgame-name').val();
  if (name.length < 3) {
    $('.engame-input-alert').text("Please enter a valid name with at least 3 characters.");
  }
  else {
    const { data, error } = await supabase
    .from('scoreboard')
    .insert([
      { score: endScore, nickname: name },
    ])
    .select()

    endFormularSubmitted = true;

    fillScoreboard();
    changeSubmittedButton();
  }
}

$('.endgame-submit').on('click', function(){submitEndgameFormular()});
$('.endgame-again').on('click', function() {
  location.reload();
});