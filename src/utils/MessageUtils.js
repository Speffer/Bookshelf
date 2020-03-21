import Swal from 'sweetalert2'

class MessageUtils {
  swalSuccess(message){
    Swal.fire({
      html: `<h2><strong>${message}</strong></h2>`,
      customClass: {
        confirmButton: 'ant-btn ant-btn-primary',
      },
    });
  }
}

export default new MessageUtils();