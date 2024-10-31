document.getElementById('post-btn').addEventListener('click', function(){
    const newCmnt = document.getElementById('new-comment')
    const comment = newCmnt.value;

    const commentContainer = document.getElementById('comment-container')
    const newComment = document.createElement('p')
    newComment.innerText = comment;
    commentContainer.appendChild(newComment);
    newCmnt.value = ''
    
})