export default {
  data() {
    return {
      name : 'testname'
    }
  },
  methods: {
    name() : number {
      return 2;
    },
  },
  render(h) {
    return (
      <div class="counter-wrapper">
        <p>{this.name}</p>
      </div>
    )
  }
}
