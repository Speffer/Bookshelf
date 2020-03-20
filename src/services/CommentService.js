const save = (comment) => {
  let storageComment = localStorage.getItem('comments');
  let newComment = {};

  if(storageComment) {
    newComment = {
      comments: [ ...storageComment, ...comment ]
    };
  }else {
    newComment = {
      comments: [ ...comment ]
    };
  }

  localStorage.setItem('comments', JSON.stringify(newComment));
};

const update = (comment) => {
  let storageComment = localStorage.getItem('comments');

  if(storageComment) {
    let newComments = [ ...storageComment ];
    let indexComment = newComments.findIndex(u => u.id === comment.id);
    
    if(indexComment > -1) {
      newComments.splice(indexComment, 1, { ...comment })
    }

    localStorage.setItem('comments', JSON.stringify(newComments));
  }
};

const deleteComment = (comment) => {
  let storageComment = localStorage.getItem('comments');

  if(storageComment) {
    let newComments = [ ...storageComment ];
    let indexComment = newComments.findIndex(u => u.id === comment.id);
    
    if(indexComment > -1) {
      newComments.splice(indexComment, 1)
    }

    localStorage.setItem('comments', JSON.stringify(newComments));
  }
};

const get = () => {
  return localStorage.getItem('comments');
}

export default {
  save, 
  update,
  deleteComment,
  get
}; 