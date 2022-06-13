import service from '@/server/http'

export default function product ({ methods = '', url = '', params = {}, data = [] }) {
  switch (methods) {
    case 'get':
      return service({
        method: 'get'
      })
  }
}
