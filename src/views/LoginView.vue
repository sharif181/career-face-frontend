<template>
  <section class="login-section">
    <div class="login-header">
      <h4>Welcome Back!</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididut ut labore
      </p>
    </div>

    <div class="login-form">
      <h2>Login your account</h2>

      <form>
        <input
            type="email"
            id="emails"
            name="emails"
            placeholder="Email Address"
            v-model="form.email"
        />

        <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            v-model="form.password"
        />

        <div class="login-checkbox-forgot">
          <div class="input-checkbox">
            <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
            />
            <label> Remember Me</label>
            <label class="login-forgot-pass"> Forgot Password?</label>
          </div>
        </div>
        <br/>
        <button @click.prevent="login">Login</button>
      </form>
    </div>

    <div class="login-or">
      <p>Or</p>
    </div>

    <div class="login-social-btn">
      <button>
        {" "}
        <i class="fab fa-google"></i> Join with Google
      </button>
      <button>
        {" "}
        <i class="fab fa-facebook-f"></i> Join with Facebook
      </button>
    </div>
  </section>
</template>

<script>
import ApiService from "@/services/api.service";
import JwtService from "@/services/jwt.service";
import NotificationsService from "@/services/notifications.service";

export default {
  name: "LoginView.vue",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      ApiService.post(`account/token/`, this.form).then(res => {
        JwtService.saveToken(res.data.access)
        ApiService.init();
        NotificationsService.success('login successfully')
        this.$router.push('/');
      }).catch(err => {
        NotificationsService.error('User not found')
        console.log(err.response.data.detail)
      })

    }
  }
}
</script>

<style scoped>
.login-section {
}

.login-header h4 {
  font-size: 55px;
  line-height: 72px;
  font-weight: 400;
  text-align: center;
  text-transform: capitalize;
  color: #2967be;
}

.login-header p {
  font-size: 27px;
  line-height: 40px;
  font-weight: 400;
  text-align: center;
  color: #919293;
  width: 40%;
  margin: auto;
}

.login-form h2 {
  font-size: 40px;
  line-height: 40px;
  font-weight: 500;
  text-align: center;
  color: #000000;
  width: 40%;
  margin: 4rem auto;
}

.login-form input[type="email"],
[type="password"] {
  margin: 1rem auto;
  width: 40%;
  display: block;
  height: 70px;
  border-radius: 8px;
  padding: 0px 20px;
  font-size: 20px;
}

.input-checkbox {
  display: flex;
  justify-content: start;
  align-items: center;
}

.login-form .input-checkbox input[type="checkbox"] {
  margin: 2rem auto;
  height: 20px !important;
  width: 25px !important;
}

.login-form label {
  margin: 2rem auto;
  font-size: 23px;
  padding: 0px 20px;
  font-weight: 400 !important;
}

.login-form button {
  width: 40%;
  height: 70px;
  border-radius: 8px;
  font-size: 22px;
  background-color: #2967be;
  color: #ffff;
  border: none;
  margin: auto;
  display: block;
}

.login-form button:hover {
  color: #2967be;
  background-color: #ffff;
  border: 1px solid #2967be;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.login-or p {
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  padding: 20px 0px 0px 0px;
}

.login-social-btn {
  text-align: center;
}

.login-social-btn button {
  margin: 30px 30px;
  width: 309px;
  padding: 10px;
  height: 55px;
  border-radius: 8px;
  font-size: 23px;
}

.login-social-btn button:nth-last-child(2) {
  background-color: #ff5050;
  color: #ffffff;
  border: 1px solid #ff5050;
}

.login-social-btn button:nth-last-child(1) {
  background-color: #2967be;
  color: #ffffff;
  border: 1px solid #2967be;
}

.login-forgot-level {
  margin: 0rem 0rem 0rem 16rem !important;
  color: #919293;
  cursor: pointer;
}

.login-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-forgot-pass {
  margin: 0rem 0rem 0rem 16rem !important;
}
</style>