import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, Comment, Avatar, Input, Popconfirm } from 'antd';
import CommentService from '../../../services/CommentService';
import MessageUtils from '../../../utils/MessageUtils';
import moment from 'moment';
import EditCommentModal from './EditCommentModal';
import '../../../index.css'

const { TextArea } = Input;

const BookComment = ({ bookID }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({});

  useEffect(() => {
    getComments();
  }, []);

  const onSave = () => {
    try {
      let form = {
        body: newComment,
        parentId: bookID,
        timestamp: moment(),
        author: 'Me',
        deleted: false
      };

      CommentService.save(form);
      getComments();
      setNewComment('');

      MessageUtils.swalSuccess('Comentário salvo com sucesso!');
    } catch (error) {
      // Se fosse integrado com uma api precisaria do catch
    }
  };

  const onDelete = (id) => {
    try {
      CommentService.deleteComment(id);
      getComments();

      MessageUtils.swalSuccess('Comentário deletado com sucesso!');
    } catch (error) {
      // Se fosse integrado com uma api precisaria do catch
    }
  };

  const getComments = () => {
    try {
      let response = CommentService.get();

      setComments(JSON.parse(response));
    } catch (error) {
      // Se fosse integrado com uma api precisaria do catch
    }
  }

  const onChange = event => {
    let value = event.target.value;

    setNewComment(value);
  };

  const onEditClick = commentOnClick => {
    setComment(commentOnClick);

    setModalVisible(true);
  };

  const renderComments = useCallback(() => {
    let count = 0;

    let commentsToShow = comments.map((commentToShow, index) => {
      if(!commentToShow.deleted && commentToShow.parentId === bookID) {
        count++;

        return (
          <Comment
            key={index}
            author={<p>{ commentToShow.author }</p>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="avatar"
              />
            }
          content={
            <div>
              <p>{ commentToShow.body }</p>
              <Button size="small" onClick={() => onEditClick(commentToShow)} type="primary">Editar</Button>
              <Popconfirm
                title="Tem certeza que quer excluir esse comentário?"
                onConfirm={() => onDelete(commentToShow.id)}
                okText="Sim, eu quero."
                cancelText="Não!"
              >
                <Button className="btn-default" size="small">Excluir</Button>
              </Popconfirm>
            </div>
          }
          datetime={
            moment(commentToShow.timestamp).format('DD/MM/YYYY')
          }
          />
        );
      }
    })
    
    return count > 0 ? commentsToShow : <h3 style={{ marginTop: 30, color: '#f92240' }}>Não existe nenhum comentário para esse livro</h3>;
  }, [comments]);

  return (    
    <Card title={<h3 className="category-title">Comentários: </h3>}>
      <EditCommentModal initialValue={comment} getComments={getComments} visible={modalVisible} onDismiss={() => setModalVisible(false)} />

      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <div>
              <TextArea onChange={onChange} rows={4} />
              <Button onClick={onSave} style={{ marginTop: 10 }} type="primary">
                Novo Comentário
              </Button>
          </div>
        }
      />

      { renderComments() }
    </Card>
  );
};

export default BookComment;