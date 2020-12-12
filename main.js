

const joke = age =>{
    let joke_baby = ["Bah Bah Bah","*fart*"];
    let joke_children = ["What do you call a dinosaur that is sleeping? A dino-snore!","Why did the teddy bear say no to dessert? Because she was stuffed.","What did the left eye say to the right eye? Between us, something smells! "];
    let joke_teenager = ["If you have 13 apples in one hand and 10 oranges in the other, what do you have? Big Hands","What did the man say when he walked into a bar? Ouch","What did the French teacher say to her pupil? I don’t know I couldn’t understand her","Did you hear about the kidnapping at school? It's okay. He woke up.",];
    let joke_adult = ["I just read that someone in London gets stabbed every 52 seconds. Poor guy.","Give a man a match, and he'll be warm for a few hours. Set a man on fire, and he will be warm for the rest of his life.","I visited my friend at his new house. He told me to make myself at home. So I threw him out. I hate having visitors.","I'll never forget my Granddad's last words to me just before he died. 'Are you still holding the ladder?'","Are you still holding the ladder?"];
    let joke_senior = ["Fastest way to stop an argument between a bunch of deaf people? Just switch off the lights","What do you give an armless child for Christmas? Nothing, he wouldn’t be able to open it anyways.","I took away my ex-girlfriend’s wheelchair. Guess who came crawling back to me?"];

    var jokes = undefined

    if (age < 0 || age > 140){
        return 'Man! Something is really wrong with you, go check a doctor!';
    } else if (age < 3){
        jokes = Math.floor(Math.random() * joke_baby.length);
        return joke_baby[jokes];
        /*jokes.push(joke_baby);
        for (let i = 0; i < jokes.length; i++){
            return jokes[Math.floor(Math.random() * jokes.length)];
        }; */
        
    } else if (age < 12){
        jokes = Math.floor(Math.random() * joke_children.length);
        return joke_children[jokes];
    
    } else if (age < 20){
        jokes = Math.floor(Math.random() * joke_teenager.length);
        return joke_teenager[jokes];
    } else if (age < 65){
        jokes = Math.floor(Math.random() * joke_adult.length);
        return joke_adult[jokes];
    } else if (age < 141){
        jokes = Math.floor(Math.random() * joke_adult.length);
        return joke_adult[jokes];
    }
};

//testing age under 0 and over 140
//console.log(joke(-3));

//testing baby jokes
//console.log(joke(2));

//testing children jokes
//console.log(joke(9));

console.log(joke(2))