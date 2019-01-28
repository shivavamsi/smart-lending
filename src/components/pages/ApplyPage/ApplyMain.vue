<template>
  <div>
    <b-container>
      <br>
      <b-jumbotron>
        <h1>Let's get started!</h1>
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
          <br>
          <b-row align-h="center" align-v="center">
            <b-col cols="5"></b-col>
            <b-col cols="3">
              <!--b-link :to="{ name: 'Application', params: {application} }"-->
              <b-button
                v-on:click.prevent="startApplication"
                variant="outline-success"
              >Start Application</b-button>
              <!--/b-link-->
            </b-col>
          </b-row>
        </b-form>
        <hr class="my-4">
        <h1>Continue where you left!</h1>
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
          <br>
          <b-row align-h="center" align-v="center">
            <b-col cols="5"></b-col>
            <b-col cols="3">
              <!--b-link :to="{ name: 'Application', params: {application} }"-->
              <b-button
                v-on:click.prevent="continueApplication"
                variant="outline-success"
              >Continue Application</b-button>
              <!--/b-link-->
            </b-col>
          </b-row>
        </b-form>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
import { db } from "@/firebase";
/* eslint-disable */

export default {
  name: "Apply",

  data() {
    return {
      applicationId: null,
      application: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
  },

  methods: {
    startApplication: function() {
      var tempApplication = this.application;
      this.$router.push({ name: "Application", params: { tempApplication } });
    },
    continueApplication: function() {
      var collectionReference = db.collection("applications");

      var query = collectionReference.where(
        "email",
        "==",
        this.application.email
      );

      query
        .get()
        .then(
          function(querySnapshot) {
            querySnapshot.forEach(
              function(doc) {
                var key;
                for (key in doc.data()) {
                  // console.log(key + ": " + doc.data()[key]);
                  // copies each property to the objCopy object
                  this.application[key] = doc.data()[key];
                  this.applicationId = doc.id;
                }
              }.bind(this)
            );

            var tempApplication = this.application;
            var tempId = this.applicationId;
            this.$router.push({
              name: "Application",
              params: { tempApplication, tempId }
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: lighter;
}
</style>
