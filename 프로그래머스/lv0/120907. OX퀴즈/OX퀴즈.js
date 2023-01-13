function solution(quiz) {
  let result = [];
  quiz.forEach((question) => {
        let [firstNum, operator, secondNum, equal, answer] = question.split(' ');
        let realAnswer = operator === "+" ? +firstNum + +secondNum : +firstNum - +secondNum;
        let quizAnswer = realAnswer === +answer ? "O" : "X";
        result.push(quizAnswer)
    })
    return result;
}