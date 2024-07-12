

(function () {

    function Question(question,answer,correct){
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for(let i = 0 ; i < this.answer.length; i++){
            console.log(i + ':' + this.answer[i])
        }
    }

    Question.prototype.checkAnswer = function(ans,callback){
        let sc;
        if(ans = this.correct){
            console.log('Answer correct')
            sc = callback(true);
         } else {
            console.log('Wrong answer')
            sc = callback(false);
         }
         this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score){
        console.log('This is Your score'  + score)
        console.log('--------------------------')
    }

    let q1 = new Question('Is JavaScript the coolest programming language in the world?',['Yes','No'],0);
    let q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
    let q3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    function score(){
        let sc = 0;
        return function(correct){
            if(correct){
                sc++
            }
            return sc;
        }
    }

    let keepScore = score();
    
    let questions  = [q1,q2,q3];

   function nextQeuestion(){
    let q = Math.floor(Math.random() * questions.length);
    questions[q].displayQuestion();
    let answer = prompt('Please enter your answer (or type exit to quit)');

    if(answer !== 'exit'){
        questions[q].checkAnswer(parseInt(answer),keepScore);
        nextQeuestion();
    }
   }
   nextQeuestion();
})();

