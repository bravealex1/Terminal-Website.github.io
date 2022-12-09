var commands = document.getElementById("commands");
var user_input = document.getElementById("user_input");
var terminal_outputs = document.getElementById("terminal_outputs");
var terminal_content = document.getElementById("terminal_content");

function execute(input){
    let output;
    input = input.toLowerCase();
    output = `<div>→ ${input}</div>`;
    if(!COMMANDS.hasOwnProperty(input)){
        output += `<div><span class="command">No such command: </span>${input} </div>`;
    }
    else{
        output += `<div>${COMMANDS[input]} </div>`;
    }
    
    terminal_outputs.innerHTML = `${terminal_outputs.innerHTML+output}`;
    terminal_content.scrollTop = terminal_content.scrollHeight;

    if(input == "food"){
        setTimeout(() => {window.open("https://www.hellofresh.com/pages/meal-kit-delivery?c=MD-6EZ7SWBQ2&dm=meals&dm_gifts=gifts&mealsize=4-2&utm_campaign=SEA_Bing_Brand_Refresh_2022_18FM&utm_source=bing&utm_medium=cpc&utm_content=act_seabrand_seabrand&utm_id=2f850055-a3b7-45a5-b3f8-6f4fdb3aab6c&utm_source=bing&utm_medium=cpc&utm_campaign=US-S%5B01%5D%3A%20Prospecting%20%7C%20Brand%20%7C%20Quality%20-%20Broad&utm_content=Frozen&utm_term=hello%20fresh%20gourmet&utm_id=bi~377410507~1243548166308209~kwd-77722084004709:loc-190~bb&msclkid=39cbb2e1a0a712459a1fd173c9ec6b8b", "_blank");}, 2000);
    }

    if(input == "snacks"){
        setTimeout(() => {window.open("https://www.gopuff.com/", "_blank");}, 2000);
    }

    if(input == "drinks"){
        setTimeout(() => {window.open("https://beverageuniverse.com/", "_blank");}, 2000);
    }

}

function key(e){
    const input = user_input.value;

    if(e.key == "Enter"){
        execute(input);
        user_input.value = "";
        return;
    }

    user_input.innerHTML = input + e.key;
}

document.addEventListener("keypress", key);

const COMMANDS = 
{
    help:
        'Supported commands: <span class="command-keyword">"food"</span>, <span class="command-keyword">"snacks"</span>, <span class="command-keyword">"drinks"</span>',
    food:
        "Hello, this is our food meun, please select from the food option listed to add to your order",
    snacks:
        'Hello, this is our snacks meun, please select from the food option listed to add to your order',
    drinks:
        'Hello, this is our snacks meun, please select from the food option listed to add to your order',
    // skills:
    //     'I can hold three eggs in my mouth at the same time. Can you?',
    // contact:
    //     'You can never find me! HAHAHA!',
    // github:
    //     'opening my GitHub page ...'
    
}
