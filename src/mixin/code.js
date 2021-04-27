import { getCaptcha } from '@/api/login'
import { v4 as uuidv4 } from 'uuid'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      captcha: '',
      svg: ''
    }
  },
  mounted () {
    this._getcaptcha()
  },
  methods: {
    _getCaptcha () {
      let sid = ''
      if (localStorage.getItem('sid')) {
        sid = localStorage.getItem('sid')
      } else {
        sid = uuidv4()
        localStorage.setItem('sid', sid)
      }
      this.$store.commit('setSid', sid)
      getCaptcha(sid).then((res) => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    }
  }
}
