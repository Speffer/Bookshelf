import React, { useState, useEffect } from 'react';
import { Modal, Input, Select, Form } from 'antd';
import CategoryService from '../../../services/CategoryService';
import BookService from '../../../services/BookService';
import AnyUtils from '../../../utils/AnyUtils';
import '../../../index.css'
import moment from 'moment';

const { TextArea } = Input;
const { Option } = Select;


const EditBookModal = ({ 
    setCategoryTitle,
    getBooks, 
    visible, 
    onDismiss, 
    initialValue = { category: 4, link: "https://cdn.pixabay.com/photo/2017/04/12/16/16/book-2224934_960_720.jpg" } 
}) => {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async() => {
    try {
      let response = await CategoryService.getCategory();

      setCategories(JSON.parse(response));
    } catch (error) {
      
    }
  }

  const findCategoryTitle = (data) => {
    if(categories.length > 0 && data) {
      categories.map((category) => {
        if(category.id === data.category) {
          setCategoryTitle && setCategoryTitle(category.title);
        }
      });
    }
  }

  const onClose = () => {
    onDismiss && onDismiss(); 
  };

  const onSave = () => {
    form.validateFields()
      .then(async values => {
        let formData = { ...values, timestamp: moment(), deleted: false, id: initialValue.id }
        await BookService.update(formData);
        form.resetFields();
        getBooks && getBooks(formData);
        findCategoryTitle(formData);
        AnyUtils.swalSuccess('Livro editado com sucesso!');
        onDismiss && onDismiss();
      });
  }

  return (
    <Modal
      title="Editar o Livro"
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
      <Form
        labelCol={{ span: 8 }}
        form={form}
        wrapperCol={{ span: 16 }}
        name="newBook"
        initialValues={initialValue}
        style={{ paddingRight: '25%' }}
      >
        <Form.Item
          label="Título" 
          name="title"
          rules={[{ required: true, message: 'Título obrigatório!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Autor" 
          name="author"
          rules={[{ required: true, message: 'Autor obrigatório!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Descrição" 
          name="description"
        >
          <TextArea autoSize={{ minRows: 4, maxRows: 10 }} />
        </Form.Item>

        <Form.Item
          label="Link da imagem" 
          name="link"
        >
          <Input />
        </Form.Item>
      
        <Form.Item
          label="Categoria" 
          name="category"
        >
          <Select defaultValue={4} >
            {categories.map(({ id, title }) => {
              return (
                <Option key={id} value={id}>{ title }</Option>
              );
            })}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditBookModal;