<script setup>
import { login } from '@/services/api'
</script>
<template>
  <a-row type="flex" justify="center"  style="height: 100vh;">
    <a-col :span="8">
      <a-card title="Đăng nhập" bordered>
        <a-form
          :model="form"
          :rules="rules"
          layout="vertical"
          ref="loginForm"
        >
          <a-form-item label="Tên đăng nhập" name="username" :rules="rules.username">
            <a-input v-model:value="form.username" placeholder="Nhập tên đăng nhập" />
          </a-form-item>

          <a-form-item label="Mật khẩu" name="password" :rules="rules.password">
            <a-input-password v-model:value="form.password" placeholder="Nhập mật khẩu" />
          </a-form-item>

          <a-form-item>
            <a-button type="primary" block @click="onSubmit()">Đăng nhập</a-button>
          </a-form-item>
        </a-form>
        <p>username : {{ form.username }}</p>
        <p>password : {{ form.password }}</p>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'LoginDeltail',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: 'Vui lòng nhập tên đăng nhập!', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Vui lòng nhập mật khẩu!', trigger: 'blur' },
        ],
      },
      error: null, // Biến hiển thị lỗi
      errorMessage : null,
      // Thông tin tài khoản cứng
      validAccount: {
        username: 'admin',
        password: '1',
      },
    };
  },
  methods: {
    onSubmit() {
      // Xử lý logic đăng nhập
      
        if (this.form.username == "admin" && this.form.password == "1" ) {
          
          alert('Đăng nhập thành công!');
          this.error = null; 
         
        } else {
          alert('false')
          this.error = 'Tên đăng nhập hoặc mật khẩu không đúng!';
        }
      

    },
    async onSubmitLg() {
      try {
        const response = await login(this.form.username, this.form.password);
        alert(response.message); // Đăng nhập thành công
        // Lưu token hoặc chuyển hướng nếu cần
        this.errorMessage = null;
      } catch (error) {
        this.errorMessage = error.message || 'Đăng nhập thất bại!';
      }
    },
  }
};
</script>

<style scoped>
/* Tuỳ chỉnh giao diện */
</style>
