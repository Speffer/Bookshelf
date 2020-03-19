class CommentService {
  save(comment) {
    let storageComment = localStorage.getItem('comments');

    let newComment = {
      comments: [ ...storageComment, ...comment ]
    };

    localStorage.setItem(JSON.stringify(newComment));
  };

  update(comment) {
    let storageComment = localStorage.getItem('comments');
    let newComments = [ ...storageComment ];
    let indexComment = newComments.findIndex(u => u.id === comment.id);
    
    if(indexComment > -1) {
      newComments.splice(indexComment, 1, { ...comment })
    }

    localStorage.setItem('comments', JSON.stringify(newComments));
  };

  delete(comment) {
    let storageComment = localStorage.getItem('comments');
    let newComments = [ ...storageComment ];
    let indexComment = newComments.findIndex(u => u.id === comment.id);
    
    if(indexComment > -1) {
      newComments.splice(indexComment, 1)
    }

    localStorage.setItem('comments', JSON.stringify(newComments));
  };
};

export default CommentService; 