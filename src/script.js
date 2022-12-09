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
        setTimeout(() => {window.open("https://github.com/bravealex1", "_blank");}, 2000);
    }
    
     if(input == "resume"){
        setTimeout(() => {window.open("https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:a85331b8-29e8-36e4-aa64-1ffc0daf2209", "_blank");}, 2000);
    }
    
     if(input == "linkedin"){
        setTimeout(() => {window.open("https://www.linkedin.com/in/alex-zhu802/", "_blank");}, 2000);
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
    'Supported commands: <span class="command-keyword">"about"</span>, <span class="command-keyword">"experience"</span>, <span class="command-keyword">"education"</span>, <span class="command-keyword">"softskills"</span>, <span class="command-keyword">"contact"</span>, <span class="command-keyword">"github"</span> <span class="command-keyword">"resume"</span> <span class="command-keyword">"resume"</span>',
        about:
        "Hello, my name is Alex, and I am a fourth-year student (senior) at Penn State majoring in Information Science and Technology with a focus on design and development. I am a hard-working and self-driving student who strives to succeed and achieve my career and personal goals. I have enhanced my java programming skills in the past two years, completing multiple projects in and outside classes. Since last semester, I have been self-learning python and R programming languages in Dataquest and Datacamp. In addition, I am involved in Nittany AI Challenge and teaming up with others to figure out solutions to increase crop yield by predicting pathogens and reducing economic losses for farmers. My future goal is to apply what I learned in college to the whole world and help to build a better world!",
        experience:
        "I am the vice president of the Nittany Data Lab, and I am the front-end developer",
        education:
        "I am an Honors student at Pennsylvania State University",
        skills:
        "Java, HTML, CSS, SQL, Node.js, Express.js, JavaScript, Machine Learning, Python",
        contact:
        "email: 20010426alex@gmail.com, phone number: 407-619-6572",
        github:
        "https:opening my github",
        resume:
        'opening my resume',
        linkedin:
        'opening my linkedin'

}