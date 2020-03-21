import Swal from 'sweetalert2';
import moment from 'moment';


class AnyUtils {
  swalSuccess(message){
    Swal.fire({
      html: `<h2><strong>${message}</strong></h2>`,
      customClass: {
        confirmButton: 'ant-btn ant-btn-primary',
      },
    });
  };

  orderByAlpha(arrayToSort) {
    let sortedArray = arrayToSort.sort((a, b) => {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      return 0;
    });

    return sortedArray;
  };

  orderByDate(arrayToSort) {
    let sortedArray = arrayToSort.sort((a, b) => {
      if (moment(a.timestamp) > moment(b.timestamp)) return -1;
      else if (moment(a.timestamp) < moment(b.timestamp)) return 1;
      return 0;
    });

    return sortedArray;
  };
}

export default new AnyUtils();