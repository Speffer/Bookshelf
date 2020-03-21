const save = (comment) => {
  let storageComment = localStorage.getItem('comments');
  let parseComment = [ ...JSON.parse(storageComment)];
  let newComment = [];

  newComment = [ ...parseComment, {...comment, id: parseComment.length > 0 ? parseComment.length + 1 : 1} ];

  localStorage.setItem('comments', JSON.stringify(newComment));
};

const update = (comment) => {
  let storageComment = localStorage.getItem('comments');
  let newComments = [ ...JSON.parse(storageComment) ];
  let indexComment = newComments.findIndex(u => u.id === comment.id);
  
  if(indexComment > -1) {
    newComments.splice(indexComment, 1, { ...comment })
  }

  localStorage.setItem('comments', JSON.stringify(newComments));
};

const deleteComment = (id) => {
  let storageComment = localStorage.getItem('comments');
  let newComments = [ ...JSON.parse(storageComment) ];
  let indexComment = newComments.findIndex(u => u.id === id);
  
  if(indexComment > -1) {
    newComments.splice(indexComment, 1)
  }

  localStorage.setItem('comments', JSON.stringify(newComments));

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