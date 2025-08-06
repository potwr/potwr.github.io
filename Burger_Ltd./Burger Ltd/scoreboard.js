import { createClient } from 'https://esm.sh/@supabase/supabase-js@1.35.6';

const supabaseUrl = 'https://eelvnbjoduceeoppqzkr.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlbHZuYmpvZHVjZWVvcHBxemtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMTc3NTIsImV4cCI6MjA2OTg5Mzc1Mn0.WfiKv3X2TOfFYfEECO1kJWxfmKVA5KCkXrAWkRWKozk"
const supabase = createClient(supabaseUrl, supabaseKey)

export async function fillScoreboard() {
    $('.scoreboard-content').empty();

    let { data: scoreboard, error } = await supabase
    .from('scoreboard')
    .select('*')
    .order('score', { ascending: false })
    .order('created_at', { ascending: true })
    .limit(99);
    let scoreboardLength = scoreboard.length;

    for (let i = 0; i < scoreboardLength; i++) {
        const position = i < 9 ? `0${i + 1}` : i + 1;
        let date = new Date(scoreboard[i].created_at);
        $('.scoreboard-content').append(`<div class="scoreboard-record">
            <div class="scoreboard-record-position">${position}</div>
            <div class="scoreboard-record-header">
                <div class="scoreboard-record-points">${scoreboard[i].score}</div>
                <div class="scoreboard-record-name">${scoreboard[i].nickname}</div>
            </div>
            <div class="scoreboard-record-date">${date.getDate().toString().padStart(2, '0')+'/'+((date.getMonth()+1).toString().padStart(2, '0'))+'/'+date.toLocaleDateString('en', {year: '2-digit'})+' '+date.getHours().toString().padStart(2, '0')+':'+date.getMinutes().toString().padStart(2, '0')}</span>
            </div>`);
        }
}