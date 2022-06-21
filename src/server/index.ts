import service from "./http"
export default function product ({ methods = '', url = '', params = {}, data = [] }) {
    switch (methods) {
      case 'get':
        return service({
          method: 'get'
        })
    }
  }