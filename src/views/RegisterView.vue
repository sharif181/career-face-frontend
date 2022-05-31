<template>
  <section class="login-section">
    <div class="login-header">
      <h4>Join Our Community</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididut ut labore
      </p>
    </div>

    <div class="login-form">
      <h2>Create account</h2>

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
            v-model="form.password1"
        />

        <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            v-model="form.password2"
        />

        <div class="input-checkbox">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
          <label for="vehicle1"> I agree with terms & condition</label>
        </div>
        <br/>
        <button @click.prevent="register">Register</button>
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
import NotificationsService from "@/services/notifications.service";


export default {
  name: "RegisterView",
  data() {
    return {
      form: {
        email: "",
        password1: "",
        password2: ""
      }
    }
  },
  methods: {
    register() {
      ApiService.post(`account/register/`, this.form).then(res => {
        NotificationsService.success('User successfully Create')
        this.$router.push('/login');
      }).catch(err => {
        NotificationsService.error(`${err.response.data.message}`)
        console.log(err.response.data.message)
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
  margin: 0px auto;
  display: block;
  width: 40%;
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

</style>