<script lang="ts" setup>

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
            <a-button type="primary" block @click="onSubmit(form.username, form.password)">Đăng nhập</a-button>
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
      // Thông tin tài khoản cứng
      validAccount: {
        username: 'admin',
        password: '1',
      },
    };
  },
  methods: {
    onSubmit(user, pass) {
      // Xử lý logic đăng nhập
      
        if (user == "admin" && pass == "1" ) {
          
          alert('Đăng nhập thành công!');
          this.error = null; 
         
        } else {
          alert('false')
          this.error = 'Tên đăng nhập hoặc mật khẩu không đúng!';
        }
      

    }
  }
};
</script>

<style scoped>
/* Tuỳ chỉnh giao diện */
</style>
