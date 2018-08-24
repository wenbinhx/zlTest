import Cookies from 'js-cookie'
import sessionStorage from '@/utils/sessionStorage'

const SessionIdKey = 'SESSIONID'

export function getSessionId() {
  return Cookies.get(SessionIdKey)
}

export function setSessionId(sessionId) {
  return Cookies.set(SessionIdKey, sessionId)
}

export function removeSessionId() {
  sessionStorage.removeAll() // 清空sessionStorage
  return Cookies.remove(SessionIdKey)
}
