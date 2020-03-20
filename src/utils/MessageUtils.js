import Swal from 'sweetalert2'

class MessageUtils {
  swalErrorWithTitle(message, title){
    Swal.fire({
      title: title,
      html: `<strong>${message}</strong>`,
      type: 'error',
      customClass: {
        confirmButton: 'ant-btn ant-btn-primary',
      },
    });
  }

  swalSuccess(message){
    Swal.fire({
      type: 'success',
      html: `<h2><strong>${message}</strong></h2>`,
      customClass: {
        confirmButton: 'ant-btn ant-btn-primary',
      },
    });
  }

  swalWarning(message){
    Swal.fire({
      type: 'warning',
      title: 'Atenção',
      html: `<strong>${message}</strong>`,
      customClass: {
        confirmButton: 'ant-btn ant-btn-primary',
      },
    });
  }
}

export default new MessageUtils();