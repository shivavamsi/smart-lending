<template>
  <b-container class="block-example">
    <b-jumbotron v-if="!formSubmitted">
      <b-form-group>
        <br>
        <b-row align-h="center" align-v="center">
          <b-col cols="4">
            <h2>Create Review</h2>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center">
          <b-col cols="2">
            <p>Local knowledge:</p>
          </b-col>
          <b-col cols="2">
            <star-rating
              v-model="review.knowledge"
              v-bind:show-rating="false"
              v-bind:inline="true"
              v-bind:border-width="2"
              v-bind:rounded-corners="true"
              border-color="#03c04a"
              v-bind:star-size="20"
              inactive-color="#ffffff"
              active-color="#03c04a"
            ></star-rating>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center">
          <b-col cols="2">
            <p>Process expertise:</p>
          </b-col>
          <b-col cols="2">
            <star-rating
              v-model="review.expertise"
              v-bind:show-rating="false"
              v-bind:inline="true"
              v-bind:border-width="2"
              v-bind:rounded-corners="true"
              border-color="#03c04a"
              v-bind:star-size="20"
              inactive-color="#ffffff"
              active-color="#03c04a"
            ></star-rating>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center">
          <b-col cols="2">
            <p>Responsiveness:</p>
          </b-col>
          <b-col cols="2">
            <star-rating
              v-model="review.responsiveness"
              v-bind:show-rating="false"
              v-bind:inline="true"
              v-bind:border-width="2"
              v-bind:rounded-corners="true"
              border-color="#03c04a"
              v-bind:star-size="20"
              inactive-color="#ffffff"
              active-color="#03c04a"
            ></star-rating>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center">
          <b-col cols="2">
            <p>Negotiation skills:</p>
          </b-col>
          <b-col cols="2">
            <star-rating
              v-model="review.negotiation"
              v-bind:show-rating="false"
              v-bind:inline="true"
              v-bind:border-width="2"
              v-bind:rounded-corners="true"
              border-color="#03c04a"
              v-bind:star-size="20"
              inactive-color="#ffffff"
              active-color="#03c04a"
            ></star-rating>
          </b-col>
        </b-row>
        <br>
        <b-row align-h="center" align-v="center">
          <b-col cols="4">
            <label label-size="lg">Add a headline:</label>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center">
          <b-col cols="4">
            <b-form-input v-model="review.headline"></b-form-input>
          </b-col>
        </b-row>
        <br>
        <b-row align-h="center" align-v="center">
          <b-col cols="4">
            <label label-size="lg">Write your review:</label>
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center">
          <b-col cols="4">
            <b-form-textarea v-bind:rows="3" v-model="review.note"></b-form-textarea>
          </b-col>
        </b-row>
        <br>
        <b-row align-h="center" align-v="center">
          <b-col cols="3"></b-col>
          <b-col cols="2">
            <b-button v-on:click.prevent="addReview" variant="outline-success">Submit</b-button>
          </b-col>
        </b-row>
        <div v-if="hasErrors">
          <p class="err">Following errors were found:</p>
          <div v-for="error in errors" v-bind:error="error" v-bind:key="error">
            <p class="err">{{error}}</p>
          </div>
        </div>
      </b-form-group>
    </b-jumbotron>
    <b-jumbotron
      v-if="formSubmitted"
      bg-variant="transparent"
      header="Thanks for reviewing. . ."
      header-level="4"
    ></b-jumbotron>
  </b-container>
</template>

<script>
import StarRating from "vue-star-rating";
import { db } from "@/firebase";

export default {
  name: "CreateReview",
  components: {
    "star-rating": StarRating
  },
  data() {
    return {
      review: {
        userid: 0,
        time: null,
        knowledge: 0,
        expertise: 0,
        responsiveness: 0,
        negotiation: 0,
        headline: "",
        note: ""
      },
      errors: [],
      hasErrors: false,
      formSubmitted: false
    };
  },
  firestore() {
    return {
      reviews: db.collection("reviews")
    };
  },
  methods: {
    validateForm: function() {
      this.errors = [];
      if (this.review.knowledge === 0)
        this.errors.push('Please rate our "Local knowledge"');
      if (this.review.expertise === 0)
        this.errors.push('Please rate our "Process Expertise"');
      if (this.review.responsiveness === 0)
        this.errors.push('Please rate our "Responsiveness"');
      if (this.review.negotiation === 0)
        this.errors.push('Please rate our "Negotiation Skills"');
      if (this.review.headline === "")
        this.errors.push("headline cannot be empty");
      if (this.review.note === "") this.errors.push("note cannot be empty");

      return this.errors.length === 0;
    },
    addReview: function() {
      // validate the form
      if (this.validateForm()) {
        this.hasErrors = false;
        this.review.userid = 0;
        this.review.time = Date.now();
        this.$firestore.reviews.add(this.review);
        this.formSubmitted = true;
        setTimeout(
          function() {
            this.$router.go(-1);
          }.bind(this),
          750
        );
      } else {
        this.hasErrors = true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 0 auto;
  font-size: 1.15em;
  line-height: 1.75em;
  padding: 3px 0px 0px 0px;
}

.err {
  color: red;
}
</style>
