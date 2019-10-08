import { UserSession, AppConfig } from 'blockstack'

export default function ({ store }) {
  const appConfig = new AppConfig(['store_write', 'publish_data']);
  const userSession = new UserSession({ appConfig });
  store.commit('SET_USER', userSession);
}