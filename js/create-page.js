window.onload = function () {
    // Add answer btn
    $(document).on('click', '.btn-add-answer', function () {
        var answer = $(this).closest('.answer').clone();
        // Clear value in input
        answer.find("input[type='text']").val('');
        $(this).closest('.answer-list').append(answer);
    });

    //  Add question btn
    $('#btn-add-question').click(function () {
        var question = $('.question:last').clone();
        question.find("input[type='text']").val('');
        // set at default answer (only one answer)
        question.find('.answer:not(:first-child)').remove();
        $('.question-list').append(question);
    });

    // Submit event
    $('form').submit(function (event) {
        event.preventDefault();

        // Create poll obj
        var pollObj = {
            name: String,
            question: [],
            status: 'active'
        };

        // poll name
        pollObj.name = $('.name-poll-input').val();

        // Question loop
        var $questionList = $('.question');
        $questionList.each(function () {
            // Create questionObj
            var questionObj = {
                questionContent: String,
                answer: []
            };

            // Get question input
            questionObj.questionContent = $(this).find('.question-input').val();
            console.log(`Question: ${questionObj.questionContent}`)

            // LOOP: answer
            var $answerList =  $(this).find('.answer-field >.answer-list > .answer');
            $answerList.each(function () {

                // Create answer obj
                var answerObj = {
                    answerContent: String,
                    result: Boolean
                };

                // Get answer content
                answerObj.answerContent = $(this).find('.answer-input').val();
                console.log(`\tanswer:${answerObj.answerContent} `)

                // Add answerObj to questionObj
                questionObj.answer.push(answerObj);
            });




            // Add questionObj to pollObj
            pollObj.question.push(questionObj);
        })

        // test
        // console.log(`Poll name: ${pollObj.name}`);

        // pollObj.question.forEach(question => {
        //    console.log(`\tquestion: ${question.questionContent}`);
        //
        //    question.answer.forEach(answer => {
        //        console.log(`\t\tanswer: ${answer.answerContent}`);
        //    });
        // });

        // // get listItem from localStorage
        // var listItems = localStorage.getItem('listItems');
        //
        // // Convert listItem to array
        // listItems = JSON.parse(listItems);
        //
        // // Base on User to storage
        // if(!listItems){
        //     // Create
        // }
        // else{
        //
        // }
    });


}