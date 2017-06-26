
import Component from 'vue-class-component'
import Vue  from "vue";

@Component
export default class App extends Vue {
  message = ''
  created() {
    const messages = [
      'I ❤️ VueJS',
      'I ❤️ TypeStyle',
      'I ❤️ one file',
    ]

    const randomIndex = Math.floor(Math.random() * messages.length)
    this.message = messages[randomIndex]
  }

  onMessageChanged(message: string) {
    this.message = message;
  }
  render(h) {
    return (
      <div class>
        <p>{this.message}</p>
      </div>
    )
  }
}
