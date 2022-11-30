var commands = document.getElementById("commands");
var user_input = document.getElementById("user_input");
var terminal_outputs = document.getElementById("terminal_outputs");

function execute(input){
    let output;
    input = input.toLowerCase();
    output = `<div>→ testing the input is ${input}</div>`;
    if(!COMMANDS.hasOwnProperty(input)){
        output += `<div> No such command: ${input} </div>`;
    }
    else{
        output += `<div>${COMMANDS[input]} </div>`;
    }
    terminal_outputs.innerHTML = `${terminal_outputs.innerHTML+output}`;
}

if (input == "github") {
    setTimeout (() => {window.open("https://github.com/bravealex1", "_blank");}, 2000);
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
        "Hello, my name is Alex. I like to work out at the gym.",
        experience:
        "I am the vice president of the Nittany Data Lab, and I am the front-end developer",
        education:
        "I am an Honors student at Pennsylvania State University",
        skills:
        "I know Java Programming, JavaScript, Python",
        contact:
        "407-619-6572",
        github:
        "https://github.com/bravealex1"

}