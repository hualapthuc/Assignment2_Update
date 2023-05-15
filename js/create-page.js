$(function () {
    $("#navbar").load("login.html");
});

$(document).ready(function () {

    var $questionItemField = $('#question-item-field-base');


    $('.btn-add-answer').click(function () {
        // var $newAnswer = $(document).prev('.answer-input-container').find('.answer-input:first').clone(true);
        // $newAnswer.insertAfter($(document).prev('.answer-input-container').find('.answer-input:last'));
        // console.log('aaa')


        $('.answer-input-container').append($newAnswer);
    });


//    Add question button
    $('#btn-add-question').click(function () {
        $('.question-field').append($questionItemField.clone());
    });

    const addAnswerBtn = document.querySelectorAll('.btn-add-answer');

    addAnswerBtn.forEach(obj => {
        console.log(obj.id);
    })

    $('form').submit(function () {

    });


});