<template>
  <div>
    <b-container class="block-example">
      <b-jumbotron header="Your Application" header-level="4">
        <br>
        <b-form>
          <b-row align-h="center" align-v="center">
            <b-col cols="4">
              <p>First Name:</p>
            </b-col>
            <b-col cols="4">
              <b-form-input
                v-model="application.firstName"
                required
                placeholder="Enter your first name"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row align-h="center" align-v="center">
            <b-col cols="4">
              <p>Last Name:</p>
            </b-col>
            <b-col cols="4">
              <b-form-input
                v-model="application.lastName"
                required
                placeholder="Enter your last name"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row align-h="center" align-v="center">
            <b-col cols="4">
              <p>Email Id:</p>
            </b-col>
            <b-col cols="4">
              <b-form-input
                v-model="application.email"
                type="email"
                required
                placeholder="Enter your email address"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row align-h="center" align-v="center">
            <b-col cols="4">
              <p>Mobile Number</p>
            </b-col>
            <b-col cols="4">
              <b-form-input
                v-model="application.mobile"
                required
                placeholder="Enter your mobile number"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row align-h="center" align-v="center">
            <b-col cols="4">
              <p>Social Security Number</p>
            </b-col>
            <b-col cols="4">
              <b-form-input
                v-model="application.ssn"
                required
                placeholder="Enter your social security number"
              ></b-form-input>
            </b-col>
          </b-row>

          <br>
          <b-row align-h="center" align-v="center">
            <b-col cols="6"></b-col>
            <b-col cols="2">
              <b-button v-on:click.prevent="submitApplication" variant="outline-success">Submit</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import { db } from "@/firebase";

export default {
  name: "Application",
  data() {
    return {
      application: this.$route.params.tempApplication,
      applicationId: this.$route.params.tempId
    };
  },
  methods: {
    createApplication: function() {
      db.collection("applications").add(this.application);
    },
    updateApplication: function() {
      db.collection("applications")
        .doc(this.applicationId)
        .set(this.application);
    },
    submitApplication: function() {
      if (this.applicationId === null) this.createApplication();
      else this.updateApplication();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
