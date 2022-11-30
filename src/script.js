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

    if(input == "github"){
        setTimeout(() => {window.open("https://github.com/chenkuanliao", "_blank");}, 2000);
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
        'Supported commands: <span class="command-keyword">"about"</span>, <span class="command-keyword">"experience"</span>, <span class="command-keyword">"education"</span>, <span class="command-keyword">"skills"</span>, <span class="command-keyword">"contact"</span>, <span class="command-keyword">"github"</span>',
    about:
        "Hello, my name is Brian, not Brain. I like chocolate and I don't like carrots",
    experience:
        'I wrote "hello world" in python, and I felt that I have the power in my hand!',
    education:
        'I learned to eat by myself at the age of 3. Impressive, isn\'t it?',
    skills:
        'I can hold three eggs in my mouth at the same time. Can you?',
    contact:
        'You can never find me! HAHAHA!',
    github:
        'opening my GitHub page ...'
    
}
