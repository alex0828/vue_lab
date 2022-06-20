<template>
    <Form @submit="onSubmit" :validation-schema="schema">
        <label for="name">姓名</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage name="name" />
        <label for="ID">身份證字號</label>
        <Field id="ID" name="ID" type="text" />
        <ErrorMessage name="ID" />
        <label for="phone">手機</label>
        <Field id="phone" name="phone" type="number" />
        <ErrorMessage name="phone" />
        <label for="gender">性別
            <div class="input-left flex-select">
                <Field name="gender" type="radio" value="male" v-model="inputGender"></Field> 男
                <Field name="gender" type="radio" value="female" v-model="inputGender"></Field> 女
            </div>
            <ErrorMessage name="gender" class="error" />
        </label>
        <button>Submit</button>
    </Form>
</template>

<script lang="ts">
import { Field, Form, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

export default {
    name: "App",
    components: {
        Field,
        Form,
        ErrorMessage,
    },
    setup() {
        const schema = Yup.object().shape({
            name: Yup.string().required(() => ('此欄位為必填欄位。')).max(30, '輸入格式錯誤，請重新輸入。'),
            ID: Yup.string().required(() => ('此欄位為必填欄位。')).matches(/^[a-zA-Z]\d{9}$/, '輸入格式錯誤，請重新輸入。'),
            gender: Yup.string().required(() => ('此欄位為必填欄位。')),
            phone: Yup.string().required(() => ('此欄位為必填欄位。')).matches(/^(09+\d{8})$/, '輸入格式錯誤，請重新輸入。')
        });

        function onSubmit(values: object) {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
        }

        return {
            schema,
            onSubmit,
        };
    },
};
</script>

<style lang="scss" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}

input,
label {
    display: block;
    margin-top: 20px;
}

input+span {
    display: block;
}

button {
    margin-top: 20px;
}
</style>
