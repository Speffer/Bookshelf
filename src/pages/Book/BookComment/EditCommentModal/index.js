import React, { useState } from 'react';
import { Modal, Input } from 'antd';
import CommentService from '../../../../services/CommentService';
import MessageUtils from '../../../../utils/MessageUtils';
import '../../../../index.css'

const { TextArea } = Input;


const EditCommentModal = ({ 
    getComments, 
    visible, 
    onDismiss, 
    initialValue
}) => {
  const [body, setBody] = useState('');

  const onClose = () => {
    onDismiss && onDismiss(); 
  };

  const onSave = () => {   
    let formData = { ...initialValue }

    formData.body = body;
    CommentService.update(formData);
    getComments && getComments();
    MessageUtils.swalSuccess('Comentário editado com sucesso!');
    onDismiss && onDismiss();
  }

  const onChange = event => {
    let value = event.target.value;

    setBody(value);
  };

  return (
    <Modal
      title="Editar o Comentário"
      className="modal-wrapper"
      visible={visible}
      onCancel={onClose}
      cancelText="Cancelar"
      okButtonProps={{ htmlType: 'submit' }}
      okText="Salvar"
      width="110vh"
      style={{top: 100}}
      destroyOnClose
      onOk={onSave}
    > 
      <TextArea onChange={onChange} autoSize={{ minRows: 4, maxRows: 10 }} />
    </Modal>
  );
};

export default EditCommentModal;