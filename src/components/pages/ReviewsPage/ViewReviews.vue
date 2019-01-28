<template>
  <div>
    <b-container>
      <b-jumbotron bg-variant="transparent" header="Most Recent Customer Reviews" header-level="4">
        <br>
        <!--b-row align-h="end"-->
        <b-link to="/reviews/create">
          <b-button variant="outline-success">Write your review</b-button>
        </b-link>
      </b-jumbotron>

      <br>
      <div v-for="review in reviews" v-bind:review="review" v-bind:key="review.reviewid">
        <b-jumbotron v-bind:lead="review.headline">
          <p>user: {{review.userid}}</p>
          <b-row align-h="center" align-v="center">
            <b-col cols="2">
              <p class="line">Local knowledge:</p>
            </b-col>
            <b-col cols="9">
              <star-rating
                v-bind:rating="review.knowledge"
                v-bind:show-rating="true"
                v-bind:inline="true"
                v-bind:border-width="2"
                v-bind:rounded-corners="true"
                border-color="#03c04a"
                v-bind:star-size="20"
                inactive-color="#ffffff"
                active-color="#03c04a"
                v-bind:read-only="true"
              ></star-rating>
            </b-col>
          </b-row>
          <b-row align-h="center" align-v="center">
            <b-col cols="2">
              <p class="line">Process expertise:</p>
            </b-col>
            <b-col cols="9">
              <star-rating
                v-bind:rating="review.expertise"
                v-bind:show-rating="true"
                v-bind:inline="true"
                v-bind:border-width="2"
                v-bind:rounded-corners="true"
                border-color="#03c04a"
                v-bind:star-size="20"
                inactive-color="#ffffff"
                active-color="#03c04a"
                v-bind:read-only="true"
              ></star-rating>
            </b-col>
          </b-row>
          <b-row align-h="center" align-v="center">
            <b-col cols="2">
              <p class="line">Responsiveness:</p>
            </b-col>
            <b-col cols="9">
              <star-rating
                v-bind:rating="review.responsiveness"
                v-bind:show-rating="true"
                v-bind:inline="true"
                v-bind:border-width="2"
                v-bind:rounded-corners="true"
                border-color="#03c04a"
                v-bind:star-size="20"
                inactive-color="#ffffff"
                active-color="#03c04a"
                v-bind:read-only="true"
              ></star-rating>
            </b-col>
          </b-row>
          <b-row align-h="center" align-v="center">
            <b-col cols="2">
              <p class="line">Negotiation skills:</p>
            </b-col>
            <b-col cols="9">
              <star-rating
                v-bind:rating="review.negotiation"
                v-bind:show-rating="true"
                v-bind:inline="true"
                v-bind:border-width="2"
                v-bind:rounded-corners="true"
                border-color="#03c04a"
                v-bind:star-size="20"
                inactive-color="#ffffff"
                active-color="#03c04a"
                v-bind:read-only="true"
              ></star-rating>
            </b-col>
          </b-row>
          <br>
          <p>{{review.note}}</p>
        </b-jumbotron>
      </div>
    </b-container>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import { db } from "@/firebase";

export default {
  name: "Reviews",
  components: {
    "star-rating": StarRating
  },
  data() {
    return {};
  },
  firestore() {
    return {
      reviews: db.collection("reviews").orderBy("time", "asc")
    };
  },
  props: {
    msg: String
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line {
  display: inline;
  margin: 0 auto;
  line-height: 1.75em;
  padding: 3px 0px 0px 0px;
}
</style>
