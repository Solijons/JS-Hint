<div class="container mt-3 mt-sm-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <form id="form" method="post" v-on:submit="validateForm">
        <div class="form-group">
          <label class="form-control-label" for="name">Name</label>
          <input id="name" name="name" class="form-control" type="text" v-model="name" v-bind:class="{ 'is-invalid': attemptSubmit && validateName }">
          <div class="invalid-feedback">This field is required.</div>
        </div><!-- /form-group -->
        
        <div class="form-group">
          <label class="form-control-label" for="number">Enter a number between 1 and 10</label>
          <input id="number" name="number" class="form-control" type="text" v-model="number" v-bind:class="{ 'is-invalid': attemptSubmit && wrongNumber }">
          <div class="invalid-feedback">Make sure this is a number between 1 and 10.</div>
        </div><!-- /form-group -->
        
        <button class="btn btn-primary">Submit</button>
      </form>
    </div><!-- /col -->
  </div><!-- /row -->
</div><!-- /container -->


export default {
  data:function()  {
    return {
      name: '',
      number: '',
      attemptSubmit: false,
    }
  },

  methods: {
    isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    validateName: function () { return this.name === ''; },
    wrongNumber: function () {
      return (
        this.isNumeric(this.number) === false ||
        this.number < 1 ||
        this.number > 10
      )
    },
    
    
    validateForm: function (event) {
      this.attemptSubmit = true;
      if (this.validateName || this.wrongNumber) event.preventDefault();
    },
  },
};

