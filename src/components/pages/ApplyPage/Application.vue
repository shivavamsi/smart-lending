<template>
  <div>
    <b-container class="block-example">
      <b-jumbotron v-if="!submitted" header="Your Application" header-level="4">
        <br>
        <b-form>
          <!--basic info form-->
          <div v-if="progress===1">
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
          </div>

          <!--address form-->
          <div v-if="progress===2" lead="Your most recent address">
            <b-row align-h="center" align-v="center">
              <b-col cols="4">
                <p>Address Line 1:</p>
              </b-col>
              <b-col cols="4">
                <b-form-input
                  v-model="application.address.lineOne"
                  required
                  placeholder="Enter your address"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row align-h="center" align-v="center">
              <b-col cols="4">
                <p>Address Line 2:</p>
              </b-col>
              <b-col cols="4">
                <b-form-input
                  v-model="application.address.lineTwo"
                  required
                  placeholder="Enter your address"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row align-h="center" align-v="center">
              <b-col cols="4">
                <p>City:</p>
              </b-col>
              <b-col cols="4">
                <b-form-input
                  v-model="application.address.city"
                  required
                  placeholder="Enter your city"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row align-h="center" align-v="center">
              <b-col cols="4">
                <p>State:</p>
              </b-col>
              <b-col cols="4">
                <b-form-input
                  v-model="application.address.state"
                  required
                  placeholder="Enter your state"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row align-h="center" align-v="center">
              <b-col cols="4">
                <p>Zip Code:</p>
              </b-col>
              <b-col cols="4">
                <b-form-input
                  v-model="application.address.zipCode"
                  required
                  placeholder="Enter your zip code"
                ></b-form-input>
              </b-col>
            </b-row>
          </div>

          <!--buttons-->
          <br>
          <div>
            <b-row align-h="center" align-v="center">
              <b-col cols="6"></b-col>
              <b-col cols="2">
                <b-button
                  v-on:click.prevent="submitApplication"
                  variant="outline-success"
                >Save & Continue</b-button>
              </b-col>
            </b-row>
          </div>
        </b-form>
      </b-jumbotron>
      <!--Application received message-->
      <b-jumbotron
        v-if="submitted"
        bg-variant="transparent"
        header="We have received your application."
        lead="Our team will contact you in 2 days. . ."
        header-level="4"
      ></b-jumbotron>
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
      progress: 1,
      application: Object.assign(this.$route.params.tempApplication, {
        address: {
          lineOne: null,
          lineTwo: null,
          city: "",
          state: "",
          zipCode: 0
        }
      }),
      applicationId: this.$route.params.tempId,
      submitted: false
    };
  },
  methods: {
    createApplication: function() {
      db.collection("applications")
        .add(this.application)
        .then(
          function(docRef) {
            var updateTimestamp = docRef.update({
              timestamp: Date.now()
            });
            console.log(this);
            this.applicationId = docRef;
          }.bind(this)
        )
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    updateApplication: function() {
      db.collection("applications")
        .doc(this.applicationId)
        .set(this.application);
    },
    submitApplication: function() {
      if (this.applicationId === undefined) this.createApplication();
      else this.updateApplication();

      this.progress++;

      if (this.progress >= 3) {
        this.submitted = true;
        setTimeout(
          function() {
            this.$router.push({ name: "home" });
          }.bind(this),
          1500
        );
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
