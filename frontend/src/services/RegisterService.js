import swal from 'sweetalert';
import Api from './Api';

export default {
  async registerNewUser(newUser) {
    try {
      const response = await Api().post('/register', newUser);
      const { token } = response.data;

      if (token) {
        localStorage.setItem('jwt', token);
        swal({
          title: 'Excelente!',
          text: 'Usuário cadastrado com sucesso!',
          icon: 'success',
        });
      }
    } catch (err) {
      swal({
        title: 'Oops!',
        text: 'Erro ao criar um novo cadastro!',
        icon: 'error',
      });
    }
  },
};
