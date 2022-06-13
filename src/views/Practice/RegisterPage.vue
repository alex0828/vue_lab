<template>
<div class="practice">
    <h1>Register</h1>
      <div class="container">
          <Form @submit="onSubmit" :validation-schema="schema">
            <div class="flex">
                <div class="fiftyWidth"><span class="right">身份證字號</span></div>
                <Field name="identity" type="email" rules="required" v-model="inputIdentity"/>
                <ErrorMessage name="identity" class="error"/>
            </div>
            <div class="flex">
                <div class="fiftyWidth"><span class="right">姓名</span></div>
                <Field name="name" type="text" v-model="inputName"/>
                <ErrorMessage name="name" class="error"/>
            </div>
            <div class="flex">
                <div class="fiftyWidth"><span class="right">性別</span></div>
                <Field name="gender" type="radio" value="male" v-model="inputGender"></Field> 男
                <Field name="gender" type="radio" value="female" v-model="inputGender"></Field> 女
                <ErrorMessage name="gender" class="error"/>
            </div>
            <div class="flex">
                <div class="fiftyWidth"><span class="right">手機</span></div>
                <Field name="phone" type="number" :rules="mobile" v-model="inputPhone"/>
                <ErrorMessage name="phone" class="error"/>
            </div>
            <button>Submit</button>
          </Form>
      </div>
</div>
</template>
<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
export default {
  components: {
    Field,
    Form,
    ErrorMessage
  },
  data () {
    const schema = yup.object({
      identity: yup.string().required(() => ('此欄位為必填欄位。')).matches(/^[a-zA-Z]\d{9}$/, '輸入格式錯誤，請重新輸入。'),
      gender: yup.string().required(() => ('此欄位為必填欄位。')),
      name: yup.string().required(() => ('此欄位為必填欄位。')).max(30, '輸入格式錯誤，請重新輸入。'),
      phone: yup.string().required(() => ('此欄位為必填欄位。')).matches(/^(09+\d{8})$/, '輸入格式錯誤，請重新輸入。')
    })
    return {
      schema,
      inputIdentity: '',
      inputName: '',
      inputGender: '',
      inputPhone: ''
    }
  },
  methods: {
    identity (value) {
      if (!value) return '此欄位為必填欄位。'
      if (!/^[a-zA-Z]\d{9}$/.test(value)) return '輸入格式錯誤，請重新輸入。'
      return true
    },
    name (value) {
      if (!value) return '此欄位為必填欄位。'
      if (value.length > 30) return '輸入格式錯誤，請重新輸入。'
      return true
    },
    mobile (value) {
      if (!value) return '此欄位為必填欄位。'
      if (!/^(09+\d{8})$/.test(value)) return '輸入格式錯誤，請重新輸入。'
      return true
    },
    onSubmit (values) {
      // Submit values to API...
      alert('身份證:' + this.inputIdentity + '姓名:' + this.inputName + '性別:' + this.inputGender + '手機:' + this.inputPhone)
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  width: 100%;
  padding: 4px;
  margin: 24px 0;
  box-sizing: border-box;
  flex-direction: row;
}
.thirtyWidth {
  width: 50%;
}
.fiftyWidth {
  width: 50%;
}
.left {
  float: left;
}
.right {
  float: right;
}
.error{
    color:rgb(240, 64, 64);
    margin:0;
    display:inline;
}
.container {
  margin: 0 300px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 0px 50px 20px rgba(97, 97, 97, 0.08);
}
.btn {
  width: 100px;
  height: 24px;
}
</style>
