import swal from 'sweetalert';
import Api from './Api';

export default {
  async loginUser(user) {
    try {
      const response = await Api().post('/login', user);
      const { token } = response.data;

      localStorage.setItem('jwt', token);

      if (token) {
        swal({
          title: 'Excelente!',
          text: 'Login realizado com sucesso!',
          icon: 'success',
        });
      }
    } catch (err) {
      swal({
        title: 'Oops!',
        text: 'Erro ao realizar login no sistema!',
        icon: 'error',
      });
      this.$router.push('/');
    }
  },
};
