import _axios from "./_axios";

export default {
  getZcool(params: Object) {
    return _axios.get("/api/v1/zcool", { params });
  },
  //---------------matataki--------------
  postImport(params: Object) {
    return _axios.post("/api/v1/m/post/import", params);
  },
  postPublish(params: Object) {
    return _axios.post("/api/v1/m/post/publish", params);
  },
  notification(data: Object) {
    return _axios.post("/api/v1/notification", data);
  },
  getNotification(params: Object) {
    return _axios.get("/api/v1/notification", { params });
  },
  getNotificationRead(params: Object) {
    return _axios.get("/api/v1/notificationRead", { params });
  },
  notificationRead(data: Object) {
    return _axios.post("/api/v1/notificationRead", data);
  }
};
