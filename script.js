document.getElementById('qa-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    var question = document.getElementById('question').value;
    if (question.trim() === '') {
        alert('请输入一个问题！');
        return;
    }

    // 创建一个新的div元素来显示问题
    var newQuestionDiv = document.createElement('div');
    newQuestionDiv.classList.add('question');
    newQuestionDiv.innerHTML = '<p><strong>问题：</strong> ' + question + '</p >';

    // 将新问题添加到问题列表中
    document.getElementById('questions-list').appendChild(newQuestionDiv);

    // 清空文本框
    document.getElementById('question').value = '';
});