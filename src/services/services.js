import http from "../http_config";

class Services {

  create(data) {
    return http.post("/students", data);
  }

  update(id, data) {
    return http.put(`/students/${id}`, data);
  }

  delete(id) {
    return http.delete(`/students/${id}`);
  }

  getAll() {
    return http.get("/students");
  }

  get(id) {
    return http.get(`/students/${id}`);
  }
}

export default new Services();